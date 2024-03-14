const fun=()=>{
    console.log("Arrow Function");
   return "Hello Robot";
};

(function( a ,b ){ // imediately invoked function
    console.log(a+b);
})(23,45);

console.log(fun());