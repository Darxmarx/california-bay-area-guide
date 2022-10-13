//personal API key, 5,000 API calls per day
const apiKey = "3pOEjNFRg7sRIZM6MAdUVDCecyWU-vdaV8QdqxD_WyHlIcsykEO1FknqGAuWwaBAJmqMShjlAbYVMaK2xg1K-1zBEMBUEjM96x7yJb6ykezbVh46jSWRwwhKMblFY3Yx"

var searchRequest = { //restricts the restaurant search so that it's only locations in san francisco
    location: "san francisco, ca"
}

var options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        //authenticate API calls with the API key via setting Authorization HTTP header value as Bearer <yourapikey>
        "Authorization": "Bearer " + apiKey
    }
}

function searchRestaurants() {
    var apiUrl = "https://api.yelp.com/v3"

    fetch(apiUrl, options)
        .then(function (response) {
            console.log("response", response);
            return response.json();
        })
}

searchRestaurants();