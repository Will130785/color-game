let numColors = 6;

let colors = generateRandomColors(numColors);

let pickedColor = pickColor();

let squares = document.querySelectorAll(".square");

let colorDisplay = document.querySelector("#colorDisplay");

let messageDisplay = document.querySelector("#message");

let h1 = document.querySelector("h1");

let resetButton = document.querySelector("#reset");

let easyButton = document.querySelector("#btnEasy");

let hardButton = document.querySelector("#btnHard");

easyButton.addEventListener("click", function(){
    numColors = 3;
    colors = generateRandomColors(numColors);
    pickedColor = pickColor();
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");

    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        };
    };

});

hardButton.addEventListener("click", function(){
    numColors = 6;
    colors = generateRandomColors(numColors);
    pickedColor = pickColor();
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");

    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    };
});

hardButton.addEventListener("click", function(){

});

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numColors);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    };

    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";

});

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play again";

        } else {
            messageDisplay.textContent = "Try again";
            this.style.backgroundColor = "#272727";
        }
    });
}

function changeColors(color){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
};

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num){
    let arr = [];

    for(let i = 0; i < num; i++){
        arr.push(randomColor());
    }

    return arr;
};

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
};