const colors = ["red", "green", "blue", "orange"];
let colorIndex = 0;

function generateStars() {
    let input = document.getElementById("number").value;
    let output = "";
    
    for (let i = 1; i <= input; i++) {
        output += "* ".repeat(i) + "<br>";
    }

    let demoDiv = document.getElementById("demo");
    demoDiv.innerHTML = output;
    
    // Change color in a cyclic manner
    demoDiv.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}