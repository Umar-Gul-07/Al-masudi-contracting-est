import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

const LANGUAGE_STORAGE_KEY = "site-language";
const DEFAULT_LANGUAGE = "en";
const TARGET_LANGUAGE = "ar";
const TRANSLATE_COOKIE = "googtrans";
const HEADING_TRANSLATIONS = {
  "About us": "من نحن",
  "Connect with our expert for premium tile & marble": "تواصل مع خبرائنا للبلاط والرخام الفاخر",
  "Contact us": "اتصل بنا",
  "Crafted through precision and advanced processes": "مصنوع بدقة وعمليات متقدمة",
  "Designed for premium living, built for everyday life": "مصمم لحياة راقية ومبني للاستخدام اليومي",
  "Elevate every space with our finest tile selection": "ارتق بكل مساحة مع أفضل تشكيلة بلاط لدينا",
  "Events": "الفعاليات",
  "Expert inspiration for beautiful living spaces": "إلهام احترافي لمساحات معيشية جميلة",
  "Foundational values behind our marble craft": "القيم الأساسية وراء حرفية الرخام لدينا",
  "Helping you make confident tile & marble decisions": "نساعدك على اتخاذ قرارات واثقة للبلاط والرخام",
  "How to choose the right modern &...": "كيف تختار التصميم الداخلي العصري المناسب",
  "Let's connect & build spaces": "لنتواصل ونبني مساحات مميزة",
  "Let's discuss your tiles and marble requirements": "دعنا نناقش احتياجاتك من البلاط والرخام",
  "Our blog": "مدونتنا",
  "Quality, craftsmanship, and reliability you can trust": "جودة وحرفية وموثوقية يمكنك الاعتماد عليها",
  "Reliable features built for lasting performance": "مزايا موثوقة مصممة لأداء يدوم",
  "Talk to us today": "تحدث معنا اليوم",
  "Professional tile and marble installation in Riyadh": "خدمات تركيب البلاط والرخام باحترافية في الرياض",
  "The standards that make our tile & marble exceptional": "المعايير التي تجعل بلاطنا ورخامنا استثنائيين",
  "Tile expo & design showcase 2026": "معرض البلاط والتصميم 2026",
  "Timeless tiles & marble designs": "تصاميم بلاط ورخام خالدة",
  "Trusted by partners and projects in Riyadh": "موثوق من الشركاء والمشاريع في الرياض",
  "Trusted voices that reflect": "آراء موثوقة تعكس الجودة",
  "Where design comes to life": "حيث ينبض التصميم بالحياة",
};

const LanguageContext = createContext({
  language: DEFAULT_LANGUAGE,
  isArabic: false,
  setLanguage: () => {},
  toggleLanguage: () => {},
});

let googleTranslateReadyPromise = null;

const setTranslateCookie = (language) => {
  const value = `/en/${language}`;
  const cookie = `${TRANSLATE_COOKIE}=${value};path=/;max-age=31536000`;
  document.cookie = cookie;
};

const setDocumentDirection = (language) => {
  const isArabic = language === TARGET_LANGUAGE;
  document.documentElement.lang = isArabic ? TARGET_LANGUAGE : DEFAULT_LANGUAGE;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.body.classList.toggle("rtl-layout", isArabic);
};

const applyHeadingLanguage = (language) => {
  document.querySelectorAll(".text-anime-style-3").forEach((element) => {
    if (!element.dataset.originalHtml) {
      element.dataset.originalHtml = element.innerHTML;
    }

    if (!element.dataset.originalAriaLabel) {
      element.dataset.originalAriaLabel = element.getAttribute("aria-label") || element.innerText;
    }

    element.classList.add("notranslate");

    if (language === TARGET_LANGUAGE) {
      const originalLabel = element.dataset.originalAriaLabel;
      const translatedLabel = HEADING_TRANSLATIONS[originalLabel] || originalLabel;
      element.textContent = translatedLabel;
      element.setAttribute("aria-label", translatedLabel);
    } else {
      element.innerHTML = element.dataset.originalHtml;
      element.setAttribute("aria-label", element.dataset.originalAriaLabel);
    }
  });
};

const waitForTranslateSelect = () =>
  new Promise((resolve) => {
    const findSelect = () => document.querySelector(".goog-te-combo");
    const existing = findSelect();

    if (existing) {
      resolve(existing);
      return;
    }

    const observer = new MutationObserver(() => {
      const select = findSelect();
      if (select) {
        observer.disconnect();
        resolve(select);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    window.setTimeout(() => {
      observer.disconnect();
      resolve(findSelect());
    }, 12000);
  });

const loadGoogleTranslate = async () => {
  if (typeof window === "undefined") {
    return null;
  }

  if (googleTranslateReadyPromise) {
    return googleTranslateReadyPromise;
  }

  googleTranslateReadyPromise = new Promise((resolve, reject) => {
    if (window.google?.translate?.TranslateElement) {
      resolve(window.google.translate);
      return;
    }

    window.googleTranslateElementInit = () => {
      try {
        if (!document.getElementById("google_translate_element")) {
          resolve(window.google?.translate || null);
          return;
        }

        // eslint-disable-next-line no-new
        new window.google.translate.TranslateElement(
          {
            pageLanguage: DEFAULT_LANGUAGE,
            includedLanguages: `${DEFAULT_LANGUAGE},${TARGET_LANGUAGE}`,
            autoDisplay: false,
          },
          "google_translate_element"
        );

        resolve(window.google.translate);
      } catch (error) {
        reject(error);
      }
    };

    const existingScript = document.getElementById("google-translate-script");
    if (existingScript) {
      return;
    }

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onerror = () => reject(new Error("Failed to load Google Translate."));
    document.body.appendChild(script);
  });

  return googleTranslateReadyPromise;
};

async function applyLanguageToDocument(language) {
  if (typeof document === "undefined") {
    return;
  }

  setDocumentDirection(language);
  applyHeadingLanguage(language);
  setTranslateCookie(language);

  try {
    await loadGoogleTranslate();
    const select = await waitForTranslateSelect();

    if (!select) {
      return;
    }

    if (select.value !== language) {
      select.value = language;
      select.dispatchEvent(new Event("change"));
    } else {
      select.dispatchEvent(new Event("change"));
    }
  } catch (error) {
    console.error("Language translation failed.", error);
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(
    () => localStorage.getItem(LANGUAGE_STORAGE_KEY) || TARGET_LANGUAGE
  );
  const languageRef = useRef(language);

  const setLanguage = useCallback(async (nextLanguage) => {
    languageRef.current = nextLanguage;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    setLanguageState(nextLanguage);
    await applyLanguageToDocument(nextLanguage);
  }, []);

  const toggleLanguage = useCallback(async () => {
    const nextLanguage = languageRef.current === DEFAULT_LANGUAGE ? TARGET_LANGUAGE : DEFAULT_LANGUAGE;
    await setLanguage(nextLanguage);
  }, [setLanguage]);

  useEffect(() => {
    languageRef.current = language;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    void applyLanguageToDocument(language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      isArabic: language === TARGET_LANGUAGE,
      setLanguage,
      toggleLanguage,
    }),
    [language, setLanguage, toggleLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
export { applyLanguageToDocument };
