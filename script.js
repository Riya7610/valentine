function moveNo() {
  const no = document.getElementById("noBtn");

  const x = Math.random() * 200;
  const y = Math.random() * 50;

  no.style.left = x + "px";
  no.style.top = y + "px";
}

function goYes() {
  window.location.href = "yes.html";
}