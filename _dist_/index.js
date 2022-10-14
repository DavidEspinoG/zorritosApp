import { registerImage } from "./lazy.js";
import { generator } from "./idGenerator.js";
const API_URL = 'https://randomfox.ca/floof/';
const foxContainer = document.querySelector('#images');
const foxButton = document.querySelector('#foxButton');

// foxButton.addEventListener('click', () => {
//     getFox();
// })

async function getFox(){
    let columnId = generator.next().value;
    const res = await fetch(API_URL);
    const data = await res.json();
    const image = document.createElement('img');
    let mainDiv = document.getElementById(`${columnId}`);
    let imageDiv = document.createElement('div');
    mainDiv.append(imageDiv);
    imageDiv.classList.add('loading-skeleton');
    image.onload = () => {
        let height = image.offsetHeight;
        imageDiv.style.height = height;
    }
    
    image.dataset.src = data.image;
    image.className = 'foxImage';
    imageDiv.append(image);
    
    registerImage(image);
    if(foxButton.textContent != 'Another zorrito, please'){
        foxButton.textContent = 'Another zorrito, please';
    }   
    image.addEventListener('load', () => {
        imageDiv.classList.remove('loading-skeleton');
    })
}
for(let i = 0; i < 12; i++){
    getFox()
}

function infiniteScroll(scroll){
    
     if(window.innerHeight < scroll){
        console.log('Im, here') 
        getFox();
     }
 }
 
// console.log(window.innerHeight, window.scrollY)
window.addEventListener('scroll', () => {
    const body = document.querySelector('body');
    if( window.innerHeight + window.scrollY >= document.body.scrollHeight){
        for(let i = 0; i < 8; i++){
            getFox()
        }
        
    }
    // console.log(window.innerHeight, window.scrollY, window.scrollHeight)
})