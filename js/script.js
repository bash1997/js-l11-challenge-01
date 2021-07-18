const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

//get the images' data array
const getImage = async function() {
    const res = await fetch(
        URL = "https://picsum.photos/v2/list?limit=100"
    );
    const images = await res.json();
    selectRandomImg(images);
};

//get random image index from array
const selectRandomImg = async function(images) {
    const randomIndex = Math.floor( Math.random() * images.length );
    const randomImage = images[randomIndex];
    displayImage(randomImage);
};

//display image
const displayImage = async function(randomImage) {
    const author = randomImage["author"];
    const imageAddress = randomImage["download_url"];
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
}