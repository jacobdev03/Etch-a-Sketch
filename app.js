const mainDiv = document.querySelector('.grid-container')
let div = document.createElement('div')
div.classList.add('div-el')

for(let i = 1; i <= 256; i++) {
    mainDiv.appendChild(div.cloneNode(true));

}