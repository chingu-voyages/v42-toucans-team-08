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
//Form
const form = document.getElementById("form");

async function randomFact() {
	const response = await fetch("https://api.chucknorris.io/jokes/random");
	const data = await response.json();
	const fact = data.value;
	norisfact.innerText = fact;
	document.getElementById("keyword").innerHTML = `a random fact!`;
}

window.onload = randomFact();

// adding button functionality!

document.getElementById("random-fact").addEventListener("click", randomFact);

//Search bar - string API function

async function searchJoke() {
	const res = await fetch(
		`https://api.chucknorris.io/jokes/search?query=${searchQuery}`
	);
	const data = await res.json();

	const dataLength = (data.result || []).length;

	if (dataLength) {
		const factMap = data.result.map((fact) => {
			// console.log(fact);
			return fact.value;
		});
		const index = Math.floor(Math.random() * factMap.length);
		norisfact.innerText = factMap[index];
	} else {
		norisfact.innerText = "Please enter a valid search term!";
	}
}

// Category API Search
searchBtn.addEventListener("click", (e) => {
	e.preventDefault();
	category = categoryDropdown.value;
	console.log(category);
	category ? categorySearch() : "";
	document.getElementById("keyword").innerHTML = category;
});

async function categorySearch() {
	const res = await fetch(
		`https://api.chucknorris.io/jokes/random?category=${category}`
	);
	const data = await res.json();

	return (norisfact.innerHTML = data.value);
}

// Search Input Event Listener
searchBar.addEventListener("input", (e) => {
	e.preventDefault();
	searchQuery = searchBar.value;
	searchJoke();

	document.getElementById("keyword").innerText = searchQuery;
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
});

// Darkmode Toggle
const darkModeToggle = document.querySelector("#toggle");
darkModeToggle.addEventListener("change", toggle);
