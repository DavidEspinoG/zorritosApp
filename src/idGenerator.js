function* idGenerator(){
    let counter = 1;
    while(counter <= 4){
        yield counter;
        counter ++;
        yield counter;
        counter ++
        yield counter;
        counter ++
        yield counter;
        counter = 1;
    }
}
export const generator = idGenerator();