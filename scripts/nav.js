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
  
<!-- =============================================== -->
<!-- NAVIGATION -->
<!-- =============================================== -->

<nav>
<div class="rectangle"></div>
  <div class="rectangle2"></div>
    <div class="tab-l"></div>
    <div class="tab-r"></div>
<section class="navigation">
  <div class="nav-container">
    <div class="brand">
      <a href="#!">My Art</a>
    </div>
      
<nav>
  <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
    <ul class="nav-list">
      <li>
        <a href="#!">My Spirituality</a>
          <ul class="nav-dropdown">
            <li>
              <a href="/pages/theosophy">The Theosophical Society</a>
            </li>
            <li>
              <a href="/">About Your Teacher</a>
            </li>
            <li>
              <a href="/pages/pov">My Point of View</a>
            </li>
            <li>
              <a href="/pages/life">A Day In My Life</a>
            </li>
            <li>
              <a href="/pages/school">Art School</a>
            </li>
            <li>
              <a href="/pages/sex">Sacred Sexuality</a>
            </li>
            <li>
              <a href="/pages/spirituality">A Typical Spiritual Woman</a>
            </li>
            <li>
              <a href="/pages/kundalini">Kundalini Yoga</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#!">Jewish Mysticism</a>
          <ul class="nav-dropdown">
            <li>
              <a href="/pages/kabbalah">The Kabbalistic Tree of Life</a>
            </li>
            <li>
              <a href="/pages/fool">The Fool's Journey</a>
            </li>
            <li>
              <a href="/pages/alphabet">The Hebrew Alphabet</a>
            </li>
            <li>
              <a href="/pages/zodiac">Astrology</a>
            </li>
            <li>
              <a href="/pages/numbers">Numerology</a>
            </li>
            <li>
              <a href="/pages/secret">Satanic Ritual Abuse</a>
            </li>
            <li>
              <a href="/pages/temple">The Third Temple</a>
            </li>
            <li>
              <a href="/pages/messiah">The Coming False Messiah</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#!">I Need A Hero</a>
            <ul class="nav-dropdown">
              <li>
                <a href="/pages/kingdom">Announcing The Kingdom</a>
              </li>
              <li>
                <a href="/pages/dominionism">New Apostolic Reformation</a>
              </li>
              <li>
                <a href="/pages/doctor">I'm Just A Messenger</a>
              </li>
              <li>
                <a href="/pages/93">Flight In Winter and Sabbath</a>
              </li>
              <li>
                <a href="/pages/transhumanism">Transhumanism</a>
              </li>
              <li>
                <a href="/pages/sacrifice">The Serpent's Deception</a>
              </li>
              <li>
                <a href="/pages/parables">I Speak In Parables</a>
              </li>
              <li>
                <a href="/pages/revelation">All Will Be Revealed</a>
              </li>
            </ul>
        </li>
        <li>
          <a href="#!">Christianity</a>
            <ul class="nav-dropdown">
              <li>
                <a href="/pages/god">God The Father</a>
              </li>
              <li>
                <a href="/pages/manhood">Ask Seek and Knock</a>
              </li>
              <li>
                <a href="/pages/choice">My Christian Journey</a>
              </li>
              <li>
                <a href="/pages/sabbath">The Sabbath</a>
              </li>
              <li>
                <a href="/pages/holy-days">Biblical Holy Days</a>
              </li>
              <li>
                <a href="/pages/holidays">Worldly Holidays</a>
              </li>
              <li>
                <a href="/pages/catholic">Roman Catholicism</a>
              </li>
              <li>
                <a href="/pages/urn">Gnosticism Explained</a>
              </li>
            </ul>
        </li> 
        <li>
          <a href="#!">Mythology</a>
            <ul class="nav-dropdown">
              <li>
                <a href="/pages/family">My Church Family</a>
              </li>
              <li>
                <a href="/pages/arthur">Arthurian Lore</a>
              </li>
              <li>
                <a href="/pages/pagan">Paganism and Witchcraft</a>
              </li>
              <li>
                <a href="/pages/christmas">The Christmas Baby</a>
              </li>
              <li>
                <a href="/pages/delusion">Defending My Sanity</a>
              </li>
              <li>
                <a href="/pages/believe">The Ascended Masters</a>
              </li>
              <li>
                <a href="/pages/hero">The Hero's Journey</a>
              </li>
              <li>
                <a href="/pages/you">I Made This For You</a>
              </li>
            </ul>
        </li>
        <li>
          <a href="#!">Twins</a>
            <ul class="nav-dropdown">
              <li>
                <a href="/pages/twin">Didymus Judas Thomas</a>
              </li>
              <li>
                <a href="/pages/personal">Brother and Sister</a>
              </li>
              <li>
                <a href="/pages/apollo">Twin 1</a>
              </li>
              <li>
                <a href="/pages/walter-jr">Twin 2</a>
              </li>
              <li>
                <a href="/pages/betrayal">I've Been Betrayed</a>
              </li>
              <li>
                <a href="/pages/satire">Satire / Mocking Christianity</a>
              </li>
              <li>
                <a href="/pages/friend">I'm Not Schizophrenic</a>
              </li>
              <li>
                <a href="/pages/upsidedown">Everything Is Upside Down</a>
              </li>
            </ul>
        </li>
            <li>
          <a href="#!">Alchemy</a>
            <ul class="nav-dropdown">
              <li>
                <a href="/pages/alchemy">Alchemical Symbols</a>
              </li>
              <li>
                <a href="/pages/lead-gold">Turning Lead Into Gold</a>
              </li>
              <li>
                <a href="/pages/fire-ice">A Collision of Fire and Ice</a>
              </li>
              <li>
                <a href="/pages/stone">The Philosopher's Stone</a>
              </li>
              <li>
                <a href="/pages/elixir">The Elixir of Life</a>
              </li>
              <li>
                <a href="/pages/sword">The Sword in the Stone</a>
              </li>
              <li>
                <a href="/pages/watchtower">Collapse of the Watchtower</a>
              </li>
              <li>
                <a href="/pages/ether">They Came From The Ether</a>
              </li>
            </ul>
        </li>
        <li>
          <a href="#!">It's Just A Theory</a>
            <ul class="nav-dropdown">
              <li>
                <a href="/pages/dog">God Backwards</a>
              </li>
              <li>
                <a href="/pages/art">Exposing The Occult</a>
              </li>
              <li>
                <a href="/pages/testing">Questioning Reality</a>
              </li>
              <li>
                <a href="/pages/cinema">The Neverending Story</a>
              </li>
              <li>
                <a href="/pages/moonchild">Stay Wild Moon Child</a>
              </li>
              <li>
                <a href="/pages/new">The Birth of a New Age</a>
              </li>
               <li>
                <a href="/pages/persecution">Christian Persecution</a>
              </li>
              <li>
                <a href="/pages/eventually">Eventually Jesus Will Return</a>
              </li>
          </ul>
      </li>   
    </ul>
</nav>
</div>
</section> 
</nav>


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
