let box = document.querySelector('.box');

box.addEventListener('click',()=>{
    box.classList.toggle("red")
})

// box.addEventListener('dblclick',()=>{
//     box.classList.toggle('yellow')
// })

// box.addEventListener('mousedown',()=>{
//     console.log('red')
// })

// box.addEventListener('mouseup',()=>{
//     console.log('orange')
// })

// box.addEventListener('mouseenter',()=>{
//     console.log('mouse enter is ocured')
//     box.classList.add("yellow")
// })

// box.addEventListener('mouseleave',()=>{
//     console.log('mouse left')
//     box.classList.remove('black')
//     box.classList.remove('spining')
// })
// box.addEventListener('mouseenter',()=>{
//     console.log('mouse enter is ocured')
//     box.classList.add("black")
//     box.classList.add('spining')
// })

// box.addEventListener("mousemove",(e)=>{
//     console.log(`x-axis:${e.clientX}`)
//     console.log(`y-axis:${e.clientY}`)
// })

// box.addEventListener('mousemove',(e)=>{
//     console.log(`x-axis:${e.clientX}`)
//     console.log(`y-axis:${e.clientY}`)
// })

box.addEventListener('mouseover',(e)=>{
    console.log(`x-axis:${e.clientX}`)
    console.log(`y-axis:${e.clientY}`)
})