// array destructuring 

// let numbers = [10,20,30,40,50,60];
// let [num1,num2,num3,num4,num6] = numbers;
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);


// using spread operators
// let numbers = [10,20,30,40,50,60];
// let [num1,num2,...z] = numbers;
// console.log(num1);
// console.log(num2);
// console.log(z);



// value swap

// let a = 20;
// let b = 30;

// [a,b] = [20,30];
// console.log(b);
// console.log(a);
// [b,a] = [20,30];
// console.log(b);
// console.log(a);





// nested object destructuring 

// let details = {
//     id: 101,
//     name: "sajid",
//     class: "XII",
//     language : {
//         native : "bangla",
//         beginner : "english",
//     }
// }

// const {language,name} = details;


// console.log(name)
// console.log(language.beginner)


// function parameter destructuring 

let details = {
    id: 101,
    name: "sajid",
    class: "xii"
}
const objdes = function ({id,name}){
    console.log(`${name},${id}`);
}
objdes(details);