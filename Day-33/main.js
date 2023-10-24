window.addEventListener('load',()=>{
    console.log('load')
})
window.addEventListener('unload',()=>{
    console.log('unload')
})
window.addEventListener('scroll',()=>{
    console.log('scroll')
})
window.addEventListener('resize',(e)=>{
    console.log(e.target.outerHeight)
    console.log(e.target.outerWidth)
})

let details = document.querySelector('details')
details.addEventListener('toggle',()=>{
    console.log('toggle')
})