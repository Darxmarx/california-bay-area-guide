//personal API key, 5,000 API calls per day
var apiKey = "3pOEjNFRg7sRIZM6MAdUVDCecyWU-vdaV8QdqxD_WyHlIcsykEO1FknqGAuWwaBAJmqMShjlAbYVMaK2xg1K-1zBEMBUEjM96x7yJb6ykezbVh46jSWRwwhKMblFY3Yx"
//url the API is calling on to retrieve information
    //https://cors-anywhere.herokuapp.com/ is added to serve as a proxy API to bypass CORS issues
var requestUrl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";

var restGrid = $("#rest-grid");
var searchTerm = $("#search-term");
var searchBtn = $("#search-btn");

//retrieves restaurant data from api
function loadRestaurants() {
    $.ajax({
    url: requestUrl,
    method: "GET",
    dataType: "json",
    headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin": "*",
        //To authenticate API calls with the API Key, set the Authorization HTTP header value as Bearer API_KEY.
        "Authorization": "Bearer " + apiKey 
    },
    data: { //dynamically adds in parameters
        location: "san-francisco", //always searches the San Francisco area for results
        categories: "restaurants", //always searches restaurants
        limit: 12, //returns 12 results for whatever user searched
        term: searchTerm.val() //plug in term from user input
    }
    }).then(function (response) {
        console.log(response); //checking if object was successfully retrieved

        for (var i = 0; i < response.businesses.length; i++) {
            var restName = response.businesses[i].name;
            console.log(restName);
            
            var restImg = response.businesses[i].image_url;
            console.log(restImg);

            var restUrl = response.businesses[i].url;
            console.log(restUrl);        
        }
    })
    restGrid.removeClass("invisible");
}



//modal that requires user to request access to cors-anywhere.herokuapp demo server
function createModal() {
    $('#dialog').dialog();
}

$(window).on("load", createModal);
searchBtn.click(loadRestaurants);
