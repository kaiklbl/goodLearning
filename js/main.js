const $ = data => document.querySelector(data);
const $$ = data => document.querySelectorAll(data);

// --------------Seitenvariablen---------------
const page1 = $('#page1');
const page2 = $('#page2');


const cardh3 = $('#card-h3');



// erstes einblenden zweites ausblenden
const displayToFrom = (block,none) =>{
    block.style.display = 'block';
    none.style.display = 'none';
}


// Buttonfunktionen
const toPage2 = name =>{
    displayToFrom(page2,page1);
    cardh3.textContent = name;
}