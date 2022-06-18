const images = ['italy1', 'italy2', 'italy3', 'italy4', 'italy5'];
const mainImage = document.querySelector("img");
const mainButton = document.querySelector(".btn");
const yearSpan = document.querySelector("#year");

let timeNow = new Date();
let year = timeNow.getFullYear();

yearSpan.textContent = year;

mainButton.addEventListener("click", () => {

    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
    
    mainImage.src = "images/" + randomImage + ".jpg";

})

