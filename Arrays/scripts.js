const arr=[23,33,43,[34,45],445];
console.log(arr)

const fr=['apple','banana'];
const animal=['tiger','deer','lion'];
x=[...fr,...animal];
x=Array.isArray(x);
x=Array.from('12345');

let y=parseInt(x[0]);
console.log(y,typeof y);

//console.log(x)

// ar1=[1,2,3,4]
// ar2=[4,5,6,7]
// output = [1,2,3,4,5,6,7]

let ar1=[1,2,3,4]
let ar2=[4,5,6,7]

ans=[...ar1,...ar2];
ans=ar1.slice(0,2).concat(ar2); // solution 1

ar2.splice(0,1); // solution 2

ans=ar1.concat(ar2);
console.log(ans);