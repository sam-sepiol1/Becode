let importantItem = document.querySelectorAll('.important');
let images = document.querySelectorAll('img');
let paragraphs = document.querySelectorAll('p');

function randomNumber() {
    return Math.floor(Math.random() * 256);
}

importantItem.forEach(item => {
    item.setAttribute('title', 'This is an important item');
});


images.forEach(image => {
    if (!image.classList.contains('important')) {
        image.style.display = 'none';
    }
});

paragraphs.forEach(paragraph => {
let className = paragraph.className;

    if (!paragraph.className) {
        console.log(paragraph.innerHTML);
        
        paragraph.style.color = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    } else { 
        console.log(`${className} : ` + paragraph.innerHTML);
    }
});