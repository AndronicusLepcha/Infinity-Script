//let num=prompt("Enter the number to check IS GOOGLY ?. ");
// let sum=0,i=0;
// const x=num.toString();
// let t;

// while(i != x.length){
//     sum = sum + parseInt(x[i]);
//     i++;
// }
// console.log(sum);

// let ans=sum;   // This is number 
// let flag=false;
// if(ans==0 || ans==1){
//     console.log("Not GOOGLY");
//     flag=true;
// }else{
//     for(let i=2;i<sum;i++){
//         if(sum % i == 0){
//             console.log("Not GOOGLY");
//             flag=true;
//             break;
//         }
//     }
// }
// if(!flag){
//     console.log("Is Googly");
// }

let sen="Thte quick brown fox jump upon a lazy dog";
let char_array=[];
let char_freq=[];

let parseCharIndex=0;

while(parseCharIndex != sen.length){
    if(!char_array.includes(sen[parseCharIndex])){
        // if(sen[parseCharIndex] != ' '){
            char_array.push(sen[parseCharIndex]); // will add the char in array
        //}
        // calculate the frequency now
        let freq=0;
        for(let i=0;i<sen.length;i++){
            if (char_array[char_array.length - 1] == sen[i]) {
                freq = freq + 1;
            }

        }
        char_freq.push(freq);
    }
    parseCharIndex=parseCharIndex+1;
}

console.log(char_array,char_freq)

