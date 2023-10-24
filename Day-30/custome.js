var myname = document.querySelector('input');
let see_here = document.querySelector('.see_here');
console.log(see_here);
const changeHandeler = (e)=>{
    console.log(e)
    console.log(e.target.value)
    let text = e.target.value
    see_here.innerHTML=text
}
myname.addEventListener("change",changeHandeler)

// const changeHandeler = (e)=>{
//     console.log('changed')
// }