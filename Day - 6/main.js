
// function message(){
//     var txt= prompt("enter your message:")
//     document.querySelector("p").innerHTML=txt;
// }

// function img1(){
//     document.querySelector("img").src="images/bmw.jpg"
// }
// function img2(){
//     document.querySelector("img").src="images/mar.jpg"
// }



// var names = ["sajid", "tanim" , "ripon" , "nayeem"];

// function txtMsg(){
//     for(i=0; i<names.length; i++){
//         document.querySelectorAll(".names-list li")[i].innerHTML=names[i]+"<br>";
//     }
// }

// var names = ["sajid", "tanim" , "ripon" , "tks" ];

// function txtMsg(){
//     for(i=0; i<names.length; i++){
//         document.querySelectorAll(".names-list")[i].innerHTML=names[i]+"<br>";
//     }
// }


var alpha = toloprompt("input the letter:");
alpha.toLowerCase();

if(alpha=="a"||alpha=="e"||alpha=="i"||alpha=="o"||alpha=="u"){
    console.log("letter is vowel")
}
else{
    console.log("letter is consonant")
}