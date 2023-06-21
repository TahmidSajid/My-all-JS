let para = document.querySelector("p");


// function addStyle(){
//     para.style.color = "red";
//     para.style.fontSize = "25px";
//     para.style.fontStyle = "italic";
// }

// function removeStyle(){
//     para.style.color = "black";
//     para.style.fontSize = "14px";
//     para.style.fontStyle = "none";
// }

function addStyle(){
    para.classList.add("para-style");
}

function removeStyle(){
    para.classList.remove("para-style");
}