export default function toggle() {
	const moon = document.querySelector(".fa-moon");
	const sun = document.querySelector(".fa-sun");

	if (moon) {
		moon.classList.remove("fa-moon");
		moon.classList.add("fa-sun");
	} else {
		sun.classList.remove("fa-sun");
		sun.classList.add("fa-moon");
	}

	const body = document.getElementsByTagName("body")[0];
	body.classList.toggle("darkmode");
}
