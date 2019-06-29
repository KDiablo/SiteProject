function verifyLogIn() {
    
    var pass = document.getElementById("password");
    var email = document.getElementById("email");

    if (pass.value.length == 0) {
        alert("Please enter a password!");
        return false;
    } if (email.value.length == 0) {
        alert("Please enter an email!");
        return false;
    }
    return true;
}

function verifyContactForm() {
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    var name = document.getElementById("name");

    if (message.value.length == 0) {
        alert("Please enter a message to send.");
        return false;
    }
    if (name.value.length == 0) {
        alert("please enter your name.");
        return false;
    }
    if (email.value.length == 0) {
        alert("please enter your email.");
        return false;
    }
    return true;
}

function verifyProductSearch() {
    var searchterm = document.getElementById("searchfor");

    if (searchfor.value.length == 0) {
        alert("Please enter a search term.");
    }
}

function verifySignUp() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var pass = document.getElementById("password");
    var repass = document.getElementById("repassword");
    var dob = document.getElementById("dob").value;
    var myDate = new Date();
    myDate.setFullYear(myDate.getFullYear - 13);

    if (name.value.length == 0) {
        alert("Please enter your name");
        return false;
    } if (pass.value.length == 0) {
        alert("Please enter a password");
        return false;
    } if (repass.value != pass.value) {
        alert("your passwords do not match");
        return false;
    } if (new Date(dob).getTime() < myDate.getTime()) {
        alert("You are not old enough to shop online.");
        return false;
    } if (email.value.length == 0) {
        alert("Please enter your email.");
    }
    return true;
}

function verifyLostPw() {
    var email = document.getElementById("email");

    } if (email.value.length == 0) {
        alert("Please enter an email!");
        return false;
    }
    return true;
}