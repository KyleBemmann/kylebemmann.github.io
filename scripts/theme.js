/**
 * Site Theme & Interactive Controls
 * Handles theme persistence, theme switching, dropdown menus,
 * mobile drawer navigation, active link highlighting, and smooth scroll-to-top.
 */

// ==========================================
// 1. Immediate Theme Restoration (Pre-render)
// ==========================================
(function restoreTheme() {
  try {
    const savedColor = localStorage.getItem("selectedThemeColor");
    const savedMode = localStorage.getItem("selectedThemeMode");

    if (savedColor) {
      document.documentElement.style.setProperty("--background-color", savedColor);
    }
    if (savedMode === "dark") {
      document.documentElement.classList.add("darkmode");
      if (document.body) {
        document.body.classList.add("darkmode");
      } else {
        document.addEventListener("DOMContentLoaded", () => {
          document.body.classList.add("darkmode");
        });
      }
    }
  } catch (err) {
    console.warn("Unable to access localStorage for theme restoration:", err);
  }
})();

// ==========================================
// 2. Interactive Components Initializer
// ==========================================
function initSiteComponents() {
  initThemeSwitcher();
  initNavigation();
  initScrollToTop();
  giveActiveClassToCurrentPage();
}

/**
 * Theme switcher button, options dropdown, and persistence
 */
function initThemeSwitcher() {
  const wrapper = document.getElementById("themeSwitcherWrapper");
  const switchBtn = document.getElementById("theme-switch-btn");
  const dropdownButtons = document.querySelectorAll("#themeDropdown button");

  if (!wrapper || !switchBtn || wrapper.dataset.initialized === "true") return;
  wrapper.dataset.initialized = "true";

  let savedColor = "#19535F";
  let savedMode = "light";
  try {
    savedColor = localStorage.getItem("selectedThemeColor") || savedColor;
    savedMode = localStorage.getItem("selectedThemeMode") || savedMode;
  } catch (err) {
    console.warn("LocalStorage unavailable:", err);
  }

  function highlightActiveButton(color) {
    dropdownButtons.forEach((btn) => {
      if (btn.getAttribute("data-color") === color) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  function applyTheme(color, mode) {
    document.documentElement.style.setProperty("--background-color", color);

    if (mode === "dark") {
      document.documentElement.classList.add("darkmode");
      document.body.classList.add("darkmode");
    } else {
      document.documentElement.classList.remove("darkmode");
      document.body.classList.remove("darkmode");
    }

    highlightActiveButton(color);
  }

  highlightActiveButton(savedColor);

  switchBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    wrapper.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
      wrapper.classList.remove("open");
    }
  });

  dropdownButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const color = btn.getAttribute("data-color");
      const mode = btn.getAttribute("data-mode");

      applyTheme(color, mode);

      try {
        localStorage.setItem("selectedThemeColor", color);
        localStorage.setItem("selectedThemeMode", mode);
      } catch (err) {
        console.warn("Failed to save theme to localStorage:", err);
      }

      wrapper.classList.remove("open");
    });
  });
}

/**
 * Dropdown menus and mobile hamburger toggle
 */
function initNavigation() {
  const navDropdownLinks = document.querySelectorAll("nav ul li a:not(:only-child)");
  const navToggle = document.getElementById("nav-toggle");
  const navList = document.querySelector("nav ul.nav-list");

  navDropdownLinks.forEach((link) => {
    if (link.dataset.navBound === "true") return;
    link.dataset.navBound = "true";

    link.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const parentLi = this.parentElement;
      const isOpen = parentLi.classList.contains("dropdown-open");

      document.querySelectorAll("nav ul li").forEach((li) => {
        if (li !== parentLi) {
          li.classList.remove("dropdown-open");
        }
      });

      if (isOpen) {
        parentLi.classList.remove("dropdown-open");
      } else {
        parentLi.classList.add("dropdown-open");
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest("nav")) {
      document.querySelectorAll("nav ul li.dropdown-open").forEach((li) => {
        li.classList.remove("dropdown-open");
      });
    }
  });

  // Mobile drawer toggle
  if (navToggle && navToggle.dataset.navBound !== "true") {
    navToggle.dataset.navBound = "true";
    navToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      this.classList.toggle("active");
      if (navList) {
        navList.classList.toggle("open");
      }
    });
  }
}

/**
 * Smooth scroll-to-top button controls
 */
function initScrollToTop() {
  const scrollBtn = document.getElementById("scroll-top-btn");
  if (!scrollBtn || scrollBtn.dataset.scrollBound === "true") return;
  scrollBtn.dataset.scrollBound = "true";

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200 || document.documentElement.scrollTop > 200) {
      scrollBtn.classList.add("is-visible");
    } else {
      scrollBtn.classList.remove("is-visible");
    }
  });

  scrollBtn.addEventListener("click", topFunction);
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/**
 * Highlights active page and parent category in top navigation
 */
function giveActiveClassToCurrentPage() {
  const currentPath = window.location.pathname
    .replace(/\/public\//, "/")
    .replace(/\.html$/, "")
    .replace(/\/index$/, "")
    .replace(/\/$/, "") || "/";

  const links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    const rawHref = link.getAttribute("href");
    if (!rawHref || rawHref === "#!") return;

    const linkPath = rawHref
      .replace(/\.html$/, "")
      .replace(/\/index$/, "")
      .replace(/\/$/, "") || "/";

    if (linkPath === currentPath) {
      link.classList.add("active");
      const parentDropdown = link.closest(".nav-dropdown");
      if (parentDropdown) {
        const parentLi = parentDropdown.closest("li");
        if (parentLi) {
          parentLi.classList.add("active-parent");
        }
      }
    }
  });
}

// Expose functions globally
window.initSiteComponents = initSiteComponents;
window.topFunction = topFunction;
window.giveActiveClassToCurrentPage = giveActiveClassToCurrentPage;

// Listen for both DOMContentLoaded and the layout:injected custom event
document.addEventListener("DOMContentLoaded", initSiteComponents);
document.addEventListener("layout:injected", initSiteComponents);
