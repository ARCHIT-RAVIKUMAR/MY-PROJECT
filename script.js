
const logo = document.getElementById("logo");
const content = document.querySelector(".content");

setTimeout(() => {
  logo.style.opacity = "0";
  setTimeout(() => {
    logo.textContent = "Archit Ravikumar";
    logo.style.fontSize = "3.5rem";
    logo.style.opacity = "1";
    setTimeout(() => {
      document.querySelector(".intro").style.display = "none";
      content.classList.remove("hidden");
    }, 1500);
  }, 500);
}, 1500);


const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let el of reveals) {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
