import { getFox } from ".";
export function infiniteScroll( foxNumber){
    if(document.body.scrollHeight - window.innerHeight === window.scrollY){
        getFox(foxNumber);
    }
}