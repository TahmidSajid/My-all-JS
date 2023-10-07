// const promisePart = new Promise((resolve,reject)=>{
//     let keep = false;

//     if(keep){
//         resolve("the promise is kept");
//     }
//     else{
//         reject("you didn't kept the promise");
//     }
// })

// promisePart.then((x)=>{
//     console.log(x);
// }).catch((y)=>{
//     console.log(y);
// })



const calculation = new Promise((sum,sub)=>{
    let des = 1;

    if(des){
        sum([10,30]);
    }
    else{
        sub([30,10]);
    }
})
const calculation2 = new Promise((div,mul)=>{
    let des = 1;

    if(des){
        div([30,10]);
    }
    else{
        mul([30,10]);
    }
})

// calculation.then(([x,y])=>{
//     let result = x+y;
//     console.log(`the result is : ${result}`);
// }).catch(([x,y])=>{
//     let result = x-y;
//     console.log(`the result is : ${result}`);
// })


// Promise.all([calculation,calculation2]).then((x)=>{
//     let result = (x[0][0]+x[0][1]);
//     console.log(result);
//     let result2 = (x[1][0]/x[1][1]);
//     console.log(result2);
// })