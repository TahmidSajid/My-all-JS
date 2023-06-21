var para = document.querySelector("p");


para.addEventListener("click",function(){
    para.classList.add("para-style");
})

para.addEventListener("drag",function(){
    para.classList.remove("para-style");
})