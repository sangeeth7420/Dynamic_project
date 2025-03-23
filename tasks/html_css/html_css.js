function openPage(page) {
  const iframe = document.getElementById("page-frame");
  const content = document.getElementById("content_div");

  iframe.src = page;
  iframe.style.display = "block";
  content.style.display = "none";
}
