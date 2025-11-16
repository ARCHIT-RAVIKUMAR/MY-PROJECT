const logo = document.getElementById("logo");

setTimeout(() => {
  logo.style.opacity = "0";
  setTimeout(() => {
    logo.textContent = "Archit Ravikumar";
    logo.style.fontSize = "3.5rem";
    logo.style.opacity = "1";
  }, 500);
}, 1500);
