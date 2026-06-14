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
  "Why Choose Us": "لماذا تختارنا",
  "Our Products": "منتجاتنا",
  "Our Core Features": "مميزاتنا الأساسية",
  "Our Testimonials": "آراء عملائنا",
  "Latest Blogs": "أحدث المدونات",
};

const LanguageContext = createContext({
  language: DEFAULT_LANGUAGE,
  isArabic: false,
  setLanguage: () => {},
  toggleLanguage: () => {},
});

const clearGoogleTranslateCookie = () => {
  if (typeof document === "undefined") {
    return;
  }

  const hostname = window.location.hostname;
  const expire = `${TRANSLATE_COOKIE}=;path=/;max-age=0`;
  document.cookie = expire;
  document.cookie = `${TRANSLATE_COOKIE}=;path=/;domain=.${hostname};max-age=0`;
  document.cookie = `${TRANSLATE_COOKIE}=;path=/;domain=${hostname};max-age=0`;
};

const removeGoogleTranslateArtifacts = () => {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.classList.add("notranslate");
  document.body.classList.add("notranslate");

  document
    .querySelectorAll(
      '#google_translate_element, iframe.goog-te-banner-frame, iframe.skiptranslate, .goog-te-banner-frame, .goog-te-balloon-frame, .goog-te-menu-frame, #goog-gt-tt, div[class*="VIpgJd-"]'
    )
    .forEach((node) => node.remove());

  document.body.style.setProperty("top", "0", "important");
  document.body.style.setProperty("position", "static", "important");
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

function applyLanguageToDocument(language) {
  if (typeof document === "undefined") {
    return;
  }

  clearGoogleTranslateCookie();
  removeGoogleTranslateArtifacts();
  setDocumentDirection(language);
  applyHeadingLanguage(language);
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(
    () => localStorage.getItem(LANGUAGE_STORAGE_KEY) || TARGET_LANGUAGE
  );
  const languageRef = useRef(language);

  const setLanguage = useCallback((nextLanguage) => {
    languageRef.current = nextLanguage;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    setLanguageState(nextLanguage);
    applyLanguageToDocument(nextLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    const nextLanguage = languageRef.current === DEFAULT_LANGUAGE ? TARGET_LANGUAGE : DEFAULT_LANGUAGE;
    setLanguage(nextLanguage);
  }, [setLanguage]);

  useEffect(() => {
    languageRef.current = language;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    applyLanguageToDocument(language);
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
