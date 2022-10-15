import { registerImage } from "./lazy.js";
import { loadingSkeleton } from "./loadingSkeleton.js";
import { generator } from "./idGenerator.js";
import { infiniteScroll } from "./infiniteScroll.js";
const API_URL = 'https://randomfox.ca/floof/';
const foxNumber = 16;

export async function getFox(foxNumber){
    loadingSkeleton(foxNumber)
    let foxArray = []
    for(let i = 0; i < foxNumber; i++){
        const res = await fetch(API_URL);
        const data = await res.json();
        foxArray.push(data.image)
    }
    foxArray.forEach((foxUrl) => {
        let columnId = generator.next().value;
        const image = document.createElement('img');
        let mainDiv = document.getElementById(`${columnId}`);
        let toReplace = mainDiv.querySelector('.loading-skeleton');
        let imageDiv = document.createElement('div');
        mainDiv.replaceChild(imageDiv, toReplace);
        image.className = 'foxImage';
        // image.loading = 'lazy'
        imageDiv.append(image);
        image.src = foxUrl;
    })
}


getFox(foxNumber)
 
window.addEventListener('scroll', () =>{
    infiniteScroll(foxNumber)
})