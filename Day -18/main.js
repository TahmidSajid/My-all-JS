// ES6 variables


// var x = 10;
// console.log(x);


// let x = 20;
// if(true){
//     let x = 30;
//     console.log(x)
// }
// console.log(x);


// const x = 20;
// console.log(x);


// ES6 function declaration

// const mymessage = (x , y) =>{
//     x.toString();
//     y.toString();
//     console.log(x,y);
// }
// mymessage(20,30)



// ES6 string literals

// let x = 20;
// let y = 30;
// let sum = x+y;
// console.log(`the sum is ${sum}`);



// without string mode

// x = 30;
// console.log(x); 



// strict mode

// "use strict"
// x = 30;
// console.log(x);


// rest parameter and rest parameter of function


// const mymessage = (text="this is a default parameter")=>{
//     console.log(text)
// }
// mymessage("hello how are you");


// const myNumbers = (x,y,...z)=>{
//     console.log(x,y,...z);
// }
// myNumbers(20,30,50,80,90,100);



// spread parameter


// const numbers = (x,y,z) =>{
//     console.log(x,y,z);
// }

// let num = [20,30,40];

// without spread operator
// numbers(num[0],num[1],num[2]);

// with spread operator
// numbers(...num);

// concat with spread operators

// let num1 = [10,20,30]
// let num2 = [40,50,60]

// let numbers = [...num1 , ...num2];

// console.log(numbers);

// concat object with oparetors

// let objct1 = {
//     name : "sajid",
//     age : "22"
// };
// let objct2 = {
//     class : "XII",
//     shift : "day"
// };

// let details = {...objct1 , ...objct2};

// console.log(details);


