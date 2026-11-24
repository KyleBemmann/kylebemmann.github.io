/**
 * HTML Layout Injector
 * Dynamically injects the persistent theme switcher, scroll-to-top button,
 * and top navigation bar into the page layout.
 */

(function () {
  function headerHTML() {
    return `
      <!-- PERSISTENT THEME SWITCHER -->
      <div class="theme-switcher-wrapper" id="themeSwitcherWrapper">
        <button id="theme-switch-btn" type="button" aria-label="Toggle Color Theme Selector">
          <!-- Palette / Theme Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm-5.5 11c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13zm3-4C8.67 9 8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zm3 4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
        </button>

        <!-- Dropdown Styled like Navigation Card Menu -->
        <ul class="theme-dropdown" id="themeDropdown"> 
          <li>
            <button type="button" data-theme="red" data-color="#85182A" data-mode="light">
              <span class="color-dot" style="background: #85182A;"></span> Red
            </button>
          </li>
          <li>
            <button type="button" data-theme="orange" data-color="#BB4D00" data-mode="light">
              <span class="color-dot" style="background: #BB4D00;"></span> Orange 
            </button>
          </li>
          <li>
            <button type="button" data-theme="yellow" data-color="#C9A227" data-mode="light">
              <span class="color-dot" style="background: #C9A227;"></span> Yellow
            </button>
          </li>
          <li>
            <button type="button" data-theme="green" data-color="#3A5A40" data-mode="light">
              <span class="color-dot" style="background: #3A5A40;"></span> Green
            </button>
          </li>
          <li>
            <button type="button" data-theme="teal" data-color="#006064" data-mode="light">
              <span class="color-dot" style="background: #006064;"></span> Teal
            </button>
          </li>
          <li>
            <button type="button" data-theme="blue" data-color="#1B4965" data-mode="light">
              <span class="color-dot" style="background: #1B4965;"></span> Blue
            </button>
          </li>
          <li>
            <button type="button" data-theme="indigo" data-color="#414288" data-mode="light">
              <span class="color-dot" style="background: #414288;"></span> Indigo
            </button>
          </li>
          <li>
            <button type="button" data-theme="purple" data-color="#532B88" data-mode="light">
              <span class="color-dot" style="background: #532B88;"></span> Purple
            </button>
          </li> 
          <li>
            <button type="button" data-theme="pink" data-color="#880E4F" data-mode="light">
              <span class="color-dot" style="background: #880E4F;"></span> Pink
            </button>
          </li>
          <li>
            <button type="button" data-theme="brown" data-color="#7F5539" data-mode="light">
              <span class="color-dot" style="background: #7F5539;"></span> Brown
            </button>
          </li>
          <li>
            <button type="button" data-theme="gray" data-color="#2D3436" data-mode="light">
              <span class="color-dot" style="background: #2D3436;"></span> Gray
            </button>
          </li>
          <li>
            <button type="button" data-theme="dark" data-color="#121212" data-mode="dark">
              <span class="color-dot" style="background: #121212;"></span> Dark Mode
            </button>
          </li>
        </ul>
      </div>

      <!-- SCROLL TO TOP BUTTON --> 
      <button id="scroll-top-btn" type="button" onclick="topFunction()" style="font-size:24px" aria-label="Scroll to top">
        <i class="fa fa-arrow-up"></i>
      </button> 
        
      <!-- NAVIGATION BAR -->
      <div class="navigation">
        <div class="nav-container">
          <nav>
            <div class="nav-mobile">
              <a id="nav-toggle" href="#!" aria-label="Toggle navigation"><span></span></a>
            </div>
            <ul class="nav-list">
              <li>
                <a href="#!">About Your Teacher</a>
                <ul class="nav-dropdown">
                  <li><a href="/index.html">The Abrahamic God</a></li>
                  <li><a href="/pages/pov.html">My Point of View.html</a></li>
                  <li><a href="/pages/life.html">A Day In My Life</a></li>
                  <li><a href="/pages/challenge.html">Challenge Accepted</a></li>
                  <li><a href="/pages/parents.html">Find My Birth Parents</a></li>
                  <li><a href="/pages/criminal.html">I'm A Criminal Yo</a></li>
                  <li><a href="/pages/cook.html">Jesse We Need To Cook</a></li>
                  <li><a href="/pages/siblings.html">Let Both Grow Together</a></li>
                </ul>
              </li>
              <li>
                <a href="#!">My Spirituality</a>
                <ul class="nav-dropdown">
                  <li><a href="/pages/theosophy.html">The Theosophical Society</a></li>
                  <li><a href="/pages/philosophy.html">Ancient Philosophy</a></li>
                  <li><a href="/pages/east.html">Eastern Religions</a></li>
                  <li><a href="/pages/west.html">Western Esotericism</a></li>
                  <li><a href="/pages/school.html">Art School</a></li>
                  <li><a href="/pages/sex.html">Sacred Sexuality</a></li>
                  <li><a href="/pages/woman.html">A Typical Spiritual Woman</a></li>
                  <li><a href="/pages/kundalini.html">Kundalini Yoga</a></li>
                </ul>
              </li>
              <li>
                <a href="#!">Jewish Mysticism</a>
                <ul class="nav-dropdown">
                  <li><a href="/pages/kabbalah.html">The Kabbalistic Tree of Life</a></li>
                  <li><a href="/pages/fool.html">The Fool's Journey</a></li>
                  <li><a href="/pages/alphabet.html">The Hebrew Alphabet</a></li>
                  <li><a href="/pages/astrology.html">Astrology</a></li>
                  <li><a href="/pages/numerology.html">Numerology</a></li>
                  <li><a href="/pages/secret.html">Secret Societies</a></li>
                  <li><a href="/pages/temple.html">The Third Temple</a></li>
                  <li><a href="/pages/antichrist.html">The Coming False Messiah</a></li>
                </ul>
              </li>
              <li>
                <a href="#!">I Need A Hero</a>
                <ul class="nav-dropdown">
                  <li><a href="/pages/kingdom.html">Announcing The Kingdom</a></li>
                  <li><a href="/pages/nar.html">New Apostolic Reformation</a></li>
                  <li><a href="/pages/hermeticism.html">I'm Just A Messenger</a></li>
                  <li><a href="/pages/93.html">Flight In Winter and Sabbath</a></li>
                  <li><a href="/pages/transhumanism.html">Transhumanism</a></li>
                  <li><a href="/pages/gnosticism.html">The Serpent's Deception</a></li>
                  <li><a href="/pages/parables.html">I Speak In Parables</a></li>
                  <li><a href="/pages/revelation.html">All Will Be Revealed</a></li>
                </ul>
              </li>
              <li>
                <a href="#!">Christianity</a>
                <ul class="nav-dropdown">
                  <li><a href="/pages/god.html">God The Father</a></li>
                  <li><a href="/pages/ask.html">Ask Seek and Knock</a></li>
                  <li><a href="/pages/two-become-one.html">My Quest for Knowledge</a></li>
                  <li><a href="/pages/sabbath.html">The Sabbath</a></li>
                  <li><a href="/pages/holy.html">Biblical Holy Days</a></li>
                  <li><a href="/pages/holiday.html">Worldly Holidays</a></li>
                  <li><a href="/pages/catholic.html">Roman Catholicism</a></li>
                  <li><a href="/pages/wedding.html">The Marriage of the Lamb</a></li>
                </ul>
              </li>
              <li>
                <a href="#!">Mythology</a>
                <ul class="nav-dropdown">
                  <li><a href="/pages/family.html">My Church Family</a></li>
                  <li><a href="/pages/arthur.html">Arthurian Lore</a></li>
                  <li><a href="/pages/pagan.html">Paganism and Witchcraft</a></li>
                  <li><a href="/pages/christmas.html">The Christmas Baby</a></li>
                  <li><a href="/pages/sound-doctrine.html">Defending My Sanity</a></li>
                  <li><a href="/pages/ascended-masters.html">The Ascended Masters</a></li>
                  <li><a href="/pages/hero.html">The Hero's Journey</a></li>
                  <li><a href="/pages/stan.html">I Made This For You</a></li>
                </ul>
              </li>
              <li>
                <a href="#!">Twins</a>
                <ul class="nav-dropdown">
                  <li><a href="/pages/thomas.html">Didymus Judas Thomas</a></li>
                  <li><a href="/pages/twin-1.html">Twin 1</a></li>
                  <li><a href="/pages/twin-2.html">Twin 2</a></li>
                  <li><a href="/pages/betrayal.html">I've Been Betrayed</a></li>
                  <li><a href="/pages/orphan.html">The Orphan and Her Parents</a></li>
                  <li><a href="/pages/satire.html">Satire / Mocking Christianity</a></li>
                  <li><a href="/pages/rastafari.html">I'm Not Schizophrenic</a></li>
                  <li><a href="/pages/upsidedown.html">Everything Is Upside Down</a></li>
                </ul>
              </li>
              <li>
                <a href="#!">Alchemy</a>
                <ul class="nav-dropdown">
                  <li><a href="/pages/alchemy.html">Alchemical Symbols</a></li>
                  <li><a href="/pages/lead-gold.html">Turning Lead Into Gold</a></li>
                  <li><a href="/pages/fire-ice.html">A Collision of Fire and Ice</a></li>
                  <li><a href="/pages/stone.html">The Philosopher's Stone</a></li>
                  <li><a href="/pages/cup.html">The Elixir of Life / Holy Grail</a></li>
                  <li><a href="/pages/sword.html">The Sword in the Stone</a></li>
                  <li><a href="/pages/watchtower.html">The Destruction of Reality</a></li>
                  <li><a href="/pages/ether.html">They Came From The Ether</a></li>
                </ul>
              </li>
              <li>
                <a href="#!">It's A Theory</a>
                <ul class="nav-dropdown">
                  <li><a href="/pages/dog.html">God Backwards</a></li>
                  <li><a href="/pages/exposed.html">Exposing The Occult</a></li>
                  <li><a href="/pages/web.html">The Web of Lies</a></li>
                  <li><a href="/pages/virgin.html">A Virgin Sacrifice</a></li>
                  <li><a href="/pages/moonchild.html">Stay Wild Moon Child</a></li>
                  <li><a href="/pages/new-age.html">The Birth of a New Age</a></li>
                  <li><a href="/pages/persecution.html">Christian Persecution</a></li>
                  <li><a href="/pages/eventually.html">Eventually Jesus Will Return</a></li>
                </ul>
              </li>
              <li>
                <a href="/pages/citation.html">Citation</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    `;
  }

  function footerHTML() {
    return "";
  }

  function loadLayout() {
    const markup = headerHTML();
    const injectEl = document.querySelector("inject-html");

    if (injectEl) {
      injectEl.innerHTML = markup;
    } else {
      const mainEl = document.querySelector("main");
      if (mainEl) {
        mainEl.insertAdjacentHTML("beforebegin", markup);
      } else {
        document.body.insertAdjacentHTML("afterbegin", markup);
      }
    }

    // Notify listeners that layout has been injected into the DOM
    document.dispatchEvent(new CustomEvent("layout:injected"));

    if (typeof window.initSiteComponents === "function") {
      window.initSiteComponents();
    }
  }

  // Expose layout helpers globally
  window.loadLayoutByPetraPixel = loadLayout;
  window.headerHTML = headerHTML;
  window.footerHTML = footerHTML;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadLayout);
  } else {
    loadLayout();
  }
})();
