"use strict";

var courses = document.getElementById("courses");
var enrrolledCourses = document.getElementById("enrolledCourses");
var classInfo = document.getElementById("classInfo");
var classEnroll = document.getElementById("classEnroll");
var quizzInfo = document.getElementById("quizzInfo");
var assigInfo = document.getElementById("assigInfo");
var quizzAnswer = document.getElementById("quizzAnswer");

enrrolledCourses.getElementsByClassName("Course1")[0].getElementsByClassName("course")[0].onclick = function () {
    classInfo.style.display = "block";
    enrrolledCourses.style.display = "none";
    courses.style.display = "none";
};

courses.getElementsByClassName("Course1")[0].getElementsByClassName("course")[0].onclick = function () {
    classEnroll.style.display = "block";
    courses.style.display = "none";
    enrrolledCourses.style.display = "none";
};

classInfo.getElementsByClassName("quizz")[0].onclick = function () {
    classInfo.style.display = "none";
    quizzInfo.style.display = "block";

};

classInfo.getElementsByClassName("assig")[0].onclick = function () {
    classInfo.style.display = "none";
    assigInfo.style.display = "block";
};

quizzInfo.getElementsByClassName("quizzButton")[0].addEventListener("click", function () {
    quizzInfo.style.display = "none";
    quizzAnswer.style.display = "block";
});

// boton de moverse hacia atras 

classInfo.getElementsByClassName("prevP")[0].addEventListener("click", function () {
    classInfo.style.display = "none";
    enrrolledCourses.style.display = "block";
    courses.style.display = "block";
});

classEnroll.getElementsByClassName("prevP")[0].addEventListener("click", function () {
    classEnroll.style.display = "none";
    courses.style.display = "block";
    enrrolledCourses.style.display = "block";
});

assigInfo.getElementsByClassName("prevP")[0].addEventListener("click", function () {
    assigInfo.style.display = "none";
    classInfo.style.display = "block";
});

quizzInfo.getElementsByClassName("prevP")[0].addEventListener("click", function () {
    quizzInfo.style.display = "none";
    classInfo.style.display = "block";
});

quizzAnswer.getElementsByClassName("prevP")[0].addEventListener("click", function () {
    quizzAnswer.style.display = "none";
    quizzInfo.style.display = "block";
});