let num = 0;

function inc(){
    num += 1;
    box();
}

function dec(){
    num -= 1;
    box();
}

function reset(){
    num = 0;
    box();
}


function box(){
    let display = document.getElementById('display');
    display.innerHTML = num;
    let text = document.getElementById("text");

    if(num > 0 ){
        text.innerHTML = "The number is positive";
        display.style.color = "black";
        display.style.backgroundColor = "green";
    }
    else if(num < 0 ){
        text.innerHTML = "The number is negative";
        display.style.color = "black";
        display.style.backgroundColor = "red";
    }
    else{
        text.innerHTML = "The number is zero";
        display.style.color = "white";
        display.style.backgroundColor = "black";
    }
}

