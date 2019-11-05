// Reference to the creative's various properties and elements.
var creative = {};

/**
 * Called on the window load event.
 */
function preInit() {
  setupDom();

  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
  }
}

/**
 * Set up references to DOM elements.
 */
function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.getElementById("main-container");
  creative.dom.exit = document.getElementById("exit");
  creative.dom.url =
    "https://www.peugeot.co.uk/showroom/new-208/e-208/?&gclid=EAIaIQobChMIsLTDkbTT5QIVi7TtCh3SEw_PEAAYASAAEgLG5fD_BwE&gclsrc=aw.ds";
}

/**
 * The Enabler is now initialized and any extra modules have been loaded.
 */
function init() {
  addListeners();
  // Polite loading
  if (Enabler.isVisible()) {
    show();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
  }
}

/**
 * Add appropriate listeners after the creative's DOM has been set up.
 */
function addListeners() {
  creative.dom.exit.addEventListener("click", exitClickHandler);
}

/**
 *  Shows the ad.
 */
function show() {
  creative.dom.exit.style.display = "block";
}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------

function exitClickHandler() {
  Enabler.exit("BackgroundExit", creative.dom.url);
}

/**
 *  Main onload handler
 */
window.addEventListener("load", preInit);
