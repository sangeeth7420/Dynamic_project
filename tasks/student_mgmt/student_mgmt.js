let students = [];

function insertStudent() {
    let student = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        course: document.getElementById("course").value,
        major: document.getElementById("major").value
    };

    students.push(student);
    clearInputs();
    searchStudent(); 
}

function showAllStudents() {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    if (students.length === 0) {
        outputDiv.innerHTML = "No student information available.";
        return;
    }

    students.forEach((student, index) => {
        outputDiv.innerHTML += `<p>${index + 1}. ${student.name}, Age: ${student.age}, ${student.course}, ${student.major}</p>`;
    });
}

function searchStudent() {
    let searchValue = document.getElementById("searchInput").value.toLowerCase();
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    if (!searchValue) {
        showAllStudents(); 
        return;
    }

    let filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchValue) ||
        student.major.toLowerCase().includes(searchValue)
    );

    if (filteredStudents.length === 0) {
        outputDiv.innerHTML = "No matching students found.";
        return;
    }

    filteredStudents.forEach((student, index) => {
        outputDiv.innerHTML += `<p>${index + 1}. ${student.name}, Age: ${student.age}, ${student.course}, ${student.major}</p>`;
    });
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
    document.getElementById("major").value = "";
}

function clearDisplay() {
    document.getElementById("output").innerHTML = "";
}