const _initTime = Date.now();
const log = document.querySelector("ul");

const getElapsedTime = () => {
	return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const randomNumber = () => {
	return Math.floor(Math.random() * 256);
};

const clickOnSquare = (e) => {
	let wrapper = document.getElementsByClassName("displayedsquare-wrapper")[0];
	let newDiv = document.createElement("div");
	newDiv.classList.add("displayedsquare");
	newDiv.classList.add(e.target.classList[1]);

	let logItem = document.createElement("li");
	logItem.innerHTML = `${e.target.classList[1]} clicked after ${getElapsedTime()}`;

	log.appendChild(logItem);
	wrapper.appendChild(newDiv);
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
	actionSquare.addEventListener("click", clickOnSquare);
}

document.addEventListener("keydown", (e) => {
	switch (e.key) {
		case " ":
			document.body.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
			let logItem = document.createElement("li");
			logItem.innerHTML = `Spacebar pressed after ${getElapsedTime()}`;
			log.appendChild(logItem);
			break;

		case "l":
			while (log.firstChild) {
				log.removeChild(log.firstChild);
			}
			break;

		case "s":
			let wrapper = document.getElementsByClassName("displayedsquare-wrapper")[0];

			while (wrapper.firstChild) {
				wrapper.removeChild(wrapper.firstChild);
			}
			break;

		case "r":
			location.reload();
			break;
	}
});

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("displayedsquare")) {
		alert(`Color: ${e.target.classList[1]}`);
	}
});


