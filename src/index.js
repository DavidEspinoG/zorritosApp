import { registerImage } from "./lazy";
const API_URL = 'https://randomfox.ca/floof/';
const foxContainer = document.querySelector('#images');
const foxButton = document.querySelector('#foxButton');
foxButton.addEventListener('click', () => {
    getFox();
})
const cleanButton = document.querySelector('#clean');
cleanButton.addEventListener('click', () => {
    cleanFoxContainer();
})
async function getFox(){
    const res = await fetch(API_URL);
    const data = await res.json();
    const image = document.createElement('img');
    image.dataset.src = data.image;
    image.className = 'foxImage';
    
    const div = document.createElement('div');
    div.append(image)
    div.className = "p-3"
    foxContainer.append(div)
    registerImage(image);
    if(foxButton.textContent != 'Another zorrito, please'){
        foxButton.textContent = 'Another zorrito, please';
    }   
}

function cleanFoxContainer(){
    foxContainer.innerHTML = '';
}