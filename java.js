
  const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav ul');

hamburger.addEventListener('click', () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});

