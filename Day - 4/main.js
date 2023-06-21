// var names = ['sajid' , 'tanim' , 'emon' , 'rifat' ]
// var sum = 0;

// for(var i=0; i<=3; i++ ){
//     console.log("students names are:"+names[i])
//     sum = names[i]+names[i];
//     console.log(sum)
// }


// var names = [10 , 20 , 30 , 40]
// var sum = 0;

// for(var i=0; i<=3; i++ ){
//     sum = sum +names[i];
//     console.log(sum)
// }



// var numbers = new Array();

// for(var i=0; i<=4 ;i++){
//     numbers[i] = parseInt(prompt());
// }

// console.log(numbers)
// var sum = 0;
// for(var x=0 ; x<=4 ; x++){
//     sum = sum + numbers [x]
// }
// console.log(sum)


// function highestNumber(x){
//     var maximum = x[0];
//     for(var i = 1; i< x.length; i++){
//         if(maximum<x[i]){
//             maximum = x[i]
//         }
//     }
//     console.log(maximum)
// }
// var numbers = [40,50,80,5,110,100];

// highestNumber(numbers);










// var numbers = new Array();

// for(var i=0 ; i<5 ; i++){
//     numbers[i] = parseInt(prompt());
// }

// numbers.sort(function(a,b){
//     return a-b;
// })
// console.log(numbers[0])
















// var numbers = new Array();
//   for(var i=0 ; i<5 ; i++){
//      numbers[i] = parseInt(prompt());
//     }

// function highestNumber(x){
//     var maximum = x[0];
//     for(var i = 1; i< x.length; i++){
//         if(maximum<x[i]){
//             maximum = x[i]
//         }
//     }
//     console.log(maximum)
// }

// highestNumber(numbers);






// 2D array


// let students = [["sajid",20],
//                 ["tanim",30],
//                 ["emon",25],
//                 ["tarik",5],
//                 ["rifat",40],
//                 ["nayeem",21],
//                 ["sk",11]];

// for(x=0; x<7 ;x++){
//     for(i=0; i<2; i++){
//         console.log(students[x][i]);
//     }
// }


// let students = [["sajid",20],
//                 ["tanim",30],
//                 ["emon",25],
//                 ["tarik",5],
//                 ["rifat",40],
//                 ["nayeem",21],
//                 ["sk",11]];

// var max = students [0][1];
// var maxName = students [0][0];

// for(i=1 ; i<7 ;i++){
//     if(max < students[i][1]){
//         max = students [i][1]
//         maxName = students [i][0];
//     }
// }

// console.log(maxName)


// var names = ["sajid" , "tanim" ,"robin" , "emon" , "rifat"]

// console.log(names)

// names.splice(1,1,"Karim","rahim")

// console.log(names)


// var details = {
//     name : "sajid",
//     age : 22,
//     class : "xii",
//     shift : "day"
// }

// function students(a,b,c,d){
//         this.name = a;
//         this.age = b;
//         this.class = c;
//         this.shift = d;
// }

// var student1 =new students("sajid",22,"xii","day");

// console.log(student1.name)


// function students(a,b,c,d){
//         this.name = a;
//         this.age = b;
//         this.class = c;
//         this.shift = d;
//         this.display = function(){
//             console.log(this.name);
//             console.log(this.age);
//             console.log(this.class);
//             console.log(this.shift);
//         } 
// }

// var student1 = new students("sajid",22,"xii","day");

// student1.display();

// var number;
// var x;
// var win = 0;
// var lose = 0;
// for(i=0; i<5; i++){
//     number = parseInt(prompt("guess a mumber :"));
//     if(number>0 && number<6){
//         x = Math.round((Math.random()*5));
//         console.log(x);
//         if(number==x){
//             win = win+1;
//         } 
//         else{
//             lose = lose+1;
//         }
//     }
//     else{
//         document.write("your number is invalid")
//         brake;
//     }
// }

// document.write("you win: "+win+"times<br>")
// document.write("you lose: "+lose+"times<br>")

