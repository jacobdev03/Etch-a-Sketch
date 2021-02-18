const mainDiv = document.querySelector('.grid-container')
let div = document.createElement('div')
div.classList.add('div-el')


for(let i = 1; i <= 256; i++) {
    mainDiv.appendChild(div.cloneNode(true));
}
let divs = document.querySelectorAll('.grid-container > div')
console.log(divs)

divs.forEach(el => {
    el.addEventListener('mouseover', () => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        el.style.backgroundColor = "#" + randomColor;
    })
    
});

// divs.addEventListener('mouseover', () => {
//     divs.style.backgroundColor = 'lime';
// })

// mainDiv.addEventListener('mouseover', () => {
//     mainDiv.style.backgroundColor = 'blue';
// })

// mainDiv.addEventListener('mouseout', () => {
//     mainDiv.style.backgroundColor = 'white';
// })