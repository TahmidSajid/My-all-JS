// var x = 220;
//     x = x.toString()
// console.log(x);


// var x = '210';
//  x = parseInt(x);
// console.log(x);


// var x = 2.124
// x = x.toFixed(1);
// console.log(x);


// var x = 2.1587;
// x = x.toPrecision(3);
// console.log(x);


// var x = "2.14";
// console.log(x);
// x = Number(x);
// console.log(x);



// var x = "my name is sajid";
// console.log(x.length);


// var x = "my name is sajid";

// console.log(x.charAt(1));

// console.log(x.toLowerCase());
// console.log(x.toUpperCase());


// var x = "morshed";

// console.log(x.slice(0,3));


var x = "my name is sajid";
let word = "";
let sentence = [];
let serial = 0;
for(p=0;p<x.length;p++){
    if(x.charAt(p)!=" "){
        word = word + x.charAt(p);
        if(p==x.length-1){
            console.log(word)
            sentence[serial] = word;
        }
    }
    else{
        console.log(word);
        sentence[serial] = word;
        console.log(serial);
        word = "";
        serial = serial+1;
    }

}
console.log(sentence);
var arr = new Array();
var str = ""
for(a=0;a<sentence.length;a++){
    var random = Math.round(Math.random()*(sentence.length-1));
    if(typeof arr.find(x=> x==random)=="undefined"){
        arr[a]= random;
        str = str + sentence[random]+" ";
        console.log(str);
        console.log(arr);
    }
    else{
        a=a-1;
    }
}

