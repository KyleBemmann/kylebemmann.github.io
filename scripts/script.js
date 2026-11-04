/**
 * Unified Navigation & Theme Switcher Script
 * Initializes active link highlighting, dropdown menus, theme switching, 
 * and smooth scroll functionality for pre-rendered markup.
 */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Initialize active link highlighting for pre-rendered layout
  giveActiveClassToCurrentPage();

  // 2. Initialize dropdown interaction handlers
  initDropdownMenu();

  // 3. Initialize theme switcher interaction handlers
  initThemeSwitcher();
});

/**
 * Calculates page nesting depth relative to domain root
 * @returns {string} Relative path prefix (e.g., "./" or "../")
 */
const nesting = getNesting();

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes === 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}

/**
 * Modern Vanilla JS implementation for menu toggle, dropdowns, and outside-click handlers
 */
function initDropdownMenu() {
  const navDropdownLinks = document.querySelectorAll("nav ul li a:not(:only-child)");

  navDropdownLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const parentLi = this.parentElement;
      const isOpen = parentLi.classList.contains("dropdown-open");

      // Close all other open dropdowns
      document.querySelectorAll("nav ul li").forEach((li) => {
        if (li !== parentLi) {
          li.classList.remove("dropdown-open");
        }
      });

      // Toggle current dropdown: if open close it, if closed open it
      if (isOpen) {
        parentLi.classList.remove("dropdown-open");
      } else {
        parentLi.classList.add("dropdown-open");
      }
    });
  });

  // Close navigation dropdowns when clicking outside the <nav> element
  document.addEventListener("click", function (e) {
    if (!e.target.closest("nav")) {
      document.querySelectorAll("nav ul li").forEach((li) => {
        li.classList.remove("dropdown-open");
      });
    }
  });

  // Mobile Hamburger Toggle
  const navToggle = document.getElementById("nav-toggle");
  if (navToggle) {
    navToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      this.classList.toggle("active");
      const navList = document.querySelector("nav ul.nav-list");
      if (navList) {
        navList.classList.toggle("open");
      }
    });
  }
}

/**
 * Controls theme switcher toggle button and outside click closing
 */
function initThemeSwitcher() {
  const switchBtn = document.getElementById("theme-switch-btn");
  const dropdown = document.getElementById("themeDropdown");

  if (switchBtn && dropdown) {
    switchBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdown.classList.toggle("show");
    });

    // Close theme dropdown when clicking outside the switcher wrapper
    document.addEventListener("click", function (e) {
      if (!e.target.closest("#themeSwitcherWrapper")) {
        dropdown.classList.remove("show");
      }
    });
  }
}

/**
 * Assigns 'active' class to current page navigation links based on URL path
 */
function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  els.forEach((el) => {
    const rawHref = el.getAttribute("href");
    if (!rawHref) return;

    const href = rawHref.replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

    /* Homepage */
    if (href === "/" || href === "/index.html") {
      if (pathname === "/" || pathname === "/index") {
        el.classList.add("active");
      }
    } else {
      /* Other subpages */
      if (href && currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation parent highlighting */
        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          const parentUl = el.closest("ul").closest("ul");
          if (parentUl) {
            parentUl.classList.add("active");
          }
        }
      }
    }
  });
}

/**
 * Smoothly scrolls page back to top
 */
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
