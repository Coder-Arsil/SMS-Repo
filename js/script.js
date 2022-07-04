$(document).ready(function() {
    var all_users = {
        user1: {
            id: "Malek",
            no: 9854753654,
            gender: "Male",
            ct: "India",
            pass: 1
        },
        user2: {
            id: "Khan",
            no: 26565666,
            gender: "Female",
            ct: "UK",
            pass: 1
        },
        user3: {
            id: "Pathan",
            no: 45465622,
            gender: "Male",
            ct: "Australia",
            pass: 1
        },
        user4: {
            id: "Aslam",
            no: 6236565,
            gender: "Male",
            ct: "India",
            pass: 1
        },
        user5: {
            id: "Javed",
            no: 45656226,
            gender: "Female",
            ct: "Canada",
            pass: 1
        },
    }
    var x = JSON.stringify(all_users);
    localStorage.setItem("all", x);
    $(document).on('click', "#signup-form", function() {

    });
    $("#signup-form").submit(function() {
        var nm1 = $("#name1").val();
        var ps1 = $("#pass1").val();
        var users = {
            "id": nm1,
            "pass": ps1
        }
        localStorage.setItem("n1", nm1);
        localStorage.setItem("p1", ps1);

    });

    $("#login-form").submit(function(e) {
        var enteredName = $("#name2").val();
        var enteredPass = $("#pass2").val();

        var storedName = localStorage.getItem("n1");
        var storedPass = localStorage.getItem("p1");

        if (enteredName == storedName && enteredPass == storedPass) {
            sessionStorage.setItem("active_user", storedName);
            window.open("user.html", "_self");

        } else {
            alert("Username and Password do not match!");
        }
        return false;

    });
    $("#on-log").click(function() {
        alert();
        window.open("login.html", "_self");
    })
    $("#on-sign").click(function() {
        window.open("index.html", "_self");

    })

});