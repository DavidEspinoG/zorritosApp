
const observer = new IntersectionObserver((entries) =>{
    entries.filter((entry) => {
        return entry.isIntersecting
    }).forEach((entry) => {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
    })
})

export const registerImage = (imagen) => {
    observer.observe(imagen);
}