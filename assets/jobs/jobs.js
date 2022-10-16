var mainEl = document.querySelector("main");
var searchIcon = document.querySelector("#search-btn"); //search button
var simpleSearch = document.querySelector("#simple-search"); //search bar (first column)
var simpleSearchOne = document.querySelector("#simple-search1"); //search bar (second column)


var jobsresultEl = document.querySelector(".jobsresult");
var iconHome = document.querySelector(".icon-home");
var simpleSearchResult = document.querySelector("#simple-search-result"); //search bar (result) (first column)
var simpleSearchOneResult = document.querySelector("#simple-search1-result"); //search bar (result) (second column)
var searchIconResult = document.querySelector("#search-btn-result"); //search button (result)


function getJobsAPI (searchInputResult, searchInputOneResult) {
	var apiId = 'f79154d7';
	var apiKey = '2423d428da62311114e0eebc8ee7e7e8'
	var jobsApiUrl = `http://api.adzuna.com/v1/api/jobs/us/search/${currentPage}?app_id=${apiId}&app_key=${apiKey}&results_per_page=${showApiPerPage}&what=${searchInputResult}&where=${searchInputOneResult}&content-type=application/json`;

	fetch(jobsApiUrl)
		.then(response => response.json())
		.then(response => {
			switchPage (false);
			var dataList = response.results;
			var totalNumber = response.count;
			displayVacancyResult (dataList);
			generateHistoryRecord (searchInputResult, searchInputOneResult);

		})
		.catch(err => console.error(err));
}

lottie.loadAnimation({
	container: document.querySelector(".icon-home"), // the dom element that will contain the animation
	renderer: "svg",
	loop: true,
	autoplay: true,
	path: "home.json" // the path to the animation json
});

searchIcon.addEventListener("click", function (e) {
	e.preventDefault();
	var searchInputResult = simpleSearch.value; //get the value from first column
	var searchInputOneResult = simpleSearchOne.value; //get the value from second column
	getJobsAPI (searchInputResult, searchInputOneResult);
});