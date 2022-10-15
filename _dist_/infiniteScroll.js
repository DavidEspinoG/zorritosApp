import { getFox } from "./index.js";
export function infiniteScroll( foxNumber){
    if(document.body.scrollHeight - window.innerHeight === window.scrollY){
        getFox(foxNumber);
    }
}