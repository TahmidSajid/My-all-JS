var word = "coconut";
var arr = [];
var str = "";




// var randomNum = Math.round((Math.random()*4))
// console.log("random number is"+randomNum);
// var numCheck = arr.find(y => y==randomNum);

// console.log(numCheck.hasOwnProperty())

// if((typeof arr.find(y => y==randomNum) ) === "undefined"){
//     var alpha = word.charAt(randomNum);
//     str = str+alpha;
//     arr[0]= randomNum;
//     console.log(arr);
//     console.log(str);
// }


for(x=0;x<word.length;x++){
    
    var randomNum = Math.round((Math.random()*(word.length-1)))
    console.log(randomNum);
    if((typeof arr.find(y => y==randomNum) ) === "undefined"){
        var alpha = word.charAt(randomNum);
        str = str+alpha;
        arr[x]= randomNum;
        // console.log(arr);
        // console.log(str);
    }
    else{
        x = x-1;
    }
    if(str==word){
        str = "";
        arr = [];
        x = -1;
        // document.write("again<br>")
    }
}

document.write(str);