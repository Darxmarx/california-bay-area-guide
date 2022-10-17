# newbieBay: The California Bay Area Guide

## Description

A handy, intuitive website that grants users a number of resources suited for life in California's bay area, utilizing multiple API calls to supplement  well-crafted HTML and CSS elements.

## Installation

First, [navigate to the site.](https://darxmarx.github.io/california-bay-area-guide/)
<br/>
Then, click on the navigation links to check out the resources!

## Technologies Used

* HTML
* CSS
* JavaScript
* jQuery
* jQuery UI
* Tailwind CSS
* simplePagination.js
* Lottie Files
* GitHub
* GitBash


## Usage / User Stories

Our group's website, newbieBay, is founded upon numerous profound questions many often ask upon finding themselves in the bay area of beautiful California: What's the weather like? How can I get around? What should I eat? Are there any jobs I can find? Instead of having to scour the world wide web, users can find the answers to all of these questions all within newbieBay. The landing page of newbieBay is meticulously designed to be warm and welcoming, utilizing a bright, cheery interface and intriguing them with the small variety of options at their disposal. In addition, the landing page utilizes the Open Weather Map API to present the current weather in San Francisco. The handy navigation bar is always at the top of each page, enabling easy access to all the website's features. Users can check Bay Area Rapid Transit District (BART) locations and departure times, powered by the BART Legacy API, quickly informing them of the public transport available. In addition, users may find themselves at the Restaurant tab, powered by the Yelp Fusion API, and quickly search up the top 12 best matches for restaurants based on user input. The Jobs link in the navigation bar tops off the site's features, granting access to Adzuna's API to search for jobs based on keyword and location. No more hassle to get essential data to life in the bay area--newbieBay has you covered!

## CSS Framework Details

Utilizing Tailwind CSS is comparable to utilizing Bootstrap in an HTML application--Tailwind automatically creates a multitude of classes that, when employed in the HTML, provide a variety of styles that would be much more difficult to create using just a simple CSS file. Tailwind requires very minimal runtime to load, even when directly linked in the HTML like in our project. In addition, Tailwind's preset classes can be modified using a base CSS file whenever used. [The docs for Tailwind CSS](https://tailwindcss.com/docs/installation) contain well-written instructions and live usages of the preset styling that Tailwind grants users access to.
<br/>
Below is a demo of the dynamic screen sizing of our website, powered by TailWind CSS' flex features.
<br/>
![website](./assets/images/sizing.gif "website screen size demo")

## Features Accomplished via API

![website](./assets/images/restdemo.gif "Restaurant API call demo")
<br/>
```
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
```
<br/>

![website](./assets/images/jobdemo.gif "Job API call demo")
<br/>
```
function displayVacancyResult (dataList) {
	var itemLi = "";
	for (var i = 0; i < dataList.length; i++) {
	// get data from API
	var item = dataList[i];
	var redirect = item.redirect_url;
	var company = item.company.display_name || "";
	var position = item.title;
	var location = item.location.display_name;
	var description = item.description;
	// API data will fit in to li
	var liTemplate = 
```
<br/>

![website](./assets/images/bartdemo.gif "BART API call demo")
<br/>
```
for (var i = 0; i < loopEtd.length; i++) {

    var loopEstimate = nextBart.root.station[0].etd[i].estimate;// loop for time
    var finalDestination = nextBart.root.station[0].etd[i].destination; // display the final dest name

    var divCard = document.createElement("div");
    var h3 = document.createElement("h3"); 
    h3.textContent = "Final destination: " + finalDestination;

    dest.appendChild(divCard);
    h3.setAttribute("class","h3style");
```


## Credits

Luiz Borges: [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/luizborges146) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](https://www.linkedin.com/in/luiz-borges-2377b7142//)
<br/>
Ying ying Liu: [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/yingyliu) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](https://www.linkedin.com/in/ying-ying-l-5865a4136//)
<br/>
Shaun Phommachack: [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/shaunphommachack) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](https://www.linkedin.com/in/shaun-phommachack-0a7088152//)
<br/>
Ryan Feola: [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/Darxmarx) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](https://www.linkedin.com/in/ryan-feola-052892196//)

## License

Please refer to the LICENSE in the repo.