// Custom Scripts
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const footer = document.querySelector(".burger__menu-footer");
  const logoIcon = document.querySelector(".logo-icon");
  const heroSection = document.querySelector(".section1");
  const footerSection = document.querySelector(".section2");

  footer.classList.add("hidden");

  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      footer.classList.remove("hidden");
      logoIcon.classList.add("logo-icon--active");
      heroSection.style.transition = "margin-top 0.3s";
      footerSection.style.transition = "margin-top 0.3s";
      heroSection.style.marginTop = "100vh";
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      footer.classList.add("hidden");
      logoIcon.classList.remove("logo-icon--active");
      heroSection.style.transition = "margin-top 0.3s";
      footerSection.style.transition = "margin-top 0.3s";
      heroSection.style.marginTop = "0";
      footerSection.style.marginTop = "0";
    }
  });

  window.addEventListener("resize", () => {
    if (burger.classList.contains("active-burger")) {
      menu.classList.add("active");
      footer.classList.remove("hidden");
      logoIcon.classList.add("logo-icon--active");
      heroSection.style.transition = "margin-top 0.3s";
      footerSection.style.transition = "margin-top 0.3s";
      heroSection.style.marginTop = "100vh";
      footerSection.style.marginTop = "100vh";
    }
  });
}

burgerMenu();

