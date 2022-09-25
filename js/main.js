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

// Buttonfunktionen
const toPage2 = name =>{
    fetchData(name)
    displayToFrom(page2,page1);
    cardh3.textContent = name;
}



// ------------------------Page2------------------------------

homeBtn.addEventListener('click',() =>{
    displayToFrom(page1,page2);
})



// ---------------------------main Funktionen-----------------------

const fetchData = name =>{
    fetch(`data/${name}.json`)
    .then(response => response.json())
    .then(result => {
        let random = randomNum(result.indexOf(result.at(-1))+1);     
        question.textContent = result[random].question;
        let num = 0;
        nextBtn.addEventListener('click',e=>{
            if(num == 0){
                answer.textContent = result[random].answer;
                num++;
            }else{
                answer.textContent = '';
                random = randomNum(result.indexOf(result.at(-1))+1);
                num--;
                question.textContent = result[random].question;      
            }
        })
    })
    .catch(err => console.log(err));
}

const randomNum = result => Math.floor(Math.random()* result);