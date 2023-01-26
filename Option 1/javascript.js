async function randomFact() {
	const res = await fetch("https://api.chucknorris.io/jokes/random");
	const data = await res.json();
	const fact = data.value;
	const norisfact = document.getElementById("fact-text");
	norisfact.innerText = fact;
}

window.onload = randomFact();

// adding button functionality!

document.getElementById("random-fact").addEventListener("click", randomFact);
