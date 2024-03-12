const person={
    name:"Andronicus Lepcha",
    age:21,
    location:'Badhlapur East Nepals',
    isAdmin:false,
    earning:{
        salary:80000,
        asset:'1Cr',
    },
};

console.log(person);
console.log(person.isAdmin);
console.log(person.earning);
person.isAdmin=true
console.log(person.isAdmin);

//add function in the objects literals

person.greet = function (){
    console.log("Hello! Type any message you want yo show!");
    let msg=prompt(" type here: ");
    console.log(msg);
    console.log("EXIT");
};
let x=prompt("1. Greet \n2.No ");
if(x==1){
    person.greet();    
}else{
    console.log("BOOOOOOOOO!!!!!!!!!!!!!!>>>>.......................");
}



x = Object.keys(person);
x = Object.values(person);
console.log(x)


// assignment of var or data in an Objects

let firstName='Andronicus';
let lastName='Lepcha';
let age=22;



const myDetails={
    firstName,
    lastName,
    age,
}

console.log(myDetails.firstName);

