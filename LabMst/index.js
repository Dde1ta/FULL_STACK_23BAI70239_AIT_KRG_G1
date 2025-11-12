const form = document.getElementById("form");
const button = document.getElementById("submit_button")

function vaidEmail(email){
    
    if(email.includes('@')){
        var com = email.split('@')[1];
        return com.includes(".com")

    }else{
        return false;
    }
}

button.onclick = (ev) => {
    ev.preventDefault();
    var email = document.getElementById("email_input_field").value;

    if(email === '') alert("Enter Email");

    else{
        if(vaidEmail(email)){
            var pass = document.getElementById("password_input_field").value;
            if(pass === "") alert("Enter Password");
            else alert("Registeration Complete");
        }else{
            alert("Invalid Email");
        }
    }
};