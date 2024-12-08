const inputField = document.querySelector("input");
const displaySpan = document.getElementById("display-firstname");

const ageInput = document.getElementById("age");

const passwordInput = document.getElementById("pwd");
const confirmPasswordInput = document.getElementById("pwd-confirm");

const lightMode = document.getElementById("toggle-darkmode");
console.log(lightMode.value);


inputField.addEventListener("keyup", () => {
	displaySpan.textContent = inputField.value;
});

ageInput.addEventListener("keyup", () => {
    const age = parseInt(ageInput.value);
    const aHardTruth = document.getElementById("a-hard-truth");

    aHardTruth.style.visibility = age >= 18 ? "visible" : "hidden";
});

passwordInput.addEventListener("keyup", () => {
    const password = passwordInput.value;

    passwordInput.style.borderColor = password.length < 6 ? "red" : "green";
});

confirmPasswordInput.addEventListener("keyup", () => {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    confirmPasswordInput.style.borderColor = password === confirmPassword ? "green" : "red";
});

lightMode.addEventListener("change", () => {
    if (lightMode.value === "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else { 
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    
});



