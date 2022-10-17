var station = $('#stName');
var dest = document.querySelector(".dest");
var currentStation = document.querySelector(".stationName");
var stationContainer = document.querySelector("#stationContainer");
var localStg = [];
var stationAbbreviation = ["12th",  "16th", "19th", "24th", "ashb", "antc", "balb", "bayf", "bery", "cast", "civc", "cols", "colm", "conc", "daly", "dbrk", "dubl", "deln", "plza", "embr", "frmt", "ftvl", "glen", "hayw", "lafy", "lake", "mcar", "mlbr", "mlpt", "mont", "nbrk", "ncon", "oakl", "orin", "pitt", "pctr", "phil", "powl", "rich", "rock", "sbrn", "sfia", "sanl", "shay", "ssan", "ucty", "warm", "wcrk", "wdub", "woak"];
var stationFullName = ["12th St. Oakland City Center",  "16th St. Mission (SF)",  "19th St. Oakland", "24th St. Mission (SF)",  "Ashby (Berkeley)", "Antioch",  "Balboa Park (SF)", "Bay Fair (San Leandro)", "Berryessa / North San Jose", "Castro Valley",  "Civic Center (SF)",  "Coliseum", "Colma",  "Concord",  "Daly City",  "Downtown Berkeley",  "Dublin/Pleasanton",  "El Cerrito del Norte", "El Cerrito Plaza", "Embarcadero (SF)", "Fremont",  "Fruitvale (Oakland)",  "Glen Park (SF)", "Hayward",  "Lafayette",  "Lake Merritt (Oakland)", "MacArthur (Oakland)",  "Millbrae", "Milpitas", "Montgomery St. (SF)",  "North Berkeley", "North Concord/Martinez", "Oakland Int'l Airport",  "Orinda", "Pittsburg/Bay Point",  "Pittsburg Center", "Pleasant Hill",  "Powell St. (SF)",  "Richmond", "Rockridge (Oakland)",  "San Bruno",  "San Francisco Int'l Airport",  "San Leandro",  "South Hayward",  "South San Francisco",  "Union City", "Warm Springs/South Fremont", "Walnut Creek", "West Dublin",  "West Oakland",
];
//function to get the API information
function fetchBart (station) {
  var apiKey = "MW9S-E7SL-26DU-VV8V&json=y";
  fetch("https://api.bart.gov/api/etd.aspx?cmd=etd&orig="+station+"&key="+apiKey)
  .then( (response) => {
    console.log(localStg);
    if (response.ok) {
          response.json().then((data) =>{
          console.log(data);
          displayNextBart(data);
          // stationContainer.innerHTML = '';
          displayStations();
          });
        } else {
          alert('Error: Please select the correct staion from the autocomplete fild.');
          return;
        }
      })
}
// will display next bart
function displayNextBart(nextBart) {
  var stationName = nextBart.root.station[0].name;
  var loopEtd = nextBart.root.station[0].etd;
  currentStation.textContent = stationName;// Station name for the search
  dest.textContent = "";
  // create a for loop to iterate over the array, every station has multiples final destination and for that reason, I created a for loop to iterate over it.
  for (var i = 0; i < loopEtd.length; i++) {
    var loopEstimate = nextBart.root.station[0].etd[i].estimate;// loop for time
    var finalDestination = nextBart.root.station[0].etd[i].destination; // display the final dest name
    var divCard = document.createElement("div");
    var h3 = document.createElement("h3");
    h3.textContent = "Final destination: " + finalDestination;
    dest.appendChild(divCard);
    h3.setAttribute("class","h3style");
    divCard.appendChild(h3);
    // the second for loop is to iterate over the nested array, so I will be able to display to the user the departure time and also the next bart available.
    for(var j = 0; j < loopEstimate.length; j++ ) {
      var h4 = document.createElement("h4");
      var nextBartTime = nextBart.root.station[0].etd[i].estimate[j].minutes;
      var platformNumb = nextBart.root.station[0].etd[i].estimate[j].platform;
      // create if statment, as I want to display the for the first time as Departure in and the second time to display as NEXT BART
      if (j === 0) {
        h4.textContent = "Departure in: " + nextBartTime + " minutes, Platform: " + platformNumb;
        divCard.appendChild(h4);
      } else {
        h4.textContent = "Next BART in: " + nextBartTime + " minutes, Platform: " + platformNumb;
        divCard.appendChild(h4);
        j++;
      }
    }
  }
}
// Function to compare the full station name and the Abbreviation name, it returns the abbreviation and add it to the FETCH function
function setAbbreviation(station){
  if (localStg.includes(station) === false &&  stationFullName.includes(station) === true){// it will check if the name already exists
    localStg[localStg.length] = station; //save the station name in the last index of the array
    console.log(localStg);
    if(localStg.length > 5) {// it will remove the first index of the array
      localStg.shift();
    }
    localStorage.setItem("station", JSON.stringify(localStg));//Save the info inside the localStorage
  }
  var stationAbbr = "";
  for (var i = 0; i < stationFullName.length; i++){
    if (station === stationFullName[i]){
      stationAbbr = stationAbbreviation[i];
    }
  }
  console.log("This is the Statoin Abbreviation: " + stationAbbr);
  fetchBart(stationAbbr);
}
// Create a autofill menu, so the user can chose what is the station they want, the reason we are creating in this way as the dart require the station name abreviation.
$(function() {
  var staionAvailable = stationFullName;
    $("#station").autocomplete({
      source: staionAvailable
    });
  } );
function search(){
  setAbbreviation(document.querySelector(".search-bar").value);
}
document.querySelector(".search button").addEventListener("click", function(){
  search();
});
function displayStations() {// save in the array the localStorage information
  var storedStations = JSON.parse(localStorage.getItem("station"));
  if (storedStations !== null) {// will check if the localStorage is not null
    localStg = storedStations; //then will add the information from local storage to the var localStg
    addStationToDisplay();
  }
}
function addStationToDisplay(){
  stationContainer.innerHTML = '';// remove all the buttons, as I need it to go in the for loop to check if there is any update;
  for (var i = 0; i <localStg.length; i++){
    var stationStg = localStg[i];
    var button = document.createElement("button");
    button.textContent = stationStg;
    button.setAttribute("class","buttonInDiv");
    button.addEventListener("click", function(event){// add the event listner in the every button
      var stationStg = event.target.textContent;
      console.log(stationStg);
      setAbbreviation(stationStg);
  });
  stationContainer.appendChild(button);
  }
}
function localStgSize() {
}
displayStations();