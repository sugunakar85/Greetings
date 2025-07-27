document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".accordion-toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const content = toggle.nextElementSibling;
      const isOpen = toggle.classList.contains("active");

      // Close all open sections
      document.querySelectorAll(".accordion-toggle.active").forEach(activeToggle => {
        activeToggle.classList.remove("active");
        const activeContent = activeToggle.nextElementSibling;
        activeContent.style.maxHeight = null;
        activeContent.classList.remove("open");
      });

      // Open current one
      if (!isOpen) {
        toggle.classList.add("active");
        content.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});


