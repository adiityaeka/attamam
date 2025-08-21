  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  }

  document.addEventListener("click", function(event) {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.querySelector(".hamburger");

    const clickedInsideNav = navLinks.contains(event.target);
    const clickedHamburger = hamburger.contains(event.target);

    if (!clickedInsideNav && !clickedHamburger) {
      navLinks.classList.remove("active");
    }
  });