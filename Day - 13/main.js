var para = document.querySelector("p");
var len = document.querySelectorAll("button").length

for(i=0; i<len; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        para.innerHTML = text+" is clicked"
    })
}
