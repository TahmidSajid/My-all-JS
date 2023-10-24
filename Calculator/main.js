// ******** bootstrap page setup start **********

// ******** Row creating **********
var row_c = document.createElement("div");
document.body.appendChild(row_c);
row_c.classList.add("row");

// ******** coloumn creating ******** 
var col_c = document.createElement("div");
col_c.classList.add("col-lg");
col_c.classList.add("offset-lg-5");


// ******** inserting coloumn in row ************  
row_c.appendChild(col_c);

// ******** creating card *********** 
var full_card = document.createElement("div");


// ******** inserting card *********
col_c.appendChild(full_card);


// ******** inserting card class *********
full_card.classList.add("card");
full_card.classList.add("card-width");


// ******** inserting card body **********
var card_bdy = document.createElement("div");
full_card.appendChild(card_bdy);


// ******** inserting card class *********
card_bdy.classList.add("card-body")
card_bdy.classList.add("card-width");


// ******** insert input field **********
var input_fill  = document.createElement("input");
card_bdy.appendChild(input_fill);
input_fill.style.width = "213px";
input_fill.style.marginBottom = "5px";
input_fill.setAttribute('readonly',0);


// ******** creating div for buttons **********
var table_div = document.createElement("div");
card_bdy.appendChild(table_div);
table_div.classList.add("d-flex");
table_div.classList.add("justify-content-between");


// ******** bootstrap page setup end **********

// ******** blank string ********* 
var str = " ";


// ******** signs needed for calculator ********* 
var signs = ["+","-","*","/","=",".","AC","C"];




// ******** creating table for numbers **********
document.write("<table>")
var fst_table = document.querySelectorAll("table")[0];
table_div.appendChild(fst_table);
fst_table.setAttribute("border","0");
fst_table.setAttribute("colspan","0");


// ********* creating table row by loop ********
for(x=0;x<4;x++){
    document.write("<tr>")


//  ********* creating table column by loop ********
    for(y=0;y<3;y++){
        document.write("<td>");
        document.write("</td>");
    }
// ******** ending table column loop ********

    document.write("</tr>")
}
// ******** ending table row loop ********

document.write("</table>")

// ******** ending table creation ********


//  catching all the number coloumn by loop ******* 
for(i=0;i<10;i++){
    let number_col =  document.querySelectorAll("td")[i];
    number_col.classList.add("Number_col")
}


// ******** creating table for signs **********
document.write("<table>")

// ******** creating table row by loop **********
for(x=0;x<4;x++){
    document.write("<tr>")

// ******** creating table column by loop **********
    for(y=0;y<2;y++){
        document.write("<td>");
        document.write("</td>");
    }
// ******** ending table column loop ********

    document.write("</tr>")
}

// ******** ending table row loop ********
document.write("</table>")

// ******** ending table creation ********


// ******** inserting sign table in div ******** 
var snd_table = document.querySelectorAll("table")[1];
table_div.appendChild(snd_table);


// ******** catching sign column of sign table *********
for(i=10;i<17;i++){
    let sign_col =  document.querySelectorAll("td")[i];
    sign_col.classList.add("Sign_col")
}


// ************ creating number buttons by loop and inserting them in number table column *************
    for(i=0;i<10;i++){
        var button = document.createElement("button");
        button.classList.add("button_width");
        let number_col =  document.querySelectorAll("td")[i];
        number_col.appendChild(button);
        var number = document.querySelectorAll("button")[i].innerHTML=i;

// ************* adding event listener to every number button ***************
        button.addEventListener("click",function(){
            str = str + this.innerHTML
            input_fill.setAttribute("value",str);
        })
    }


// ************ creating signs buttons by loop and inserting them in sign table column *************
signs.forEach((element,index)=>{
    var sign_button = document.createElement("button");
    sign_button.classList.add("button_width");
    sign_button.classList.add("sign_button");
    let sign_col =  document.querySelectorAll("td")[index+12];
    sign_col.appendChild(sign_button);

// ************ inserting every sign in sign buttons from arryy *************
    document.querySelectorAll(".sign_button")[index].innerHTML= element;

// ************* adding event listener to every sign buttons ************ 
    sign_button.addEventListener("click",function() {
        str = str+this.innerHTML;
        input_fill.setAttribute("value",str);

// *********** condition for non mathmatical sign buttons ************** 
        if(element!="=" && element!="." && element!="C"){
            set_icon = element;
        }
        if(this.innerHTML== "AC"){
            str = " ";
            input_fill.setAttribute('value',str);
        }
        if(this.innerHTML== "C"){
            let str_len = str.length-2;
            str = str.slice(0,str_len);
            input_fill.setAttribute("value",str);
        }
        if(this.innerHTML == "="){
            let str_len = str.length-1;
            str = str.slice(0,str_len);
            input_fill.setAttribute("value",str);
            var calcu = eval(str);
            str = " ";
            str = " "+calcu;
            input_fill.setAttribute("value",str);

        }
    })
})


// ****************** designing the last number 9 button ********************

var last_number_col = document.querySelectorAll("td")[9];
last_number_col.setAttribute('colspan',3)
last_number_col.firstChild.style.width = '124px';













            // if(set_icon == "+"){
            //     var new_input = str.split("+");
            //     var calcu = 0;
            //     sum(new_input)
            //     function sum(len){
            //         for(x=0;x<len.length;x++){
            //             calcu = calcu + parseFloat(len[x]);
            //         };
            //     }
            //     // var calcu = parseFloat(new_input[0]) + parseFloat(new_input[1]);
            //     str = " ";
            //     str = " "+calcu;
            //     input_fill.setAttribute("value",str);
            // }
            // if(set_icon == "-"){
            //     var new_input = str.split("-");
            //     var calcu = new_input[0];
            //     sub(new_input)
            //     function sub(len){
            //         for(x=1;x<len.length;x++){
            //             calcu = calcu - parseFloat(len[x]);
            //         };
            //     }
            //     // var calcu = parseFloat(new_input[0]) - parseFloat(new_input[1]);
            //     str = " ";
            //     str = " "+calcu;
            //     input_fill.setAttribute("value",str);
            // }
            // if(set_icon == "/"){
            //     var new_input = str.split("/");
            //     var calcu = new_input[0];
            //     div(new_input)
            //     function div(len){
            //         for(x=1;x<len.length;x++){
            //             calcu = calcu / parseFloat(len[x]);
            //         };
            //     }
            //     // var calcu = parseFloat(new_input[0]) / parseFloat(new_input[1]);
            //     str = " ";
            //     str = " "+calcu;
            //     input_fill.setAttribute("value",str);
            // }
            // if(set_icon == "*"){
            //     var new_input = str.split("*");
            //     var calcu = new_input[0];
            //     mul(new_input)
            //     function mul(len){
            //         for(x=1;x<len.length;x++){
            //             calcu = calcu * parseFloat(len[x]);
            //         };
            //     }
            //     // var calcu = parseFloat(new_input[0]) * parseFloat(new_input[1]);
            //     str = " ";
            //     str = " "+calcu;
            //     input_fill.setAttribute("value",str);
            // }



// var last_sign_col = document.querySelectorAll("td")[18];
// last_sign_col.setAttribute('colspan',2)
// last_sign_col.firstChild.style.width = '82px';







// function sign_check(x) {
//     console.log(x);
//     var this_icon = x;
// }















// var e_button = document.createElement("button");
// e_button.classList.add("e_button");
// document.body.appendChild(e_button);
// document.querySelector(".e_button").innerHTML= "=";
// e_button.addEventListener("click",function() {
//     if(this.innerHTML == "="){
//         console.log(this_icon);
//         var new_input = str.split("+");
//         var calcu = parseInt(new_input[0]) + parseInt(new_input[1]);
//         input_fill.setAttribute("value",calcu);
//     }
// })
















// var bttns = document.querySelectorAll("button");
// Array.from(bttns).forEach(element => {
//     element.addEventListener("click",function() {
//         str += this.innerHTML;
//         input_fill.value = str;
//     })
// });




// console.log(input_fill);
// input_fill.set