// checks if the correct access password is given
function checkPswd() {
    var admin = document.getElementById("myCheck");
    var user = document.getElementById("user").value;
    var confirmPassword = "Perfect_Candidate100%";
    let password = document.getElementById("pswd").value;

    if (admin.checked) {
        checkAdmin();
    }
    else {
        if (user === "") {
            alert("Please enter your name.");
        }
        else if (password == confirmPassword) {
            window.location.replace("courses.html");
        }
        else {
            alert("Incorrect Password Entered");
        }
    }
}

// checks if the correct admin password is given
function checkAdmin() {
    var confirmAdminPass = "adminAccess10!";
    let password = document.getElementById("pswd").value;
    if (password == confirmAdminPass) {
        window.location.replace("admin.html");
    }
    else {
        alert("Incorrect Admin Pasasword. Verify that you want to login as admin.")
    }
}