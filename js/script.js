document.addEventListener("DOMContentLoaded", function () {
   const navToggle = document.querySelector(".nav-toggle");
   const navLinks = document.querySelector(".nav-links");
   const themeToggleBtn = document.getElementById("theme-toggle");
   const themeIcon = themeToggleBtn.querySelector("i"); // Get the icon inside the button
   // Check if navToggle exists before adding the event listener
   if (navToggle) {
      navToggle.addEventListener("click", function () {
         navLinks.classList.toggle("active"); // Toggle the 'active' class to show/hide links
      });
   }

   // Theme toggle logic
   themeToggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("light-mode");

      // Update the icon based on the current mode
      if (document.body.classList.contains("light-mode")) {
         themeIcon.classList.remove("fa-moon");
         themeIcon.classList.add("fa-sun"); // Change icon to sun for light mode
         localStorage.setItem("theme", "light");
      } else {
         themeIcon.classList.remove("fa-sun");
         themeIcon.classList.add("fa-moon"); // Change icon to moon for dark mode
         localStorage.setItem("theme", "dark");
      }
   });

   // On page load, check for the saved theme in localStorage
   window.addEventListener("DOMContentLoaded", (event) => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light") {
         document.body.classList.add("light-mode");
         themeIcon.classList.remove("fa-moon");
         themeIcon.classList.add("fa-sun"); // Set the icon to sun if light mode was previously saved
      }
   });
});
