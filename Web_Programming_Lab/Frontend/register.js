function validatePassword(){
    let password=document.getElementById("password").value;
    let confirmPassord=document.getElementById("confirmPassword").value;
    console.log(password,confirmPassord);
    let message=document.getElementById("message");

    if(password.length !=0){
        if (password==confirmPassord){
            message.textContent="password matched";
        }
        else{
            message.textContent="not matched";
        }
    }
    else{
        alert("password could not be empty")
    }
}