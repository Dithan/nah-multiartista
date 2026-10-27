document.addEventListener("pageLoaded", () => {
  const header = document.querySelector("header");

  const darkSections = document.querySelectorAll('[data-header-theme="dark"]');

  if (!header || !darkSections.length) return;

  function updateHeaderTheme() {
    const headerBottom = header.getBoundingClientRect().bottom;

    const sectionBehindHeader = [...darkSections].some((section) => {
      const rect = section.getBoundingClientRect();

      return rect.top <= headerBottom && rect.bottom > 0;
    });

    header.classList.toggle("is-dark", sectionBehindHeader);
  }

  window.addEventListener("scroll", updateHeaderTheme, {
    passive: true,
  });

  window.addEventListener("resize", updateHeaderTheme);

  updateHeaderTheme();
});
