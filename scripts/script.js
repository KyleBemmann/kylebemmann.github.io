/**
 * Combined Application Script
 * Features:
 * - Navigation & Mobile Drawer Controls (jQuery)
 * - Persistent Theme Switcher Logic (Vanilla JS)
 * - Scroll-to-Top Button Control (Vanilla JS)
 */

// ==========================================
// 1. Theme Switcher (Immediate Restoration)
// ==========================================
(function restoreTheme() {
  try {
    const savedColor = localStorage.getItem('selectedThemeColor');
    const savedMode = localStorage.getItem('selectedThemeMode');

    if (savedColor) {
      document.documentElement.style.setProperty('--background-color', savedColor);
    }
    if (savedMode === 'dark') {
      document.body.classList.add('darkmode');
    }
  } catch (err) {
    console.warn('Unable to access localStorage for theme restoration:', err);
  }
})();

// ==========================================
// 2. DOM Ready Interactive Logic
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // -----------------------------
  // A. jQuery Navigation Logic
  // -----------------------------
  if (typeof jQuery !== 'undefined') {
    (function ($) {
      // Handles menu dropdown click, smooth animated toggle, and re-click to close
      $('nav ul li a:not(:only-child)').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const $parentLi = $(this).parent('li');
        const isOpen = $parentLi.hasClass('dropdown-open');

        // Close all other open dropdowns
        $('nav ul li').not($parentLi).removeClass('dropdown-open');

        // Toggle current dropdown: if open, close it; if closed, open it
        if (isOpen) {
          $parentLi.removeClass('dropdown-open');
        } else {
          $parentLi.addClass('dropdown-open');
        }
      });

      // Close dropdown when clicking outside
      $(document).on('click', function (e) {
        if (!$(e.target).closest('nav').length) {
          $('nav ul li').removeClass('dropdown-open');
        }
      });

      // Mobile hamburger menu toggle
      $('#nav-toggle').on('click', function (e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $('nav ul.nav-list').toggleClass('open');
      });
    })(jQuery);
  } else {
    console.warn('jQuery is required for navigation script but was not found.');
  }

  // -----------------------------
  // B. Theme Switcher Controls
  // -----------------------------
  const wrapper = document.getElementById('themeSwitcherWrapper');
  const switchBtn = document.getElementById('theme-switch-btn');
  const dropdownButtons = document.querySelectorAll('#themeDropdown button');

  if (wrapper && switchBtn) {
    // Retrieve saved or fallback theme
    let savedColor = '#254840';
    let savedMode = 'light';
    try {
      savedColor = localStorage.getItem('selectedThemeColor') || savedColor;
      savedMode = localStorage.getItem('selectedThemeMode') || savedMode;
    } catch (err) {
      console.warn('LocalStorage unavailable:', err);
    }

    // Apply initially active option styling
    highlightActiveButton(savedColor);

    // Toggle dropdown menu visibility
    switchBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      wrapper.classList.toggle('open');
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!wrapper.contains(e.target)) {
        wrapper.classList.remove('open');
      }
    });

    // Handle color option selection
    dropdownButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const color = btn.getAttribute('data-color');
        const mode = btn.getAttribute('data-mode');

        applyTheme(color, mode);

        // Save choices to localStorage for persistence across refreshes
        try {
          localStorage.setItem('selectedThemeColor', color);
          localStorage.setItem('selectedThemeMode', mode);
        } catch (err) {
          console.warn('Failed to save theme to localStorage:', err);
        }

        // Close dropdown
        wrapper.classList.remove('open');
      });
    });

    /**
     * Applies the background color variable and toggles dark mode class
     */
    function applyTheme(color, mode) {
      document.documentElement.style.setProperty('--background-color', color);

      if (mode === 'dark') {
        document.body.classList.add('darkmode');
      } else {
        document.body.classList.remove('darkmode');
      }

      highlightActiveButton(color);
    }

    /**
     * Updates button active state in the theme dropdown
     */
    function highlightActiveButton(color) {
      dropdownButtons.forEach((btn) => {
        if (btn.getAttribute('data-color') === color) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }
  }
});

// ==========================================
// 3. Scroll to Top Controls
// ==========================================
window.addEventListener('scroll', () => {
  const scrollBtn = document.getElementById('scroll-top-btn');
  if (!scrollBtn) return;

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

/**
 * Scroll to top helper function (attachable to onclick on top button)
 */
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}