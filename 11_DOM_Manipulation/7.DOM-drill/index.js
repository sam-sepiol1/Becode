const movieList = document.querySelector("ul");
const listItems = movieList.children;
const seenItems = [];


for (let item of listItems) {
	if (item.nodeType !== 1) {
		continue;
	}

	if (item.textContent.includes("Fast and Furious")) {
		item.classList.add("important");
		if (item !== movieList.firstElementChild) {
			movieList.insertBefore(item, movieList.firstElementChild);
		}
	}

	item.addEventListener("click", function (event) {
		if (event.target.textContent.includes("Fast and Furious")) {
			alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
		} else {
			alert(`You clicked on ${event.target.textContent}`);
		}
	});

	if (seenItems.includes(item.textContent)) {
        item.remove();
	} else {
		seenItems.push(item.textContent);
	}
}

document.body.addEventListener("keypress", function (event) {
    if (event.key === "r") {
        for (let i = listItems.length - 1; i > 0; i--) {
            if (listItems[i].textContent.includes("Fast and Furious")) {
                movieList.insertBefore(listItems[i], movieList.firstElementChild);
            } else {
                const randomIndex = Math.floor(Math.random() * (i + 1));
                movieList.insertBefore(listItems[randomIndex], listItems[i]);
                
            }
        }
    }
    if (event.key === "d") {
        const clone = listItems[0].cloneNode(true);
        movieList.appendChild(clone);
    }

});

// Select important franchise
const newDiv = document.createElement("div");
const options = document.createElement("select");
const option1 = document.createElement("option");
const option2 = document.createElement("option");

option1.textContent = "important franchise";
option2.textContent = "normal franchise";

options.appendChild(option1);
options.appendChild(option2);
newDiv.appendChild(options);

options.addEventListener("change", function () {
    for (let item of listItems) {
        if (options.value === "important franchise") {
            if (item.classList.contains("important")) {
                item.style.visibility = "visible";
            } else {
                item.style.visibility = "hidden";
            }
        } else {
            item.style.visibility = "visible";
        }
    }
});


document.body.insertBefore(newDiv, movieList);
