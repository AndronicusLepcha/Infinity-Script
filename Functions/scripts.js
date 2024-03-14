function myFunction(){
    console.log("Hi");
}
function myFunction(user="Bot"){ // default parameter
    return user + ' is registered ';
}

console.log(myFunction());
console.log(myFunction("Andro"));

function restFunction(...rest){
    let sum=0;
    for(const num of rest){
        sum += num
    }
    return sum;
}

console.log(restFunction(1,2,3));

const ob = {
    'a':23,
    'b':33,
    'c':43,
}
function ofFunction(...rest){
    let sum=0;
    for(const num in ob){
        sum += ob[num]
    }
    return sum;
}
console.log("Result of OF " + ofFunction());


// objects as argument
const user={
    id:1111,
    name:'andro',
}

function objectPara(user){
    return `the ${user.name} has logged in with id ${user.id}`
}
console.log(objectPara(user));