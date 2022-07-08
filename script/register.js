var personarray = [];
function register() {
    var name = document.getElementById('Inputname1').value;
    var em = document.getElementById('InputEmail1').value;
    var mob = document.getElementById('Inputmobile1').value;
    var pw = document.getElementById('InputPassword1').value;
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var i;
    var username = /^[a-zA-Z]{1,}$/;

    var pass = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/

    var eml = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.][a-zA-Z]{3,}(.[a-zA-Z]{2,})?$/;

    var mb = /^[6-9]\d{9}$/;

    if (username.test(name)) {

        //document.getElementById("nameHelp").innerHTML = "valid username ";

        document.getElementById("nameHelp").style.display="none";
        a = 1;


    }
    else {

        document.getElementById("nameHelp").innerHTML = "Invalid username";
        document.getElementById("nameHelp").style.color = "red";
    }
    if (pass.test(pw)) {
        //document.getElementById("passwordHelp").innerHTML = " valid password";
        document.getElementById("passwordHelp").style.display="none";
        b = 1;

    }
    else {
        document.getElementById("passwordHelp").innerHTML = "must contain 8 character at least one uppercase ,lower case ,numeric,and special character";
        document.getElementById("passwordHelp").style.color = "red";

    }
    if (eml.test(em)) {
        //document.getElementById("emailHelp").innerHTML = "valid email ";
       document.getElementById("emailHelp").style.display="none";
        c = 1;

    }
    else {
        document.getElementById("emailHelp").innerHTML = "Invalid email";
        document.getElementById("emailHelp").style.color = "red";

    }
    if (mb.test(mob)) {
        document.getElementById("mobileHelp").style.display="none";

        
        d = 1;

    }
    else {
        document.getElementById("mobileHelp").innerHTML = "Invalid mobile ";
        document.getElementById("mobileHelp").style.color = "red";

    }

    if (a == 1 && b == 1 && c == 1 && d == 1) {
        if (localStorage.personrecord) {
            
            personarray = JSON.parse(localStorage.personrecord);
            
            for (  i = 0; i < personarray.length; i++) {
                if (personarray[i].email == em) {
                    document.getElementById("emailHelp").style.display="block";

                    document.getElementById("emailHelp").innerHTML = "already registered this email id ";
                    document.getElementById("emailHelp").style.color = "red";
                   event.preventDefault();
                    break;
                }
            }
        
            if (i == personarray.length) {
                var personobject = { Name: name, password: pw, email: em, mobile: mob };
                personarray.push(personobject);

                localStorage.personrecord = JSON.stringify(personarray);
               
                window.location.href = "../html/login.html";
            }


        }
        else {
            var personobject = { Name: name, password: pw, email: em, mobile: mob };
            personarray.push(personobject);

            localStorage.personrecord = JSON.stringify(personarray);
           
            window.location.href = "../html/login.html";
        }
    }
    
}