document.addEventListener("DOMContentLoaded", function () {
    var dropdownToggles = document.querySelectorAll(".custom-dropdown-toggle");
  
    dropdownToggles.forEach(function (toggle) {
      toggle.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default behavior
  
        var parentDropdown = this.parentElement;
        var arrow = this.querySelector(".arrow");
  
        // Toggle only the clicked dropdown
        if (parentDropdown.classList.contains("open")) {
          parentDropdown.classList.remove("open");
        } else {
          closeAllDropdowns();
          parentDropdown.classList.add("open");
        }
      });
    });
  
    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".custom-dropdown")) {
        closeAllDropdowns();
      }
    });
  
    function closeAllDropdowns() {
      document.querySelectorAll(".custom-dropdown.open").forEach(function (dropdown) {
        dropdown.classList.remove("open");
      });
    }
  });
  