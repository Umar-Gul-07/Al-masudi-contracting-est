const OVERLAY_SELECTORS = [
  "#goog-gt-tt",
  ".goog-te-balloon-frame",
  ".goog-te-menu-frame",
  ".goog-te-banner-frame",
  ".goog-te-ftab",
  ".goog-te-ftab-float",
  ".goog-te-spinner-pos",
  "iframe.goog-te-menu-frame",
  "iframe.skiptranslate",
  'iframe[src*="translate.google"]',
  'iframe[src*="translate.googleapis.com"]',
  'div[class*="VIpgJd-"]',
];

let observer = null;

const hideGoogleTranslateOverlays = () => {
  if (typeof document === "undefined") {
    return;
  }

  OVERLAY_SELECTORS.forEach((selector) => {
    document.querySelectorAll(selector).forEach((node) => {
      if (node.closest("#google_translate_element")) {
        return;
      }

      node.style.setProperty("display", "none", "important");
      node.style.setProperty("visibility", "hidden", "important");
      node.style.setProperty("opacity", "0", "important");
      node.style.setProperty("pointer-events", "none", "important");
      node.style.setProperty("height", "0", "important");
      node.style.setProperty("width", "0", "important");
      node.style.setProperty("max-height", "0", "important");
      node.style.setProperty("max-width", "0", "important");
      node.style.setProperty("overflow", "hidden", "important");
    });
  });

  document.body.style.setProperty("top", "0", "important");
  document.body.style.setProperty("position", "static", "important");

  document.querySelectorAll("body > div").forEach((node) => {
    if (node.id === "root" || node.id === "google_translate_element") {
      return;
    }

    const className = node.className || "";
    const hasGoogleBrand =
      node.querySelector('img[alt="Google"]') ||
      node.querySelector('img[src*="google"]') ||
      /VIpgJd|skiptranslate|goog-te/i.test(className);

    if (hasGoogleBrand) {
      node.remove();
    }
  });
};

export const startGoogleTranslateUiSuppression = () => {
  hideGoogleTranslateOverlays();

  if (observer) {
    return;
  }

  observer = new MutationObserver(() => {
    hideGoogleTranslateOverlays();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

export const stopGoogleTranslateUiSuppression = () => {
  observer?.disconnect();
  observer = null;
};
