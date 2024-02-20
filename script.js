const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');



function error(input,message){
    input.className = 'form-control is-invalid';
    const div=input.nextElementSibling;
    div.innerText=message;
    div.className='invalid-feedback'
}

function succes(input){
    input.className = 'form-control is-valid';
}

function checkRePassword(password,repassword){
        if(password.value===repassword.value){
            succes(repassword);
        }else{
            error(repassword,"Passwords do not match!");
            error(password,"Passwords do not match!");
        }
    
}

function checkEmail(email){
    const validateEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(validateEmail.test(email.value)){
        succes(email);
    }else{
        error(email,"The email must comply with the format!")
    }
}

function checkPhone(phone){
    const validatePhone=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if(validatePhone.test(phone.value)){
        succes(phone);
    }else{
        error(phone,"Phone information must comply with the specified format!");
    }
}

function checkRequired(inputs){

    inputs.forEach(function(input){
        if(input.value===''){
            error(input,`${input.id} is required!`);
        }
        else{
            succes(input);
        }
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    checkRequired([username,email,phone,password,repassword]);
    checkEmail(email);
    checkRePassword(password,repassword);
    checkPhone(phone);
});