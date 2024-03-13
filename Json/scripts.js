const obj={
    id:101,
    title:"Hellooooooooo this is JS object",

}

const js = JSON.stringify(obj);
console.log(obj);



const library=[
    {
        title:'The Hacker',
        author:'',
        status:{
            own:true,
            read:false,
            reading:true,
        }
    },
    {
        title:'',
        author:'',
        status:{
            own:true,
            read:false,
            reading:true,
        }
    },
    {
        title:'',
        author:'',
        status:{
            own:true,
            read:false,
            reading:true,
        }
    }
];

console.log(library);
library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;
console.log(library);


// destruct
const {title:firstBook}=library[0];
console.log(firstBook);

// object to json string

const st=JSON.stringify(library);
console.log(st);