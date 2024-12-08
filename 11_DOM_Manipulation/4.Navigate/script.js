// 1. Select the last child of the ol element and move it to the beginning of the list.
const ol = document.querySelector("ol");
const lastChild = ol.lastElementChild;
ol.insertBefore(lastChild, ol.firstElementChild);


// 2. move the H2 of the third section in the second one and vice versa.
const sections = document.querySelectorAll("section");
const secondSection = sections[1];
const thirdSection = sections[2];

const secondSectionHeading = secondSection.querySelector("h2");
const thirdSectionHeading = thirdSection.querySelector("h2");

secondSection.replaceChild(thirdSectionHeading, secondSectionHeading);
thirdSection.insertBefore(secondSectionHeading, thirdSection.firstChild);

// delete last section
const lastSection = sections[sections.length - 1];
lastSection.parentNode.removeChild(lastSection);
