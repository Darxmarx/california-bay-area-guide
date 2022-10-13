




// Create a select menu, so the user can chose what is the station they want, the reason we are creating in this way as the dart require the station name abreviation.

function fetchBart (station) {

    var apiKey = "MW9S-E7SL-26DU-VV8V&json=y";

    fetch("https://api.bart.gov/api/etd.aspx?cmd=etd&orig="+ station + "&key=" + apiKey)

    .then((response) =>response.json())
    console.log(response)
    .then((data) => (data))

}