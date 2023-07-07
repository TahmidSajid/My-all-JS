var str = " ";
var input_fill  = document.querySelectorAll(".input-number")[0];
var signs = ["+","-","*","/","="];
for(i=0;i<10;i++){
    var button = document.createElement("button");
    document.body.appendChild(button);
    var number = document.querySelectorAll("button")[i].innerHTML=i;
    button.addEventListener("click",function(){
        str = str + this.innerHTML
        input_fill.setAttribute("value",str);
    })
}
signs.forEach((element,index)=>{
    var sign_button = document.createElement("button");
    sign_button.classList.add("sign_button");
    document.body.appendChild(sign_button);
    document.querySelectorAll(".sign_button")[index].innerHTML= element;
    sign_button.addEventListener("click",function() {
        str = str+this.innerHTML;
        input_fill.setAttribute("value",str);
        if(element!="="){
            set_icon = element;
        }
        if(this.innerHTML == "="){
            if(set_icon == "+"){
                var new_input = str.split("+");
                var calcu = parseInt(new_input[0]) + parseInt(new_input[1]);
                input_fill.setAttribute("value",calcu);
            }
            if(set_icon == "-"){
                var new_input = str.split("-");
                var calcu = parseInt(new_input[0]) - parseInt(new_input[1]);
                input_fill.setAttribute("value",calcu);
            }
            if(set_icon == "/"){
                var new_input = str.split("/");
                var calcu = parseInt(new_input[0]) / parseInt(new_input[1]);
                input_fill.setAttribute("value",calcu);
            }
            if(set_icon == "*"){
                var new_input = str.split("*");
                var calcu = parseInt(new_input[0]) * parseInt(new_input[1]);
                input_fill.setAttribute("value",calcu);
            }
        }
    })
})


















// function sign_check(x) {
//     console.log(x);
//     var this_icon = x;
// }















// var e_button = document.createElement("button");
// e_button.classList.add("e_button");
// document.body.appendChild(e_button);
// document.querySelector(".e_button").innerHTML= "=";
// e_button.addEventListener("click",function() {
//     if(this.innerHTML == "="){
//         console.log(this_icon);
//         var new_input = str.split("+");
//         var calcu = parseInt(new_input[0]) + parseInt(new_input[1]);
//         input_fill.setAttribute("value",calcu);
//     }
// })
















// var bttns = document.querySelectorAll("button");
// Array.from(bttns).forEach(element => {
//     element.addEventListener("click",function() {
//         str += this.innerHTML;
//         input_fill.value = str;
//     })
// });




// console.log(input_fill);
// input_fill.set