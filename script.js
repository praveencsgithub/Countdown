const countdown = document.querySelector('#countdown');
const cInput = document.querySelector('#c-input');

const startBtn = document.querySelector('#start-btn');
const resetBtn = document.querySelector('#reset-btn');
let checkReset = false;
let checkIn = false;
// let count = 0;
let id = null;

startBtn.addEventListener('click',()=>{
    let ourValue = cInput.value;
    let currCount = 0;  
    let count = 0;
    checkReset = false;

    if(id){
        clearInterval(id);
 
    }

    id = setInterval(countFun,1000);



    function countFun () {
        if(checkReset){
            countdown.innerHTML = 0;
            clearInterval(id);
            cInput.value = '';
            return;
        }

        currCount = ourValue - count;
        if(currCount === 0 ){
            clearInterval(id);
            console.log(countdown);
        }
        if(currCount%2==0){
            countdown.style.fontSize = '48px';
        countdown.classList.add('animate-bounce')

        }
        else{
            countdown.style.fontSize = '45px'
        }
        countdown.innerHTML = currCount;
        count++;
    }

  
})

resetBtn.addEventListener('click', ()=>{
    checkReset = true;
})