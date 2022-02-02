const box = document.querySelector('.box');

const observer = new ResizeObserver(elm  => {
    console.log(elm)
})

observer.observe(box)