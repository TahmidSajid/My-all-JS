// var x = 220;
//     x = x.toString()
// console.log(x);


// var x = '210';
//  x = parseInt(x);
// console.log(x);


// var x = 2.124
// x = x.toFixed(1);
// console.log(x);


// var x = 2.1587;
// x = x.toPrecision(3);
// console.log(x);


// var x = "2.14";
// console.log(x);
// x = Number(x);
// console.log(x);



// var x = "my name is sajid";
// console.log(x.length);


// var x = "my name is sajid";

// console.log(x.charAt(1));

// console.log(x.toLowerCase());
// console.log(x.toUpperCase());


// var x = "morshed";

// console.log(x.slice(0,3));


// var names = ["morshed" , "tanim" , "ridoy" , "imran", "saoun" , "sajid", "emon"];

// // console.log(names.slice(0,3));


// var p = "mokched"
// console.log(names.splice(2,4))


// console.log(names.sort());

// var numbers = [20,40,30,700,1800,900,210];

// var right =  numbers.sort(function(a,b){
//     return b-a;
// })

// console.log(right);


// var details = [["tanim",20],["ridoy",30000],["emon",500],['sajid',60]];

// var max = 0 ;
// for(x=0; x < details.length; x++){

//     if(max < details[x][1]){
//         max = details[x][1];
//         var maxman = details[x][0];
//     }
// }

// console.log(max);
// console.log(maxman);


// const details = function (a,b,c,d){
//     this.name = a;
//     this.age = b;
//     this.class = c;
//     this.roll = d;
//     this.show = function(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.class);
//         console.log(this.roll);
//     }
// }

// student1 = new details("sajid",22,"xii",29);
// student1.show();

// console.log(document.getElementById("para"));
// console.log(document.querySelectorAll("#para")[0]);

// var heading1 = document.createElement('h1');
// document.body.appendChild(heading1);
// var text = document.createTextNode("hello every one");
// heading1.appendChild(text);

// var ul = document.createElement("ul");
// document.body.appendChild(ul);
// for (x=0; x<3 ; x++){
//     var li = document.createElement("li");
//     // li.classList.add("_str");
//     ul.appendChild(li);
//     var text = document.createTextNode("hello I am under water"+x);
//     li.appendChild(text);
// }

// var li_2 = document.querySelectorAll("li")[1];

// // console.log(li_2.parentElement);

// console.log(li_2.nextElementSibling);
// console.log(li_2.previousElementSibling);

// let x = 200;
// console.log(x);

// for(x=0; x<50 ; x++){
//     let y = x 
//     console.log(`this number is : ${y}`);
// }


// const printNumbers = (strt) => {
//     for(x=strt; x<=strt+50; x++){
//         console.log(`the number is ${x}`);
//     }
// }

// printNumbers(60);

// const myPrint = (x="this is a default value")=> console.log(x);

// myPrint("sajid");


// const myprint = (x,y,...z)=>{
//     console.log(x);
//     console.log(y);
//     console.log(...z);
// }

// myprint(20,30,40,50,60,70,80,90);


// function details(name,age,roll,){
//     return{ 
//     name,
//     age,
//     roll,
//     'printAll'(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.roll);
//         console.log(this.class);
//     }
//     }
// }

// let student1 = new details("sajid",22,29);

// student1.printAll();


let student1 = ["sajid","nayeem","armaan"];
let student2 = ["tanim","simon","rifat"];

let students =[...student1,...student2];

// console.log(students);



// for(x in students){
//     console.log(x);
// }
// for(x of students){
//     console.log(x);
// }

numbers = [20,15,5,18]

// numbers = numbers.map(x => 
//     {return (x+10)}
// );


// console.log(numbers);


// const filtering = (x)=>{
//     if(x>100){
//         console.log (x); 
//     }

// }

// numbers.forEach(element => {
//     filtering(element)
// });
// nums = new Array();

// const find = (x)=> {
//     x.filter(x => x>100).map((x,y)=>{
//         nums[y]=x;
//     })
// }
// find(numbers);
// console.log(nums);


// var [num1,num2,num3,num4] = numbers;

// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);