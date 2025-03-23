let users = [];

function saveInfo() {
    let fullName = document.getElementById("fullName").value;
    let location = document.getElementById("location").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    if (fullName && email && course) {
        users.push({ fullName, location, email, course });
        alert("Information Saved!");
        document.getElementById("fullName").value = "";
        document.getElementById("location").value = "";
        document.getElementById("email").value = "";
        document.getElementById("course").value = "";
    } else {
        alert("Please fill all fields before saving.");
    }
}

function displayInfo() {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h3>All Entries:</h3>";

    if (users.length === 0) {
        outputDiv.innerHTML += "<p>No information available.</p>";
        return;
    }

    users.forEach((user, index) => {
        outputDiv.innerHTML += `
            <p><strong>Entry ${index + 1}</strong></p>
            <p>Full Name: ${user.fullName}</p>
            <p>location: ${user.location}</p>
            <p>Email: ${user.email}</p>
            <p>Course: ${user.course}</p>
            <hr>
        `;
    });
}