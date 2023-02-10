// const darkModeToggle = document.querySelector("#toggle");
// const body = document.getElementsByTagName("body")[0];

// darkModeToggle.addEventListener("change", function () {
// 	body.classList.toggle("darkmode");
// });

export default function toggle() {
	const body = document.getElementsByTagName("body")[0];
	body.classList.toggle("darkmode");
}
