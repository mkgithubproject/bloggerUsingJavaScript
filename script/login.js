var personarray = [];


function login() {


    var pw = document.getElementById('InputPassword1').value;
    var em = document.getElementById('InputEmail1').value;

    if (pw.length == 0 || em.length == 0) {
        document.getElementById("emailHelp").innerHTML = "fill all required field ";
            document.getElementById("passwordHelp").innerHTML = "fill all required field ";
            document.getElementById("emailHelp").style.color = "red";
            document.getElementById("passwordHelp").style.color = "red";
            event.preventDefault();
    }
    else if (localStorage.personrecord) {
        personarray = JSON.parse(localStorage.personrecord);
        for (i = 0; i < personarray.length; i++) {
            if (personarray[i].password == pw && personarray[i].email == em) {
                localStorage.setItem("global_email", em);
                location.replace("../html/after_login.html");
                event.preventDefault();
                break;
            }
        }
        if (i == personarray.length) {
            document.getElementById("emailHelp").innerHTML = "password and email id not matched ";
            document.getElementById("passwordHelp").innerHTML = "password and email id not matched  ";
            document.getElementById("emailHelp").style.color = "red";
            document.getElementById("passwordHelp").style.color = "red";
            event.preventDefault();

        }
    }
    else {
        document.getElementById("emailHelp").innerHTML = "password and email id not matched ";
        document.getElementById("passwordHelp").innerHTML = "password and email id not matched  ";
        document.getElementById("emailHelp").style.color = "red";
        document.getElementById("passwordHelp").style.color = "red";
        event.preventDefault();
    }
}

function authent() {
    if (localStorage.global_email) {
        window.location.href = "../html/after_login.html";
    }
}


