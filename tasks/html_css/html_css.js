// function openTask(folderName) {
//     const iframe = document.getElementById("header_div");
//     const display = document.getElementById("display-area");
  
//     iframe.style.display = "block";
//     display.style.display = "none";
//     iframe.src = `tasks/${folderName}/dashboard.html`;
  
//     // Optionally set title manually
//     document.getElementById("task-frame").textContent = folderName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
//   }

function openPage(page) {
    fetch(page)
    .then(response => response.text())
    .then(data => {
        document.getElementById('content_div').innerHTML = data;
    })
    .catch(error => console.error('Error loading the page:', error));
}
