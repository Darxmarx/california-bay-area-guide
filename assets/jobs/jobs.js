// jobs homepage section
var mainEl = document.querySelector("main");
var searchIcon = document.querySelector("#search-btn"); //search button
var simpleSearch = document.querySelector("#simple-search"); //search bar (first column)
var simpleSearchOne = document.querySelector("#simple-search1"); //search bar (second column)

//display jobs result section
var jobsresultEl = document.querySelector(".jobsresult");
var iconHome = document.querySelector(".icon-home");
var simpleSearchResult = document.querySelector("#simple-search-result"); //search bar (result) (first column)
var simpleSearchOneResult = document.querySelector("#simple-search1-result"); //search bar (result) (second column)
var searchIconResult = document.querySelector("#search-btn-result"); //search button (result)
var searchHistory = document.querySelector(".search-history"); // search history record
var vacanciesList = document.querySelector(".vacancies-list");
var vacanciesEmptyEl = document.querySelector(".vacancies-list +.empty-result");
var paginator = document.querySelector("#pagination");
var showApiPerPage = 10;
var currentPage = 1;

// execute to stay at jobs homepage or result page
function switchPage (returnHomepage) {
	if (returnHomepage) {
		//display jobs homepage
		mainEl.classList.remove("hidden");
		//hide jobs result page
		jobsresultEl.classList.add("hidden");
	}
	else {
		//hide jobs homepage
		mainEl.classList.add("hidden");
		//display jobs result page
		jobsresultEl.classList.remove("hidden");
	}
}

// when generate history record at side bar when search from homepage/result page
function generateHistoryRecord (searchInputResult, searchInputOneResult) {
	//get data from local storage
	var historySearchList = JSON.parse(localStorage.getItem("historySearch") || "[]");
	// add new data and push to the array
	historySearchList.push(searchInputResult + ";" + searchInputOneResult);
	// save data in the local storage
	localStorage.setItem("historySearch", JSON.stringify(historySearchList));
	var itemLi = ""; //history record list
	for (var i = 0; i < historySearchList.length; i++) { // for loop for history record has been insert to list
	 const item = historySearchList[i]; //insert value of list
	 itemLi += `<li class="cursor-pointer bg-slate-300 p-2 m-3">${item}</li>`;//insert value of list and style in pointer
	}
	searchHistory.innerHTML = itemLi; //list will be add into search history
	var searchHistoryLis = document.querySelectorAll(".search-history li"); //set element for search-history li
   
	for(let i=0;i<searchHistoryLis.length;i++){ //for loop for li
	 searchHistoryLis[i].addEventListener("click",function(){ //event for search history
	  getJobsAPI (historySearchList[i].split(";")[0], historySearchList[i].split(";")[1]); //separate the search bar from first column and second by using split function
	 });
	}

   }

// display vancancy result
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
	itemLi += liTemplate; // collect all the list
}
vacanciesList.innerHTML = itemLi; //contain all the li in ul
}


// handle pagination at the end of job result page
function handlePagination(totalNumber, searchInputResult, searchInputOneResult) {
	if(totalNumber===0){
	 	vacanciesEmptyEl.classList.remove("hidden");
	 	paginator.classList.add("hidden");
	}
	else{
	 	vacanciesEmptyEl.classList.add("hidden");
		paginator.classList.remove("hidden");
		$(paginator).pagination({ //get from simplePagination library website
			items: totalNumber,
			itemsOnPage: showApiPerPage,
			currentPage: currentPage,
			onPageClick: function (pageNumber, event) {
				currentPage = pageNumber;
				getJobsAPI (searchInputResult, searchInputOneResult);
			}
	 	});
	}
}

// jobs API
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

// lottie library
lottie.loadAnimation({
	container: document.querySelector(".icon-home"), // the dom element that will contain the animation
	renderer: "svg",
	loop: true,
	autoplay: true,
	path: "home.json" // the path to the animation json
});

// to click home icon for switch page
iconHome.addEventListener("click", function () {
	switchPage (true);
});

// click event for search icon - jobs homepage
searchIcon.addEventListener("click", function (e) {
	e.preventDefault();
	var searchInputResult = simpleSearch.value; //get the value from first column
	var searchInputOneResult = simpleSearchOne.value; //get the value from second column
	getJobsAPI (searchInputResult, searchInputOneResult);
});

// click event for search icon - jobs result page
searchIconResult.addEventListener("click", function (e) {
	e.preventDefault();
	var searchInputResult = simpleSearchResult.value; //get the value from first column
	var searchInputOneResult = simpleSearchOneResult.value; //get the value from second column
	getJobsAPI (searchInputResult, searchInputOneResult);
});