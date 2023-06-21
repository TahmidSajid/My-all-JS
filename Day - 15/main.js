for(i=0 ; i<3; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        console.log(text)
        playA(text)
        playanimat(text)
    })
}

function playA (text){
        switch(text){
        case "a": 
        var audio = new Audio ("sounds/1.mp3");
        audio.play();
        break;
        case "b": 
        var audio = new Audio ("sounds/2.mp3");
        audio.play();
        break;
        case "c": 
        var audio = new Audio ("sounds/3.mp3");
        audio.play();
        break;
    }
}

function playanimat (x){
    var selectBttn = document.querySelector("."+x);
    selectBttn.classList.add("button-anime");

    setTimeout(function(){
        selectBttn.classList.remove("button-anime");
    }, 1000)
}