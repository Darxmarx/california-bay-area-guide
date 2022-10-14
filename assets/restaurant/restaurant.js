//personal API key, 5,000 API calls per day
var apiKey = "3pOEjNFRg7sRIZM6MAdUVDCecyWU-vdaV8QdqxD_WyHlIcsykEO1FknqGAuWwaBAJmqMShjlAbYVMaK2xg1K-1zBEMBUEjM96x7yJb6ykezbVh46jSWRwwhKMblFY3Yx"
//url the API is calling on to retrieve information
    //https://cors-anywhere.herokuapp.com/ is added to serve as a proxy API to bypass CORS issues
var requestUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";

var searchTerm = $("#search-term");
var searchBtn = $("#search-btn");


function loadRestaurants() {
$.ajax({
    url: requestUrl,
    method: "GET",
    headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "*",
        //To authenticate API calls with the API Key, set the Authorization HTTP header value as Bearer API_KEY.
        "Authorization": "Bearer " + apiKey 
    },
    data: {
        location: "san-francisco", //always searches the San Francisco area for results
        categories: "restaurants", //always searches restaurants
        term: searchTerm.val() //plug in term from user input
    }
}).then(function (response) {
    console.log(response);
});
}

searchBtn.click(loadRestaurants);