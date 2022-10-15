export function loadingSkeleton(foxNumber){
    let ids = [];
    let number = 1;
    for(let  i = 0; i < foxNumber; i++){
        if (number > 4 ){
            number = 1;
        }
        ids.push(number);
        number++;
    }
    ids.forEach((id) => {
        let mainDiv = document.getElementById(`${id}`);
        let skeletonDiv = document.createElement('div');
        skeletonDiv.className = 'loading-skeleton';
        mainDiv.append(skeletonDiv);
    })
}