// callback function 
// let a = 20;
// let b = 30;
// const calculation = (x,y) =>{
//     console.log(`the result is : ${x+y}`);
// }

// const sum = (p,q,callback)=>{
//     callback(p,q);
// }

// sum(a,b,calculation);





// const task1 = (callback) =>{
//     console.log('this is 1');
//     callback();
// }
// const task2 = (callback) =>{
//     setTimeout(()=>{
//         console.log('this is 2');
//         callback()
//     },3000)

// }
// const task3 = (callback) =>{
//     console.log('this is 3');
//     callback()
// }
// const task4 = (callback) =>{
//     console.log('this is 4');
//     callback()
// }
// const task5 = (callback) =>{
//     console.log('this is 5');
//     callback()
// }
// const task6 = (callback) =>{
//     console.log('this is 6');
//     callback()
// }
// const task7 = (callback) =>{
//     console.log('this is 7');
//     callback()
// }
// const task8 = () =>{
//     console.log('this is 8');
// }





//*******  call back hell  *******/ 



// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 task5(()=>{
//                     task6(()=>{
//                         task7(()=>{
//                             task8();
//                         })
//                     })
//                 })
//             })
//         });
//     });
// });



const task1 = () =>{
    return new Promise ((resolve,reject)=>{
        let printing = 1;
        if(printing){
            resolve('this is task 1');
        }
        else{
            reject('failed1');
        }
    })
}
const task2 = () =>{
    return new Promise ((resolve,reject)=>{
        let printing = 1;
        if(printing){
            resolve('this is task 2');
        }
        else{
            reject('failed2');
        }
    })
}
const task3 = () =>{
    return new Promise ((resolve,reject)=>{
        let printing = 1;
        if(printing){
            resolve('this is task 3');
        }
        else{
            reject('failed3');
        }
    })
}
const task4 = () =>{
    return new Promise ((resolve,reject)=>{
        let printing = 1;
        if(printing){
            resolve('this is task 4');
        }
        else{
            reject('failed4');
        }
    })
}

task1().then((x)=>{
    console.log(x);
}).then(task2).then((x)=>{
    console.log(x);
}).then(task3).then((x)=>{
    console.log(x);
}).then(task4).then((x)=>{
    console.log(x);
}).catch((y)=>{
    console.log(y)
})