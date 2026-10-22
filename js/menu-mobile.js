document.addEventListener("pageLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMobile = document.querySelector(".nav-mobile");

  if (!menuToggle || !navMobile) return;

  const menuLinks = navMobile.querySelectorAll("a");

  function closeMenu() {
    menuToggle.classList.remove("is-active");
    navMobile.classList.remove("is-active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    navMobile.inert = true;
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("is-active");

    navMobile.classList.toggle("is-active", isOpen);

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu",
    );

    navMobile.inert = !isOpen;
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
});
