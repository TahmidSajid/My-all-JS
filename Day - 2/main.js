// var a = 20;


// if(a > 21){
//     console.log("okay")
// }
// else{
//     console.log("never mind")
// }


// var a = 20;

// if(a > 5){
//     console.log("1st is correct")
// }
// else if(a >= 20){
//     console.log("2nd is correct")
// }
// else{
//     console.log("none of them")
// }


// var a = 20;

// if(a > 5 || a < 26){
//     console.log("okay baby")
// }


// var age = 65;

// if (age > 18){
//     if (age > 30 && age < 50){
//         console.log("you are grown man");
//     }
//     else if (age > 60){
//         console.log("you are old man");
//     }
//     else{
//         console.log("you are a boy");
//     }
// }
// else{
//     console.log("you are clildren");
// }


// var a = 160;
// var b = 100;
// var c = 110;

// if (a < b && b > c){
//     console.log("b is the biggest number");
// }
// else if (b < a && c < a){
//     console.log("a is the big number")
// }
// else{
//     console.log("c is the biggest number")
// }



// for(i=0 ; i<10 ; i++){
//     console.log("i is at:" + i)
// }

// do{
//     console.log("inside the loop");
//     var num = prompt("insert a number: ");
// }
// while(num < 10)
//     console.log("outside the loop")

// var a = prompt("insert a number: ");

// while(a < 10){
//     console.log("in the loop")
// }
// console.log("outside the loop")

// for(var i = 0 ; i < 10; i++){
//     if(i==5){
//         console.log(i + " is skipped")
//         continue;
//     }
//     console.log("we are at:" + i);
// }
// console.log("out of the loop")



// for(i=0 ; i < x.length ; i++){
//     console.log("name :" + x[i]) 
// }

// var x = ['sajid' , 'naiym' , 'Mujahid'];

// console.log(x)

// x.push('tanim','mujahid','ratan')

// console.log(x.length)

// var y = x.splice(1,2);

// console.log(y)

// var x = {
//     name: 'tanim',
//     age: '22',
//     postcode: '01583612',
//     class: 'xiii',
// }

// console.log(x.class)
// x.gf ='can not be count';

// console.log(x)

// x.welcomeMessage = function(){
//     console.log('ami sakib khan')
// }
// for(item in x){
//     console.log(item)
// }
// var y = {
//     name: 'A R Golap Mosled',
//     age: '001',
//     postcode: '0000000',
//     class: 'xii',
//     hsc : '2 times', 
//     gf: 'does not have any cause chesra'
// }

// y.friendlist = ['tanim' , 'emon', 'rifat']


// console.log(y.friendlist[1])

// y.message = function(){
//     console.log("hello ami chesra");
// }
// console.log(y.message())

// function zoge(a, b){
//     var sum = a+b;
//     return sum;
// }

// console.log(zoge(40 , 50));

// function myCalculation (name , age){
//     console.log(' My name is '+ name + ' and I am '+ age + ' years old ')
// }

// myCalculation('sajid' , 20 );


// function callMyName(name, callback) {
//     var myAge = 20;
//     callback(myAge);
//     console.log('Is it interesting? Yes it is Mr.' + name);
// }

// function hello(age) {
//     console.log('I am passed through argument and my age is: ' + age);
// }

// callMyName('Zonayed Ahmed', hello);


// var x = 20;
// var y = 60;
// var z = 90;

// if(x > z && x > y){
//     console.log("x is the bigger number")
// }
// else if (y > x && y > z){
//     console.log("y is the bigger number")
// }
// else if(z > x && z > y){
//     console.log("z is the bigger number")
// }

// var x = 18;
// var y = 32;
// var z = 50;
// var age = prompt();

// if(age >= x && age < y){
//     document.write("you are too young")
// }
// else if(age >= y && age < z){
//     document.write("you are man")
// }
// else if(age >= z){
//     document.write("you are old")
// }
// else{
//     document.write("you are a child")
// }

// var firstName = prompt("enter your first name :");
// var lastName = prompt("enter your last name :");

// var fullName = firstName + lastName;

// document.write(fullName.toUpperCase() +' is your full name </br>')
// document.write(fullName.length)
// toString(fullName)
// typeof(fullName)
// document.write(fullName.charAt(2))

// var x = prompt("insert your first number: ");
// var y = prompt("insert your second number: ");

// x = parseInt(x, 10);

// y = parseInt(y, 10);

// var sum = x+y;
// var sub = x-y;
// var div = x/y;
// var multi = x*y;
// var mod = x%y;


// document.write("sum is: " + x + " + " + y + " = " + sum + "</br>"+
//                 "sub is: " + x + " - " + y + " = " + sub + "</br>"+
//                 "div is: " + x + " / " + y + " = " + div + "</br>"+
//                 "multi is: " + x + " - " + y + " = " + multi + "</br>"+
//                 "mod is : " + x + " % " + y + " = " + mod);

// var x = parseFloat(prompt("insert value for base"));
// var y = parseFloat(prompt("insert value for height"));

// document.write("base is : " + x + "</br>" + " height is : " + y + "</br>");

// var squareFormula = x*y;

// document.write("the result is : "+squareFormula);

// var x = parseFloat(prompt("insert value for base"));
// var y = parseFloat(prompt("insert value for height"));

// document.write("base is : " + x + "</br>" + " height is : " + y + "</br>");

// var rectengleFormula = (x*y)/2;

// document.write("the result is : "+rectengleFormula)

// var x = parseFloat(prompt("insert value for a"));
// var y = parseFloat(prompt("insert value for b"));
// var z = parseFloat(prompt("insert value for height"));

// document.write("a is : " + x + "</br>" + " b is : " + y + "</br>"+ "height is : "+z);

// var trapeziumFormula = ((x+y)*z)/2;

// document.write("the result is : "+trapeziumFormula)


// var x = parseFloat(prompt("insert value for base"));
// var y = parseFloat(prompt("insert value for p-height"));

// document.write("base is : " + x + "</br>" + " height is : " + y + "</br>");

// var squareFormula = x*y;

// document.write("the result is : "+squareFormula);



// var number = prompt('Enter you exam number: ')

// var number =parseFloat(prompt('Enter your exam number:'));

// if(number>=80){
//     console.log('You got A+')
// }
// else if(number >=70 && number<80){
//     console.log('You got A')
// }
// else if(number >= 60 && number < 70){
//     console.log('You got A-')
// }
// else if(number >= 50 && number < 60){
//     console.log('You got B')
// }
// else if(number >= 40 && number < 50){
//     console.log('You got C')
// }
// else if(number >= 33 && number < 40){
//     console.log('You got D')
// }
// else{
//     console.log('you are failed')
// }



// var letter = prompt('Enter your letter: ');

//     letter = letter.toLowerCase()

// if(letter == 'a'|| letter == 'e'||  letter == 'i'|| letter == 'o'|| letter == 'u'){
//     document.write('Your letter is vowel')
// }
// else{
//     document.write('Your letter is consonant')
// }


// var letter = prompt('Enter your letter: ');

//     letter = letter.toLowerCase();

// switch(letter){
//     case 'a':console.log('vowel');
//     break;
//     case 'e':console.log('vowel');
//     break;
//     case 'i':console.log('vowel');
//     break;
//     case 'o':console.log('vowel');
//     break;
//     case 'i':console.log('vowel');
//     break;
//     default: console.log('consonant');
// }