function studentsDetails(name,age,shift){
    return{
        name,
        age,
        shift,
        'disply all'(){
            console.log(this.name);
            console.log(this.age);
            console.log(this.shift);
        }
    }
}

let student1 = studentsDetails("tanim", 24 , "morning")

student1['disply all']();


// for of loop

// let students = ["sajid" , "tanim" , "ripon"];
// for(x of students){
//     console.log(x);
// }


// for in loops 

// let student1 ={
//     id:200,
//     names:"sajid",
//     class: "XII",
//     shift: "Day"
// }
// for(x in student1){
//     console.log(student1[x]);
// }


 
// forEach loop function

// let numbers = [10,20,30,40,50,60];
// console.log(numbers);
// numbers.forEach(numberMulti);
// function numberMulti(x,y,arr){
//     arr[y] = x*5;
// }
// console.log(numbers); 



// map loop function

// let numbers = [20,30,40,50,60,70,80,90];
// let newNumbers = numbers.map(function(x){
//     return x*x;
// })
// console.log(newNumbers);


// filter loop function

// let numbers = [20,30,40,50,60,70,80,90];
// let newNumbers = numbers.filter(function(x){
//     return x>40;
// })
// console.log(newNumbers);




// arrow function

// const mymessages = () => {
//     console.log("hello! this is us")
// }
// mymessages();
// const mymessage2 = () => console.log("here is this")
// mymessage2();
// const multiplication = (x) => x*5;
// console.log (multiplication(300));


// let details = [
//     {
//         name : "sajid",
//         class : "XII",
//         roll : 26,
//     },
//     {
//         name : "tanim",
//         class : "XII",
//         roll : 12,
//     },
//     {
//         name : "nayeem",
//         class : "XII",
//         roll : 21,
//     },
//     {
//         name : "mahaboob",
//         class : "XII",
//         roll : 40,
//     },    
//     {
//         name : "ripon",
//         class : "XII",
//         roll : 50,
//     }
// ]
// const findEveryone = () =>{
//     let everyone = details.filter(function (x){
//         return x.roll>20;
//     }).map(function(y){
//         return y.name;
//     })
//     console.log(everyone);
// }
// findEveryone()


// const findEveryone = () => details.filter((x) => x.roll>20).map((y) => y.name);
// console.log(findEveryone());



// difference between arrow function and traditional function

//  function Student (name, age, nameTwo){
//     this.name = name;
//     this.age = age;
//     this.nested = {};
//     this.nested.name = nameTwo; 
//     this.nested.intro =  ()=>{ 
//              console.log(`Hello my name is ${this.name}`)
//          };
//     }
//     Student.prototype = {
//     intro: function () {
//     console.log("Hello this is outer intro");
//     },
    
//     }; 
//     const studentOne = new Student ("John", 25, "Doe");
//     studentOne.nested.intro();

