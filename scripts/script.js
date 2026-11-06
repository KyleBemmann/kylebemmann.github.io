/**
 * Main Application Script
 * Initializes layout and page components cleanly without duplication.
 */

document.addEventListener("DOMContentLoaded", function () {
  if (typeof window.initSiteComponents === "function") {
    window.initSiteComponents();
  }
});
