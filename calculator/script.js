// function calculartor

function calculator(num1,num2,operator){
    switch(operator){
        case '*' :
            return num1*num2;
        case '+' :
            return num1+num2;
        case '/' :
            return num1+num2;
        case '-' :
            return num1+num2;
        default: return "Invalid Operator";
    }
}

console.log(calculator(12,34,'o'));


let val=NaN;
if(val){
    console.log("Truthy");
}else{
    console.log("Falsy");
}



console.log("Ternary Operator")

let age=20;

age>=18 ? console.log("Eligible to vote")
: age = age+1;