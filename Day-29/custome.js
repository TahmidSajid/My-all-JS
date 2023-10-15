const taskOne = ()=>{
    return new Promise((resolve, reject) => {
        resolve("task 1 is complete");
    })
}
const taskTwo = ()=>{
    return new Promise((resolve, reject) => {
        resolve("task 2 is complete");
    })
}
const taskThree = ()=>{
    return new Promise((resolve, reject) => {
        resolve("task 3 is complete");
    })
}
const taskFour = ()=>{
    return new Promise((resolve, reject) => {
        resolve("task 4 is complete");
    })
}
const taskFive = ()=>{
    return new Promise((resolve, reject) => {
        resolve("task 5 is complete");
    })
}
const taskSix = ()=>{
    return new Promise((resolve, reject) => {
        resolve("task 6 is complete");
    })
}
taskOne().then((con)=>{
    console.log(con);
}).then(taskTwo).then((con)=>{
    console.log(con);
}).then(taskThree).then((con)=>{
    console.log(con)
}).then(taskFour).then((con)=>{
    console.log(con);
}).then(taskFive).then(function(con){
    console.log(con)
}).then(taskSix).then((con)=>{
    console.log(con);
})