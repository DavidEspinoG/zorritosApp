import { registerImage } from "./lazy";
import { generator } from "./idGenerator";
const API_URL = 'https://randomfox.ca/floof/';

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
    
    image.src = data.image;
    image.className = 'foxImage';
    imageDiv.append(image);
    
    
    image.addEventListener('load', () => {
        imageDiv.classList.remove('loading-skeleton');
    })
}
for(let i = 0; i < 24; i++){
    getFox()
}


 
window.addEventListener('scroll', () => {
    if( window.innerHeight + window.scrollY >= document.body.scrollHeight - 400){
        for(let i = 0; i < 12; i++){
            getFox()
        }
    }
})