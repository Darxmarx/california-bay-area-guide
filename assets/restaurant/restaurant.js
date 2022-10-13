//personal API key, 5,000 API calls per day
var apiKey = "3pOEjNFRg7sRIZM6MAdUVDCecyWU-vdaV8QdqxD_WyHlIcsykEO1FknqGAuWwaBAJmqMShjlAbYVMaK2xg1K-1zBEMBUEjM96x7yJb6ykezbVh46jSWRwwhKMblFY3Yx"
//url the API is calling on to retrieve information
var requestUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=NYC";

$.ajax({
    url: requestUrl,
    method: "GET",
    headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "*",
        "Authorization": "Bearer " + apiKey
    }
    /*data: {
        location: "San Francisco"
    }*/
}).then(function (response) {
    console.log(response);
});