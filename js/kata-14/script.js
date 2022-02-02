const box = document.querySelector('.box');

const observer = new ResizeObserver(elm  => {
    const isSmall = elm[0].contentRect.width < 500
    box.style.background = isSmall ? 'blue' : 'red'
})

observer.observe(box)