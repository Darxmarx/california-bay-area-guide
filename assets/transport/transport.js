
var station = $('#stName');

var stationAbbreviation = ["12th",	"16th",	"19th",	"24th",	"ashb",	"antc",	"balb",	"bayf",	"bery",	"cast",	"civc",	"cols",	"colm",	"conc",	"daly",	"dbrk",	"dubl",	"deln",	"plza",	"embr",	"frmt",	"ftvl",	"glen",	"hayw",	"lafy",	"lake",	"mcar",	"mlbr",	"mlpt",	"mont",	"nbrk",	"ncon",	"oakl",	"orin",	"pitt",	"pctr",	"phil",	"powl",	"rich",	"rock",	"sbrn",	"sfia",	"sanl",	"shay",	"ssan",	"ucty",	"warm",	"wcrk",	"wdub",	"woak"];

var stationFullName = ["12th St. Oakland City Center",	"16th St. Mission (SF)",	"19th St. Oakland",	"24th St. Mission (SF)",	"Ashby (Berkeley)",	"Antioch",	"Balboa Park (SF)",	"Bay Fair (San Leandro)",	"Berryessa / North San Jose",	"Castro Valley",	"Civic Center (SF)",	"Coliseum",	"Colma",	"Concord",	"Daly City",	"Downtown Berkeley",	"Dublin/Pleasanton",	"El Cerrito del Norte",	"El Cerrito Plaza",	"Embarcadero (SF)",	"Fremont",	"Fruitvale (Oakland)",	"Glen Park (SF)",	"Hayward",	"Lafayette",	"Lake Merritt (Oakland)",	"MacArthur (Oakland)",	"Millbrae",	"Milpitas",	"Montgomery St. (SF)",	"North Berkeley",	"North Concord/Martinez",	"Oakland Int'l Airport",	"Orinda",	"Pittsburg/Bay Point",	"Pittsburg Center",	"Pleasant Hill",	"Powell St. (SF)",	"Richmond",	"Rockridge (Oakland)",	"San Bruno",	"San Francisco Int'l Airport",	"San Leandro",	"South Hayward",	"South San Francisco",	"Union City",	"Warm Springs/South Fremont",	"Walnut Creek",	"West Dublin",	"West Oakland",
];

function fetchBart (station) {

  var apiKey = "MW9S-E7SL-26DU-VV8V&json=y";
  fetch("https://api.bart.gov/api/etd.aspx?cmd=etd&orig="+station+"&key="+apiKey)

    // .then(function (response) {
    //     console.log(response)
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     console.log(data)
    //   });
  .then( (response) => {

    if (response.ok) {
    console.log(response);

          response.json().then((data) =>{
          console.log("data test",data);
          displayNextBart(data);

          });
        } else {
          alert('Error: Please select the correct staion from the autocomplete fild.');
          return;
        }
      })
}

function displayNextBart(nextBart) {
  var name = nextBart.root.date;
  console.log(name);

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


