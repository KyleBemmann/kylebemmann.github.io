document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

  // Add any custom JavaScript code here...
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
  
<!-- PERSISTENT THEME SWITCHER -->
    <div class="theme-switcher-wrapper" id="themeSwitcherWrapper">
      <button id="theme-switch-btn" aria-label="Toggle Color Theme Selector">
        <!-- Palette / Theme Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm-5.5 11c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13zm3-4C8.67 9 8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zm3 4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      </button>

      <!-- Dropdown Styled like Navigation Card Menu -->
      <ul class="theme-dropdown" id="themeDropdown"> 
        <li>
          <button data-theme="forest" data-color="#6A040F" data-mode="light">
            <span class="color-dot" style="background: #6A040F;"></span> Cherry Crush
          </button>
        </li>
        <li>
          <button data-theme="burgundy" data-color="#CA5310" data-mode="light">
            <span class="color-dot" style="background: #CA5310;"></span> Spicy Delight
          </button>
        </li>
        <li>
          <button data-theme="burgundy" data-color="#B69121" data-mode="light">
            <span class="color-dot" style="background: #B69121;"></span> Golden Harvest
          </button>
        </li>
        <li>
          <button data-theme="burgundy" data-color="#31572C" data-mode="light">
            <span class="color-dot" style="background: #31572C;"></span> Mossy Meadow 
          </button>
        </li>
        <li>
          <button data-theme="forest" data-color="#254840" data-mode="light">
            <span class="color-dot" style="background: #254840;"></span> Deep Forest
          </button>
        </li>
        <li>
          <button data-theme="burgundy" data-color="#19535F" data-mode="light">
            <span class="color-dot" style="background: #19535F;"></span> Minty Fresh
          </button>
        </li>
        <li>
          <button data-theme="ocean" data-color="#1e3a5f" data-mode="light">
            <span class="color-dot" style="background: #1e3a5f;"></span> Ocean Deep
          </button>
        </li>
        <li>
          <button data-theme="burgundy" data-color="#4A0A77" data-mode="light">
            <span class="color-dot" style="background: #4A0A77;"></span> Purple Haze
          </button>
        </li> 
        <li>
          <button data-theme="burgundy" data-color="#4a1525" data-mode="light">
            <span class="color-dot" style="background: #4a1525;"></span> Royal Burgundy
          </button>
        </li>
        <li>
          <button data-theme="burgundy" data-color="#AA1155" data-mode="light">
            <span class="color-dot" style="background: #AA1155;"></span> Pink Panther
          </button>
        </li>
        <li>
          <button data-theme="burgundy" data-color="#532C1E" data-mode="light">
            <span class="color-dot" style="background: #532C1E;"></span> Cozy Cafe
          </button>
        </li>
        <li>
          <button data-theme="slate" data-color="#343A40" data-mode="light">
            <span class="color-dot" style="background: #343A40;"></span> Modern Slate
          </button>
        </li>
        <li>
          <button data-theme="dark" data-color="#121212" data-mode="dark">
            <span class="color-dot" style="background: #121212;"></span> Dark Mode
          </button>
        </li>
      </ul>
    </div>
 
    <!-- SCROLL TO TOP BUTTON --> 
    <div class="background-fix"></div> 
    <button id="scroll-top-btn" onclick="topFunction()" style="font-size:24px" aria-label="Scroll to top">
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
              <a href="#!">About Me</a>
              <ul class="nav-dropdown">
                <li><a href="/">The Abrahamic God</a></li>
                <li><a href="/pages/pov">My Point of View</a></li>
                <li><a href="/pages/life">A Day In My Life</a></li>
                <li><a href="/pages/challenge">Challenge Accepted</a></li>
                <li><a href="/pages/parents">Find My Birth Parents</a></li>
                <li><a href="/pages/criminal">I'm A Criminal Yo</a></li>
                <li><a href="/pages/cook">Jesse We Need To Cook</a></li>
                <li><a href="/pages/siblings">Let Both Grow Together</a></li>
              </ul>
            </li>
            <li>
              <a href="#!">My Spirituality</a>
              <ul class="nav-dropdown">
                <li><a href="/pages/theosophy">The Theosophical Society</a></li>
                <li><a href="/pages/philosophy">Ancient Philosophy</a></li>
                <li><a href="/pages/east">Eastern Religions</a></li>
                <li><a href="/pages/west">Western Esotericism</a></li>
                <li><a href="/pages/school">Art School</a></li>
                <li><a href="/pages/sex">Sacred Sexuality</a></li>
                <li><a href="/pages/woman">A Typical Spiritual Woman</a></li>
                <li><a href="/pages/kundalini">Kundalini Yoga</a></li>
              </ul>
            </li>
            <li>
              <a href="#!">Jewish Mysticism</a>
              <ul class="nav-dropdown">
                <li><a href="/pages/kabbalah">The Kabbalistic Tree of Life</a></li>
                <li><a href="/pages/fool">The Fool's Journey</a></li>
                <li><a href="/pages/alphabet">The Hebrew Alphabet</a></li>
                <li><a href="/pages/astrology">Astrology</a></li>
                <li><a href="/pages/numerology">Numerology</a></li>
                <li><a href="/pages/secret">Secret Societies</a></li>
                <li><a href="/pages/temple">The Third Temple</a></li>
                <li><a href="/pages/antichrist">The Coming False Messiah</a></li>
              </ul>
            </li>
            <li>
              <a href="#!">I Need A Hero</a>
              <ul class="nav-dropdown">
                <li><a href="/pages/kingdom">Announcing The Kingdom</a></li>
                <li><a href="/pages/nar">New Apostolic Reformation</a></li>
                <li><a href="/pages/hermeticism">I'm Just A Messenger</a></li>
                <li><a href="/pages/93">Flight In Winter and Sabbath</a></li>
                <li><a href="/pages/transhumanism">Transhumanism</a></li>
                <li><a href="/pages/gnosticism">The Serpent's Deception</a></li>
                <li><a href="/pages/parables">I Speak In Parables</a></li>
                <li><a href="/pages/revelation">All Will Be Revealed</a></li>
              </ul>
            </li>
            <li>
              <a href="#!">Christianity</a>
              <ul class="nav-dropdown">
                <li><a href="/pages/god">God The Father</a></li>
                <li><a href="/pages/ask">Ask Seek and Knock</a></li>
                <li><a href="/pages/two-become-one">My Quest for Knowledge</a></li>
                <li><a href="/pages/sabbath">The Sabbath</a></li>
                <li><a href="/pages/holy">Biblical Holy Days</a></li>
                <li><a href="/pages/holiday">Worldly Holidays</a></li>
                <li><a href="/pages/catholic">Roman Catholicism</a></li>
                <li><a href="/pages/wedding">The Marriage of the Lamb</a></li>
              </ul>
            </li>
            <li>
              <a href="#!">Mythology</a>
              <ul class="nav-dropdown">
                <li><a href="/pages/family">My Church Family</a></li>
                <li><a href="/pages/arthur">Arthurian Lore</a></li>
                <li><a href="/pages/pagan">Paganism and Witchcraft</a></li>
                <li><a href="/pages/christmas">The Christmas Baby</a></li>
                <li><a href="/pages/sound-doctrine">Defending My Sanity</a></li>
                <li><a href="/pages/ascended-masters">The Ascended Masters</a></li>
                <li><a href="/pages/hero">The Hero's Journey</a></li>
                <li><a href="/pages/stan">I Made This For You</a></li>
              </ul>
            </li>
            <li>
              <a href="#!">Twins</a>
              <ul class="nav-dropdown">
                <li><a href="/pages/thomas">Didymus Judas Thomas</a></li>
                <li><a href="/pages/twin-1">Twin 1</a></li>
                <li><a href="/pages/twin-2">Twin 2</a></li>
                <li><a href="/pages/betrayal">I've Been Betrayed</a></li>
                <li><a href="/pages/orphan">The Orphan and Her Parents</a></li>
                <li><a href="/pages/satire">Satire / Mocking Christianity</a></li>
                <li><a href="/pages/rastafari">I'm Not Schizophrenic</a></li>
                <li><a href="/pages/upsidedown">Everything Is Upside Down</a></li>
              </ul>
            </li>
            <li>
              <a href="#!">Alchemy</a>
              <ul class="nav-dropdown">
                <li><a href="/pages/alchemy">Alchemical Symbols</a></li>
                <li><a href="/pages/lead-gold">Turning Lead Into Gold</a></li>
                <li><a href="/pages/fire-ice">A Collision of Fire and Ice</a></li>
                <li><a href="/pages/stone">The Philosopher's Stone</a></li>
                <li><a href="/pages/cup">The Elixir of Life / Holy Grail</a></li>
                <li><a href="/pages/sword">The Sword in the Stone</a></li>
                <li><a href="/pages/watchtower">The Destruction of Reality</a></li>
                <li><a href="/pages/ether">They Came From The Ether</a></li>
              </ul>
            </li>
            <li>
              <a href="#!">It's A Theory</a>
              <ul class="nav-dropdown">
                <li><a href="/pages/dog">God Backwards</a></li>
                <li><a href="/pages/exposed">Exposing The Occult</a></li>
                <li><a href="/pages/web">The Web of Lies</a></li>
                <li><a href="/pages/virgin">A Virgin Sacrifice</a></li>
                <li><a href="/pages/moonchild">Stay Wild Moon Child</a></li>
                <li><a href="/pages/new-age">The Birth of a New Age</a></li>
                <li><a href="/pages/persecution">Christian Persecution</a></li>
                <li><a href="/pages/eventually">Eventually Jesus Will Return</a></li>
              </ul>
            </li>
            <li>
              <a href="/pages/citation">Citation</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

	  
	
      `;
}



/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

	/* Homepage */
    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      /* Other pages */
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation: */
		
        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
          	el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}
