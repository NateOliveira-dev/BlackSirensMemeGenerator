const getTextFromInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const imgMemeContainer = document.getElementById('meme-image-container');
const fireBtn = document.getElementById('fire');
const waterBtn = document.getElementById('water');
const earthBtn = document.getElementById('earth');
const presetImg = document.getElementsByTagName('img');
const memeImg = document.getElementById('meme-image');

for (let i = 1; i <= presetImg.length - 1; i += 1) {
    presetImg[i].addEventListener('click', presetBackground);
}

getTextFromInput.addEventListener('input', textUpdate);

function textUpdate() {
    memeText.innerHTML = getTextFromInput.value;
}

function imgChange(event) {
    memeImg.src = URL.createObjectURL(event.target.files[0]);
}

function presetBackground(event) {
    memeImg.style.width = '100%';
    memeImg.style.height = "100%";
    memeImg.src = event.target.src;
}