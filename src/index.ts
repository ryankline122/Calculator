import { Calculator } from "./Calculator";

let myCalc = new Calculator(0);
let output = document.getElementById("calc-output");
const MAX_DIGITS = 17;
let x:number = 0;
let y:number = 0;
let addition_operator_active = false;
let subtraction_operator_active = false;
let multiplication_operator_active = false;
let division_operator_active = false;

// Buttons
const num_1 = document.getElementById("1-button");
const num_2 = document.getElementById("2-button");
const num_3 = document.getElementById("3-button");
const num_4 = document.getElementById("4-button");
const num_5 = document.getElementById("5-button");
const num_6 = document.getElementById("6-button");
const num_7 = document.getElementById("7-button");
const num_8 = document.getElementById("8-button");
const num_9 = document.getElementById("9-button");
const num_0 = document.getElementById("0-button");

const add = document.getElementById("add-button") as HTMLButtonElement;
const minus = document.getElementById("minus-button") as HTMLButtonElement;
const multiply = document.getElementById("multiply-button") as HTMLButtonElement;
const divide = document.getElementById("divide-button") as HTMLButtonElement;
const solve = document.getElementById("equals-button") as HTMLButtonElement;


const backspace = document.getElementById("backspace-button");
const clear = document.getElementById("clear-all-button");


// Event Listeners
num_1!.addEventListener('click', function(){numberClicked(1)});
num_2!.addEventListener('click', function(){numberClicked(2)});
num_3!.addEventListener('click', function(){numberClicked(3)});
num_4!.addEventListener('click', function(){numberClicked(4)});
num_5!.addEventListener('click', function(){numberClicked(5)});
num_6!.addEventListener('click', function(){numberClicked(6)});
num_7!.addEventListener('click', function(){numberClicked(7)});
num_8!.addEventListener('click', function(){numberClicked(8)});
num_9!.addEventListener('click', function(){numberClicked(9)});
num_0!.addEventListener('click', function(){numberClicked(0)});

add!.addEventListener('click', function(){operatorClicked("+")});
minus!.addEventListener('click', function(){operatorClicked("-")});
multiply!.addEventListener('click', function(){operatorClicked("*")});
divide!.addEventListener('click', function(){operatorClicked("/")});

solve!.addEventListener('click', equals);
clear!.addEventListener('click', clear_all);


function numberClicked(key:number){
    let str = "" + key;
    if(output!.innerText == "0"){
        output!.innerText = str;
    }
    else if(output!.innerText.length < MAX_DIGITS){
        output!.innerText += str;
    }
}

function operatorClicked(key:string){
    if(x == 0){
        x = Number(output!.innerText);
        output!.innerText = "0";
    } 

    if(key == "+"){
        addition_operator_active = true;
        add.disabled = true;
    }
    else if(key == "-"){
        subtraction_operator_active = true;
        minus.disabled = true;
    }
    else if(key == "*"){
        multiplication_operator_active = true;
        multiply.disabled = true;
    }
    else if(key == "/"){
        division_operator_active = true;
        divide.disabled = true;
    }   
}

function equals(){
    y = Number(output!.innerText);
    let res:any;

    if(addition_operator_active){
        addition_operator_active = false;
        add.disabled = false;
        res = evaluate("+",x,y);
    }
    else if(subtraction_operator_active){
        subtraction_operator_active = false;
        minus.disabled = false;
        res = evaluate("-",x,y);
    }
    else if(multiplication_operator_active){
        multiplication_operator_active = false;
        multiply.disabled = false;
        res = evaluate("*",x,y);
    }
    else if(division_operator_active){
        division_operator_active = false;
        divide.disabled = false;
        res = evaluate("/",x,y);
    }

    output!.innerText = "" + res;
    x = 0;
    y = 0;
}

function evaluate(key:string, x:number, y:number){
    if(key == "+"){
        return myCalc.add(x,y);
    }
    else if(key == "-"){
        return myCalc.subtract(x,y); 
    }
    else if(key == "*"){
        return myCalc.multiply(x,y); 
    }
    else if(key == "/"){
        return myCalc.divide(x,y); 
    }
}

function clear_all(){
    output!.innerText = "0";
    x = 0;
    y = 0;
}
