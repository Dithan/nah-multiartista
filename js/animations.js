document.addEventListener("pageLoaded", () => {
  AOS.init({
    duration: 600,
    easing: "ease-out-cubic",
    once: false,
    offset: 100,
  });

  AOS.refreshHard();
});
