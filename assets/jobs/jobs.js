var mainEl = document.querySelector("main");
var searchIcon = document.querySelector("#search-btn"); //search button
var simpleSearch = document.querySelector("#simple-search"); //search bar (first column)
var simpleSearchOne = document.querySelector("#simple-search1"); //search bar (second column)


var jobsresultEl = document.querySelector(".jobsresult");
var iconHome = document.querySelector(".icon-home");
var simpleSearchResult = document.querySelector("#simple-search-result"); //search bar (result) (first column)
var simpleSearchOneResult = document.querySelector("#simple-search1-result"); //search bar (result) (second column)
var searchIconResult = document.querySelector("#search-btn-result"); //search button (result)
var searchHistory = document.querySelector(".search-history"); // search history record
var vacanciesList = document.querySelector(".vacancies-list");



function generateHistoryRecord (searchInputResult, searchInputOneResult) {
	var historySearchList = JSON.parse(localStorage.getItem("historySearch") || "[]");
	historySearchList.push(searchInputResult + ";" + searchInputOneResult);
	localStorage.setItem("historySearch", JSON.stringify(historySearchList));
	var itemLi = "";
	for (var i = 0; i < historySearchList.length; i++) {
	 const item = historySearchList[i];
	 itemLi += `<li class="cursor-pointer bg-slate-300 p-2 m-3">${item}</li>`;
	}
	searchHistory.innerHTML = itemLi;
	var searchHistoryLis = document.querySelectorAll(".search-history li");
   
	for(let i=0;i<searchHistoryLis.length;i++){
	 searchHistoryLis[i].addEventListener("click",function(){ 
	  getJobsAPI (historySearchList[i].split(";")[0], historySearchList[i].split(";")[1]);
	 });
	}

   }

function displayVacancyResult (dataList) {
	var itemLi = "";
	for (var i = 0; i < dataList.length; i++) {
	var item = dataList[i];
	var redirect = item.redirect_url;
	var company = item.company.display_name || "";
	var position = item.title;
	var location = item.location.display_name;
	var description = item.description;
	var liTemplate = `
		<li
			class="border rounded-md p-5 transition ease-in-out delay-150 bg-white hover:bg-cyan-50 hover:scale-105 hover:shadow-md duration-300"
		>
			<a class="block" href="${redirect}" target="_blank">
				<h2 class="text-xl font-bold text-sky-600">
					${company}
				</h2>
				<h3 class="text-md">${position}</h3>
				<span class="text-stone-400 text-sm">${location}</span>
				<p class="line-clamp-3">
					${description}
				</p>
			</a>
		</li>
	`;
	itemLi += liTemplate;
}
vacanciesList.innerHTML = itemLi;
}


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