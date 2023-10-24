let input = document.querySelector('input');

let lable = document.querySelector('label');

input.addEventListener("focusin",(e)=>{
    console.log(e.target.placeholder)
    lable.innerHTML= e.target.placeholder;
    input.placeholder = " "

})

input.addEventListener("focusout",(e)=>{
    console.log(e.target.placeholder)
    input.placeholder = lable.innerHTML;
    lable.innerHTML = "";
})