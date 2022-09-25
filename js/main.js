const $ = data => document.querySelector(data);
const $$ = data => document.querySelectorAll(data);

// --------------Seitenvariablen---------------
const page1 = $('#page1');
const page2 = $('#page2');


const cardh3 = $('#card-h3');
const question = $('#question');
const answer = $('#answer');
const homeBtn = $('#home-btn');
const nextBtn = $('#next-btn');


// erstes einblenden zweites ausblenden
const displayToFrom = (block,none) =>{
    block.style.display = 'block';
    none.style.display = 'none';
}


//--------------------------Page1------------------------------ 
let arr;

// Buttonfunktionen
const toPage2 = name =>{
    displayToFrom(page2,page1);
    cardh3.textContent = name;
    arr = fetchData(name);
}



// ------------------------Page2------------------------------

homeBtn.addEventListener('click',() =>{
    displayToFrom(page1,page2);
})



// ---------------------------main Funktionen-----------------------

const fetchData = name =>{
    fetch(`data/${name}.json`)
    .then(response => response.json())
    .then(result => {arr=result;})
    .catch(err => console.log(err));
}


const randomNum = result => Math.floor(Math.random()* result);


let num = 1;
let random = 1;
nextBtn.addEventListener('click',()=>{
    if(num == 0){
        answer.textContent = arr[random].answer;
        num++;
    }else{
        answer.textContent = '';
        num--;
        random = randomNum(arr.indexOf(arr.at(-1))+1);
        question.textContent = arr[random].question;  
    }
})

