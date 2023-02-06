import toggle from "./darkmode.js";

// Taken it out of the function scope to be able to reuse it for the user search and not have to declare a new one! - Kirsten
const norisfact = document.getElementById("fact-text");
// Search bar element
const searchBar = document.getElementById("search");
// Search button element
const searchBtn = document.getElementById("search-btn");
// The dropdown menu
const categoryDropdown = document.querySelector("#categories"); //
// The value collect from the searchBar when user enters it using the eventListener below
let searchQuery = searchBar.value;
// Chosen category for API
let category;

async function randomFact() {
	const response = await fetch("https://api.chucknorris.io/jokes/random");
	const data = await response.json();
	const fact = data.value;
	norisfact.innerText = fact;
}

window.onload = randomFact();

// adding button functionality!

document.getElementById("random-fact").addEventListener("click", randomFact);

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

// Category API Search

searchBtn.addEventListener("click", () => {
	category = categoryDropdown.value;
	console.log(category);
	category ? categorySearch() : "";
});

async function categorySearch() {
	const res = await fetch(
		`https://api.chucknorris.io/jokes/random?category=${category}`
	);
	const data = await res.json();
	return (norisfact.innerHTML = data.value);
}

// Notes: Not perfect! Please feedback! I think Abdul or Fen can still work on the Categories.

// darkmode will move to own file testing currently

const darkModeToggle = document.querySelector("#toggle");

darkModeToggle.addEventListener("change", toggle);

// Labels have their own events TIL

searchBar.addEventListener("keypress", () => {
	searchQuery = searchBar.value;
	searchJoke();

	document.getElementById("keyword").innerText = searchQuery;
});
