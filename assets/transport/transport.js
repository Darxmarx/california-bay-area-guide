
var station = $('#stName');
var dest = document.querySelector(".dest");

var stationAbbreviation = ["12th",	"16th",	"19th",	"24th",	"ashb",	"antc",	"balb",	"bayf",	"bery",	"cast",	"civc",	"cols",	"colm",	"conc",	"daly",	"dbrk",	"dubl",	"deln",	"plza",	"embr",	"frmt",	"ftvl",	"glen",	"hayw",	"lafy",	"lake",	"mcar",	"mlbr",	"mlpt",	"mont",	"nbrk",	"ncon",	"oakl",	"orin",	"pitt",	"pctr",	"phil",	"powl",	"rich",	"rock",	"sbrn",	"sfia",	"sanl",	"shay",	"ssan",	"ucty",	"warm",	"wcrk",	"wdub",	"woak"];

var stationFullName = ["12th St. Oakland City Center",	"16th St. Mission (SF)",	"19th St. Oakland",	"24th St. Mission (SF)",	"Ashby (Berkeley)",	"Antioch",	"Balboa Park (SF)",	"Bay Fair (San Leandro)",	"Berryessa / North San Jose",	"Castro Valley",	"Civic Center (SF)",	"Coliseum",	"Colma",	"Concord",	"Daly City",	"Downtown Berkeley",	"Dublin/Pleasanton",	"El Cerrito del Norte",	"El Cerrito Plaza",	"Embarcadero (SF)",	"Fremont",	"Fruitvale (Oakland)",	"Glen Park (SF)",	"Hayward",	"Lafayette",	"Lake Merritt (Oakland)",	"MacArthur (Oakland)",	"Millbrae",	"Milpitas",	"Montgomery St. (SF)",	"North Berkeley",	"North Concord/Martinez",	"Oakland Int'l Airport",	"Orinda",	"Pittsburg/Bay Point",	"Pittsburg Center",	"Pleasant Hill",	"Powell St. (SF)",	"Richmond",	"Rockridge (Oakland)",	"San Bruno",	"San Francisco Int'l Airport",	"San Leandro",	"South Hayward",	"South San Francisco",	"Union City",	"Warm Springs/South Fremont",	"Walnut Creek",	"West Dublin",	"West Oakland",
];

function fetchBart (station) {

  var apiKey = "MW9S-E7SL-26DU-VV8V&json=y";
  fetch("https://api.bart.gov/api/etd.aspx?cmd=etd&orig="+station+"&key="+apiKey)

  .then( (response) => {

    if (response.ok) {
    // console.log(response);

          response.json().then((data) =>{
          console.log(data);
          displayNextBart(data);

          });
        } else {
          alert('Error: Please select the correct staion from the autocomplete fild.');
          return;
        }
      })
}

function displayNextBart(nextBart) {
  var date = nextBart.root.date; // check the today date
  var time1 = nextBart.root.time;  // check the time

  var stationName = nextBart.root.station[0].name; // check the station name

  //var destination = nextBart.root.station[0].etd[0].destination; //check the destination
  // var platformNumb = nextBart.root.station[0].etd[0].estimate[0].platform; //platform
  //var nextBartTime = nextBart.root.station[0].etd[0].estimate[0].minutes; //next bart departure

  // ################################################
  var loopEtd = nextBart.root.station[0].etd;//use this to create the for loop on the statation
  // ################################################


  dest.textContent = stationName;// this is from a global variable
  for (var i = 0; i < loopEtd.length; i++) {
    var loopEstimate = nextBart.root.station[0].etd[i].estimate;// loop for time
    var divCard = document.createElement("div");// creates a div that will add the API
    var finalDestination = nextBart.root.station[0].etd[i].destination;
    divCard.textContent = "Final destination: " + finalDestination;
    dest.appendChild(divCard);
    // console.log("the destination is: " + finalDestination);
    for(var j = 0; j < loopEstimate.length -1; j++ ) {
      var h4 = document.createElement("h4");
      var nextBartTime = nextBart.root.station[0].etd[i].estimate[j].minutes;// Check the min
      var platformNumb = nextBart.root.station[0].etd[i].estimate[j].platform; // Check platf
      
      if (j === 0) {
        h4.textContent = "Departure in: " + nextBartTime + ", Platform: " + platformNumb;
        divCard.appendChild(h4);
      } else {
        h4.textContent = "Next BART in: " + nextBartTime + ", Platform: " + platformNumb;
        divCard.appendChild(h4);
      }
    }
  }

   console.log(date, stationName,time1,platformNumb);
   console.log(loopEtd);
}

// Function to compare the full station name and the Abbreviation name, it returns the abbreviation and add it to the FETCH function
function setAbbreviation(station){
  var stationAbbr = "";
  for (var i = 0; i < stationFullName.length; i++){
    if (station === stationFullName[i]){
      stationAbbr = stationAbbreviation[i];
    }
    
  }
  console.log("This is the Statoin Abbreviation: " + stationAbbr);
  fetchBart(stationAbbr);
}

// setAbbreviation("Millbrae");


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


