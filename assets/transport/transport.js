
var station = $('#stName');

function fetchBart (station) {

    var apiKey = "MW9S-E7SL-26DU-VV8V&json=y";

    // fetch("https://api.bart.gov/api/etd.aspx?cmd=etd&orig="+ station + "&key=" + apiKey)
    fetch("https://api.bart.gov/api/etd.aspx?cmd=etd&orig=RICH&key=MW9S-E7SL-26DU-VV8V&json=y")

    .then(function (response) {
        console.log(response)
        return response.json();
      })
    
      .then(function (data) {
        console.log("data",data)
        
      });
      
}

fetchBart();

// Create a select menu, so the user can chose what is the station they want, the reason we are creating in this way as the dart require the station name abreviation.

$( function() {
    var availableTags = [
        "12th St. Oakland City Center",
        "16th St. Mission (SF)",
        "19th St. Oakland",
        "24th St. Mission (SF)",
        "Ashby (Berkeley)",
        "Antioch",
        "Balboa Park (SF)",
        "Bay Fair (San Leandro)",
        "Berryessa / North San Jose",
        "Castro Valley",
        "Civic Center (SF)",
        "Coliseum",
        "Colma",
        "Concord",
        "Daly City",
        "Downtown Berkeley",
        "Dublin/Pleasanton",
        "El Cerrito del Norte",
        "El Cerrito Plaza",
        "Embarcadero (SF)",
        "Fremont",
        "Fruitvale (Oakland)",
        "Glen Park (SF)",
        "Hayward",
        "Lafayette",
        "Lake Merritt (Oakland)",
        "MacArthur (Oakland)",
        "Millbrae",
        "Milpitas",
        "Montgomery St. (SF)",
        "North Berkeley",
        "North Concord/Martinez",
        "Oakland Int'l Airport",
        "Orinda",
        "Pittsburg/Bay Point",
        "Pittsburg Center",
        "Pleasant Hill",
        "Powell St. (SF)",
        "Richmond",
        "Rockridge (Oakland)",
        "San Bruno",
        "San Francisco Int'l Airport",
        "San Leandro",
        "South Hayward",
        "South San Francisco",
        "Union City",
        "Warm Springs/South Fremont",
        "Walnut Creek",
        "West Dublin",
        "West Oakland"
    ];
    $("#station").autocomplete({
      source: availableTags
    });
  } );


