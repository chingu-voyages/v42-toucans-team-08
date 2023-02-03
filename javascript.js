// Taken it out of the function scope to be able to reuse it for the user search and not have to declare a new one! - Kirsten
const norisfact = document.getElementById("fact-text");
// Search bar element
const searchBar = document.getElementById("search");
// Search button element
const searchBtn = document.getElementById("search-btn");
// The value collect from the searchBar when user enters it using the eventListener below
let searchQuery = searchBar.value;

async function randomFact() {
	const response = await fetch("https://api.chucknorris.io/jokes/random");
	const data = await response.json();
	const fact = data.value;
	norisfact.innerText = fact;
}

window.onload = randomFact();

// adding button functionality!

document.getElementById("random-fact").addEventListener("click", randomFact);

// Getting the value from the Search button and saving it to the above global variable so that the below fetch can use it to get the users JOKE!

searchBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const searchValue = searchBar.value;
	searchQuery = searchValue;
	searchJoke();

	// Keyword searched displaying to user on page - Stella suggestion -- should add a conditional for if there is nothing being searched it does not show, will see about that tomorow. right now a bit tired! its 1am - Kirsten! Feedback though, please and make any changes you feel are better.
	document.getElementById("keyword").innerText = searchQuery;
});

//The API call function for the JOKE! That was searched for with a keyword from the USER! using the Search Bar!
async function searchJoke() {
	const res = await fetch(
		`https://api.chucknorris.io/jokes/search?query=${searchQuery}`
	);
	const data = await res.json();
	const factMap = data.result.map((fact) => {
		return fact.value;
	});

	// random number to get an index from the array of facts and display it to the user!
	const index = Math.floor(Math.random() * factMap.length);
	norisfact.innerText = factMap[index];
}

// Notes: Not perfect! Please feedback! I think Abdul or Fen can still work on the Categories.

// darkmode will move to own file testing currently

const darkToggle = document.querySelector("#toggle");
const body = document.getElementsByTagName("body")[0];
const mid = document.getElementById("fact");
const footer = document.getElementsByTagName("footer")[0];
const buttons = document.getElementsByTagName("button")[1];

// light & dark

const moon = document.getElementsByClassName("fa-moon")[0];
const sun = document.getElementsByClassName("fa-sun")[0];

darkToggle.addEventListener("change", function () {
	body.classList.toggle("dark-mode-body");
	footer.classList.toggle("dark-mode-body");
	mid.classList.toggle("dark-mode-mid");
	buttons.classList.toggle("dark-mode-buttons");
	searchBtn.classList.toggle("dark-mode-buttons");
});

// Labels have their own events TIL 


