let inputs = document.querySelectorAll('input');

// let lable = document.querySelector('label');




// input.addEventListener("focusin",(e)=>{
//     // console.log(e.target.placeholder)
//     // lable.innerHTML= e.target.placeholder;
//     // input.placeholder = " "
//     design.classList.add("focused")
    
// })

// input.addEventListener("focusout",(e)=>{
//     // console.log(e.target.placeholder)
//     // input.placeholder = lable.innerHTML;
//     // lable.innerHTML = "";
//     design.classList.remove("focused")
// })


let all_Input = Array.from(inputs)

// all_Input.map((x)=>{
//     x.addEventListener("focusin",(e)=>{
//         let design = document.querySelector('#design')
//         design.classList.add("focused")
//     })
// })
// all_Input.map((x)=>{
//     x.addEventListener("focusout",(e)=>{
//         let design = document.querySelector('#design')
//         design.classList.remove("focused")
//     })
// })


for(x=0; x<all_Input.length; x++){
    let input = document.querySelectorAll('input')[x];
    let design = document.querySelectorAll('#design')[x];
    input.addEventListener("focusin",()=>{
    design.classList.add("focused")
    })
    input.addEventListener("focusout",()=>{
        design.classList.remove("focused")
    })
}

// let design1 = document.querySelectorAll('#design')[0];
// let design2 = document.querySelectorAll('#design')[1];

// console.log(design2)