export function infiniteScroll(scroll){
   console.log(scroll)
    if(window.innerHeight < scroll){
        getFox();
    }
}