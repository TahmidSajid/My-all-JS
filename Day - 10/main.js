let photos = ["images/1.jpg","images/2.jpg","images/3.jpg"];
let change = document.querySelector("img");

var count = 0;

function next(){
    count++
    if(count >= photos.length){
        count=0;
        change.src = photos[count];
    }
    else{
        change.src = photos[count];
    }
};
function prev(){
    count--;
    if(count<0){
        count = photos.length-1
        change.src= photos[count];
    }
    else{
        change.src= photos[count];
    }
}

// function next(){
//     count++
//     if(count >= 4){
//         count= 1;
//         change.src = "images/" + count+".jpg"
//     }
//     else{
//         change.src = "images/" + count+".jpg"
//     }
// };
// function prev(){
//     count--;
//     if(count<1){
//         count = 3
//         change.src = "images/" + count+".jpg"
//     }
//     else{
//         change.src = "images/" + count+".jpg"
//     }
// }