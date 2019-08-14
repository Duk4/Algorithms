const button = document.querySelector('.color');
const body = document.querySelector('body');
const span = document.querySelector('.hex');

//const colors = ['#66ffcc', '#ffff80', '#99ebff', '#bb99ff', '#ffeb99'];
const hexNumber = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

button.addEventListener('click', changeColor);

function changeColor(){
    //let random = Math.floor(Math.random()*colors.length);
    //body.style.backgroundColor = colors[random];
    //span.innerText = colors[random];

    let hexColor = '#';

    for(let i=0; i<6; i++){
        let random = Math.floor(Math.random()*hexNumber.length);

        hexColor += hexNumber[random];
    }

    body.style.backgroundColor = hexColor;
    span.innerText = hexColor;
}