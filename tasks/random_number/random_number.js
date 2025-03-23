function generateRandom() {
    let a = Number(document.getElementById('start').value);
    let b = Number(document.getElementById('end').value);
    let output = document.getElementById('output');

    if (isNaN(a) || isNaN(b)) {
        output.textContent = "Please enter valid numbers.";
        output.style.color = "black"; 
        output.style.opacity = "1"; // Ensure it's visible
        return;
    }

    if (a > b) [a, b] = [b, a]; 

    let randomNum = Math.floor(Math.random() * (b - a + 1)) + a;
    let randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

    output.textContent = `Random Number: ${randomNum}`;
    output.style.color = randomColor;
    output.style.opacity = "1"; // Make sure it's visible

    // Vanish after 5s and reappear after another 5s
    setTimeout(() => {
        output.style.opacity = "0"; // Vanish
        setTimeout(() => {
            output.style.opacity = "1"; // Reappear
        }, 5000);
    }, 5000);
}