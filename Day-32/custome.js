let screen = document.querySelector("#test_video")

// console.log(screen);

screen.addEventListener('canplay',()=>{
    console.log('canplay');
})
screen.addEventListener('play',()=>{
    console.log('play');
})
screen.addEventListener('playing',()=>{
    console.log('playing');
})
screen.addEventListener('pause',()=>{
    console.log('pause');
})
screen.addEventListener('ended',()=>{
    console.log('ended');
})
screen.addEventListener('volumechange',()=>{
    console.log('volumechange');
})
screen.addEventListener('waiting',()=>{
    console.log('wating');
})
screen.addEventListener('progress',()=>{
    console.log('progress');
})