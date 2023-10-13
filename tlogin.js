"use strict";

    const users = [
        { username: "o", password: "k" },
        //{ username: "", password: "" },
    ];
    document.getElementById("teacherLogin").addEventListener("submit", function (event) {
        event.preventDefault();

        // Gets the username and password from the form
        var enteredUsername = document.getElementById("username").value;
        var enteredPassword = document.getElementById("password").value;
        const user = users.find(u => u.username === enteredUsername && u.password === enteredPassword);
        // This pretends to be like a server and checks if username and password are correct
        if (user) {
            // If correct it turns on the flag
            localStorage.setItem("isLoggedIn", "true");
            // Goes to student page
            window.location.href = "teacher.html";
        } else {
            // Display an error message
            document.getElementById("message").textContent = "Incorrect details. Please try again.";
        }
    });
    

