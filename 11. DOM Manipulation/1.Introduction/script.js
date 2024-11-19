console.log(document.title);

document.title = "Modifying the DOM";
document.body.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

function randomNumber() {
    return Math.floor(Math.random() * 256);
}

let secondChild = document.body.children[1];

for (const children of secondChild.children) {
    console.log(children);
}