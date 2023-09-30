const body = document.body;
const button = document.querySelector(".button-container button");

let currentBackground = 1;

function toggleBackground(){
    currentBackground = currentBackground === 1 ? 2 : 1;
    body.classList.remove(`bg-${3 - currentBackground}`);
    body.classList.add(`bg-${currentBackground}`)

}


button.addEventListener.apply('click',toggleBackground)