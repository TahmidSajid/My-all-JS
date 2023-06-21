// var details = ["goru" , "chagol" , "hash" , "murgi"];

// function display(){
//     for(i=0;i<details.length;i++){
//         document.querySelectorAll("ul li")[i].innerHTML= details[i];
//     }
// }

// var sum = 0;
// for(i=0;i<6;i++){
//     var until =i*10;
//         for(x=sum;x<=until;x++){
//            document.querySelectorAll("table tr")[i].querySelectorAll("td")[x].innerHTML = x;
//     }
//     sum = sum+10;
// }


// var sum = 1;
// document.write("<table>")
// for(i=1;i<11;i++){
//     var until =i*10;
//         document.write("<tr>")
//     for(x=sum;x<=until;x++){
//         document.write("<td>"+x+"</td>")
//     }
//     document.write("</tr>")
//     sum = sum+10;
// }
// document.write("</table>")
// var sum = 0;
// for(i=1;i<6;i++){
//     var until =i*10;
//     for(x=sum;x<=until;x++){
//         document.write(x)
//     }
//     sum = sum+10;
// }
// for(i=1;i<=100;i++){
//     console.log(i)
// }

document.write("<table>")
for(i=1;i<=100;i=i+10){
        document.write("<tr>")
    for(x=i;x<i+10;x++){
        document.write("<td>"+x+"</td>")
    }
    document.write("</tr>")
}
document.write("</table>")