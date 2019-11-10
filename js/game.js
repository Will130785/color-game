let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");

let pickedColor = pickColor();

let colorDisplay = document.querySelector("#colorDisplay");

let messageDisplay = document.querySelector("#message");

let h1 = document.querySelector("h1");


colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    let clickedColor = squares[i].style.backgroundColor;

    squares[i].addEventListener("click", function(){
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;

        } else {
            messageDisplay.textContent = "Try again";
            this.style.backgroundColor = "#272727";
        }

    });
    

};

function changeColors(color){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
};

function pickColor(){
    let random = Math.floor(Math.random() * squares.length);
    return colors[random];
};

function generateRandomColors(num){
    let arr = [];

    for(let i = 0; i < num; i++){
        arr.push(generateColor());
    }

    return arr;
}

function generateColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}