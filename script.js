document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".accordion-toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const content = toggle.nextElementSibling;
      const isOpen = toggle.classList.contains("active");

      // Toggle current one only
      if (!isOpen) {
        toggle.classList.add("active");
        content.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        toggle.classList.remove("active");
        content.classList.remove("open");
        content.style.maxHeight = null;
      }
    });
  });
    document.getElementById("year").textContent = new Date().getFullYear();
  // Close open accordion when Tab key is pressed
  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      const openToggle = document.querySelector(".accordion-toggle.active");
      if (openToggle) {
        const openContent = openToggle.nextElementSibling;
        openToggle.classList.remove("active");
        openContent.classList.remove("open");
        openContent.style.maxHeight = null;
      }
    }
  });
});

