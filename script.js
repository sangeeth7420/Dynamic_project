document.addEventListener("DOMContentLoaded", () => {
  const sidenav = document.getElementById("sidenav");
  const sidenavItems = document.getElementById("sidenav-items");
  const displayArea = document.getElementById("display-area");
  const topbarTitle = document.getElementById("topbar-title");
  const hamburger = document.getElementById("global-toggle-btn");
  const dynamicStyle = document.getElementById("dynamic-style");

  fetch("nav_items.json")
    .then(res => res.json())
    .then(items => {
      const iconPath = sidenavItems.dataset.iconPath;
      items.forEach(item => {
        const li = document.createElement("li");

        const iconImg = document.createElement("img");
        iconImg.src = iconPath + item.icon;
        iconImg.alt = "icon";
        iconImg.className = "sidenav-icon";

        const labelSpan = document.createElement("span");
        labelSpan.textContent = item.label;

        li.appendChild(iconImg);
        li.appendChild(labelSpan);

        li.dataset.file = item.file;
        li.onclick = () => {
          loadFullTask(item.file, item.label);
          highlightActive(li);
        };

        sidenavItems.appendChild(li);
      });

      loadFullTask(items[0].file, items[0].label);
      highlightActive(sidenavItems.firstChild);
    });

  window.toggleSidenav = () => {
    sidenav.classList.toggle("collapsed");
    hamburger.style.display = sidenav.classList.contains("collapsed") ? "block" : "none";
  };

  function loadFullTask(file, label) {
    const folder = file.replace('.html', '');
    const htmlPath = `tasks/${folder}/${file}`;
    const cssPath = `tasks/${folder}/${folder}.css`;
    const jsPath = `tasks/${folder}/${folder}.js`;

    // Load HTML
    fetch(htmlPath)
      .then(res => res.text())
      .then(html => {
        displayArea.innerHTML = html;
        topbarTitle.textContent = label;

        // Load CSS
        dynamicStyle.innerHTML = '';
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssPath;
        dynamicStyle.appendChild(link);

        // Load JS
        const existingScript = document.getElementById("dynamic-task-script");
        if (existingScript) existingScript.remove();

        const taskScript = document.createElement("script");
        taskScript.src = jsPath;
        taskScript.id = "dynamic-task-script";
        taskScript.defer = true;
        document.body.appendChild(taskScript);
      })
      .catch(err => {
        displayArea.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
      });
  }

  function highlightActive(selected) {
    document.querySelectorAll("#sidenav-items li").forEach(item => item.classList.remove("active"));
    selected.classList.add("active");
  }
});
