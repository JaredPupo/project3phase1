"use strict";

// Checks if you are logged in 
const isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {
    //If you enter this page while not being logged in, it will send you to the login
    window.location.href = "tlogin.html";
}

// Logout button event handler
document.getElementById("logoutButton").addEventListener("click", function () {
    // Flag turns off and it sends you to the login page
    localStorage.removeItem("isLoggedIn");
    window.location.href = "tlogin.html";
});
