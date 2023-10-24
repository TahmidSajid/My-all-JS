let form = document.querySelector('form');
let fname = document.querySelector('form div #name');
let email = document.querySelector('form div #email');
let password = document.querySelector('form div #password');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let details = {
        name:e.target.name.value,
        email:e.target.email.value,
        password:e.target.password.value,
    }
    console.log(details)
    e.target.name.value ="";
    e.target.email.value ="";
    e.target.password.value ="";
})