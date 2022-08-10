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

fireBtn.addEventListener('click', borderChange);
waterBtn.addEventListener('click', borderChange);
earthBtn.addEventListener('click', borderChange);
getTextFromInput.addEventListener('input', textUpdate);

function textUpdate() {
    memeText.innerHTML = getTextFromInput.value;
}

function imgChange(event) {
    memeImg.src = URL.createObjectURL(event.target.files[0]);
}

function borderChange(event) {
    if (event.target.id === 'fire') {
        imgMemeContainer.style.border = '3px dashed rgb(255, 0, 0)';
    }
    if (event.target.id === 'water') {
        imgMemeContainer.style.border = '5px double rgb(0, 0, 255)';
    }
    if (event.target.id === 'earth') {
        imgMemeContainer.style.border = '6px groove rgb(0, 128, 0)';
    }
}

function presetBackground(event) {
    memeImg.style.width = '100%';
    memeImg.style.height = "100%";
    memeImg.src = event.target.src;
}