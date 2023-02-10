import toggle from "./darkmode.js";

const form = document.getElementById("form");
const norisfact = document.getElementById("fact-text");
const searchBar = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const categoryDropdown = document.querySelector("#categories");
// Typed value from the Search Bar
let searchQuery = searchBar.value;
// Chosen category for API
let category;

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
	category
		? categorySearch()
		: (norisfact.innerText = "It looks like you haven't picked a category!");
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
