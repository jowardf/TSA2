function showBox(color) {
	let box = document.getElementById("box");
	box.classList.remove("animate");
	box.style.backgroundColor = color;
	void box.offsetWidth; // Trigger reflow
	box.classList.add("animate");
}