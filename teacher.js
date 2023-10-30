"use strict";

// Placeholder data
let courses = [];

document.getElementById('submitCourse').addEventListener('click', function() {
    const courseTitle = document.getElementById('courseTitle').value;
    const courseDescription = document.getElementById('courseDescription').value;
    const coursePassword = document.getElementById('coursePassword').value;

    const newCourse = {
        title: courseTitle,
        description: courseDescription,
        password: coursePassword,
        materials: []  // No materials initially
    };

    courses.push(newCourse);
    alert("Course added successfully!");
    // Close the add course modal
    document.getElementById('addCourseModal').style.display = 'none';
});

document.getElementById('saveCourseChanges').addEventListener('click', function() {
    // Code to save the edited course details
    // For simplicity, let's assume the first course is being edited
    courses[0].title = document.getElementById('editCourseTitle').value;
    courses[0].description = document.getElementById('editCourseDescription').value;

    alert("Course details updated successfully!");
    // Close the edit course modal
    document.getElementById('editCourseModal').style.display = 'none';
});

// Placeholder function to render students' progress. In a real-world scenario, this would pull data from a server.
function renderStudentsProgress() {
    // Mock student data
    const students = [
        { name: 'John Doe', progress: 75 },
        { name: 'Jane Smith', progress: 90 },
        //... other students
    ];

    const progressList = document.getElementById('studentsProgressList');
    students.forEach(student => {
        const studentElem = document.createElement('div');
        studentElem.innerHTML = `${student.name}: ${student.progress}% completed.`;
        progressList.appendChild(studentElem);
    });
}

renderStudentsProgress();

// Adding materials to a course (for simplicity, always adding to the first course)
document.getElementById('addMaterialBtn').addEventListener('click', function() {
    const materialName = document.getElementById('materialName').value;
    const materialLink = document.getElementById('materialLink').value;

    const newMaterial = {
        name: materialName,
        link: materialLink
    };

    courses[0].materials.push(newMaterial);
    alert("Material added successfully!");
    displayCourseMaterials();
});

function displayCourseMaterials() {
    const materialsList = document.getElementById('existingMaterials');
    materialsList.innerHTML = "";  // Clear the list first

    courses[0].materials.forEach((material, index) => {
        const materialElem = document.createElement('div');
        materialElem.innerHTML = `
            <a href="${material.link}" target="_blank">${material.name}</a>
            <button onclick="editMaterial(${index})">Edit</button>
            <button onclick="deleteMaterial(${index})">Delete</button>
        `;
        materialsList.appendChild(materialElem);
    });
}

function editMaterial(index) {
    const material = courses[0].materials[index];
    const newName = prompt("Enter the new name for the material:", material.name);
    const newLink = prompt("Enter the new link for the material:", material.link);
    if (newName) material.name = newName;
    if (newLink) material.link = newLink;
    displayCourseMaterials();
}

function deleteMaterial(index) {
    courses[0].materials.splice(index, 1);
    displayCourseMaterials();
}

document.getElementById('deleteCourse').addEventListener('click', function() {
    // Here, for simplicity, we're deleting the first course.
    courses.shift();
    alert("Course deleted successfully!");
});

// Placeholder data for student messages
let studentMessages = [
    { student: 'John Doe', message: 'I have a doubt in Chapter 2.' },
    // ... other messages
];

// Function to display student messages
function displayStudentMessages() {
    const messagesList = document.getElementById('messagesList');
    messagesList.innerHTML = "";  // Clear the list first

    studentMessages.forEach(msg => {
        const messageElem = document.createElement('div');
        messageElem.innerHTML = `<strong>${msg.student}</strong>: ${msg.message}`;
        messagesList.appendChild(messageElem);
    });
}

document.getElementById('sendResponseBtn').addEventListener('click', function() {
    const response = document.getElementById('teacherResponse').value;
    if (response) {
        alert("Response sent to student!");
        // In a real-world scenario, the response would be sent to a backend server to notify the student
        document.getElementById('teacherResponse').value = "";  // Clear the textarea
    } else {
        alert("Please write a response first.");
    }
});

displayStudentMessages();

function updateCourseDropdown() {
    const dropdown = document.getElementById('selectedCourse');
    dropdown.innerHTML = "";
    courses.forEach((course, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = course.title;
        dropdown.appendChild(option);
    });
}

function displayCourses() {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = "";
    courses.forEach(course => {
        const courseElem = document.createElement('div');
        courseElem.textContent = course.title;
        courseList.appendChild(courseElem);
    });
}
document.querySelector('.container li:nth-child(1) a').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent the default action (navigation)
    document.getElementById('addCourseModal').style.display = 'block';
});

document.querySelector('.container li:nth-child(2) a').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('editCourseModal').style.display = 'block';
});

document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';  // Close the modal
    });
});

