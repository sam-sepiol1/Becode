const learners = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
learners.sort(() => Math.random() - 0.5);

const article = document.querySelector("article");

function randomNumber() {
	return Math.floor(Math.random() * 256);
}

function randomColor() {
    const [r, g, b] = [randomNumber(), randomNumber(), randomNumber()];
	return `rgb(${r}, ${g}, ${b})`;
}

function isDarkColor(color) {
    const [r, g, b] = color.slice(4, -1).split(", ").map(value => parseInt(value));

	const brightness = (r * 299 + g * 587 + b * 114) / 1000;
	return brightness < 128;
}

console.log(randomColor());

for (const learner of learners) {
	const section = document.createElement("section");
	const paragraph = document.createElement("p");

	paragraph.textContent = learner;

	section.style.backgroundColor = randomColor();
	paragraph.style.color = isDarkColor(section.style.backgroundColor) ? `white` : `black`;
	paragraph.style.textAlign = `center`;
	paragraph.style.padding = `20px`;

	article.appendChild(section);
	section.appendChild(paragraph);
}