import React, { useMemo, useState } from "react";
import { useLanguage } from "../../Utils/Language";

const FOOTER_COPY = {
  en: {
    greeting: "Welcome. How can we help with your tile and marble installation?",
    service: "Message us on WhatsApp to book a site visit or installation service in Riyadh.",
    cta: "Start Chat",
    about:
      "Serving clients across Riyadh, Saudi Arabia with expert tile and marble installation for homes, villas, and interior spaces.",
    social: "Follow Us On Social:",
    quickLinks: "Quick Links",
    collection: "Our Collection",
    newsletter: "Subscribe To Newsletter",
    newsletterText: "Subscribe to our newsletter for the latest tiles trends, design inspiration, etc.",
    emailPlaceholder: "Enter Your Email Address",
    policyTitle: "Professional Tile & Marble Installation Services",
    privacyPolicy: "Privacy Policy",
    terms: "Terms & Condition",
    copyright: "Copyright © 2026 All Rights Reserved.",
    home: "Home",
    aboutUs: "About Us",
    events: "Events",
    blogs: "Blogs",
    contactUs: "Contact Us",
    livingRoomTiles: "Living Room Tiles",
    kitchenTiles: "Kitchen Tiles",
    bathroomTiles: "Bathroom Tiles",
    bedroomTiles: "Bedroom Tiles",
    outdoorTiles: "Outdoor Tiles",
  },
  ar: {
    greeting: "مرحبًا بك. كيف يمكننا مساعدتك في تركيب البلاط والرخام؟",
    service: "راسلنا على واتساب لحجز زيارة ميدانية أو خدمة تركيب في الرياض.",
    cta: "ابدأ المحادثة",
    about:
      "نخدم العملاء في مختلف أنحاء الرياض، السعودية، مع خدمات تركيب بلاط ورخام احترافية للمنازل والفلل والمساحات الداخلية.",
    social: "تابعنا على وسائل التواصل:",
    quickLinks: "روابط سريعة",
    collection: "مجموعتنا",
    newsletter: "اشترك في النشرة البريدية",
    newsletterText: "اشترك في نشرتنا البريدية لأحدث اتجاهات البلاط وإلهام التصميم وغير ذلك.",
    emailPlaceholder: "أدخل عنوان بريدك الإلكتروني",
    policyTitle: "خدمات احترافية لتركيب البلاط والرخام",
    privacyPolicy: "سياسة الخصوصية",
    terms: "الشروط والأحكام",
    copyright: "© 2026 جميع الحقوق محفوظة.",
    home: "الرئيسية",
    aboutUs: "من نحن",
    events: "الفعاليات",
    blogs: "المدونات",
    contactUs: "اتصل بنا",
    livingRoomTiles: "بلاط غرف المعيشة",
    kitchenTiles: "بلاط المطابخ",
    bathroomTiles: "بلاط الحمامات",
    bedroomTiles: "بلاط غرف النوم",
    outdoorTiles: "بلاط خارجي",
  },
};

function Footer() {
    const WHATSAPP_NUMBER = "966508383937";
    const { language } = useLanguage();
    const text = FOOTER_COPY[language === "ar" ? "ar" : "en"];
    const [isPromptOpen, setIsPromptOpen] = useState(false);
    const [hasUnreadPrompt, setHasUnreadPrompt] = useState(true);
    const promptContent = useMemo(
      () => FOOTER_COPY[language === "ar" ? "ar" : "en"],
      [language]
    );

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

    const handleWhatsappClick = (event) => {
      if (!isPromptOpen) {
        event.preventDefault();
        setIsPromptOpen(true);
        setHasUnreadPrompt(false);
      }
    };

    return (
        <>
        <footer className="main-footer dark-section">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-4">
        {/* About Footer Start */}
        <div className="about-footer-box">
          {/* Footer Logo Start */}
          <div className="footer-logo">
            <img src="images/logo-white.svg" alt="" />
          </div>
          {/* Footer Logo End */}
          {/* About Footer Content Start */}
          <div className="about-footer-content">
            <p>
              {text.about}
            </p>
          </div>
          {/* About Footer Content End */}
        </div>
        {/* About Footer End */}
      </div>
      <div className="col-lg-8">
        {/* Footer Links Box Start */}
        <div className="footer-links-box">
          {/* Footer Links Start */}
          <div className="footer-links">
            <h2>{text.quickLinks}</h2>
            <ul>
              <li>
                <a href="index.html">{text.home}</a>
              </li>
              <li>
                <a href="about.html">{text.aboutUs}</a>
              </li>
              <li>
                <a href="contact.html">{text.contactUs}</a>
              </li>
            </ul>
          </div>
          {/* Footer Links End */}
          {/* Footer Links Start */}
          <div className="footer-links">
            <h2>{text.collection}</h2>
            <ul>
              <li>
                <a href="collection.html">{text.livingRoomTiles}</a>
              </li>
              <li>
                <a href="collection.html">{text.kitchenTiles}</a>
              </li>
              <li>
                <a href="collection.html">{text.bathroomTiles}</a>
              </li>
              <li>
                <a href="collection.html">{text.bedroomTiles}</a>
              </li>
              <li>
                <a href="collection.html">{text.outdoorTiles}</a>
              </li>
            </ul>
          </div>
          {/* Footer Links End */}
          <div className="footer-links footer-newsletter-form">
            <h2>{text.policyTitle}</h2>
            <p>
              {language === "ar"
                ? "نركّز على تركيب البلاط والرخام للمنازل والفلل والمشاريع الداخلية في الرياض."
                : "We focus on tile and marble installation for homes, villas, and interior projects in Riyadh."}
            </p>
            <p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                {promptContent.cta}
              </a>
            </p>
          </div>
        </div>
        {/* Footer Links Box End */}
      </div>
      <div className="col-lg-12">
        {/* Footer Copyright Text Start */}
        <div className="footer-copyright-text">
          <p>{text.copyright}</p>
        </div>
        {/* Footer Copyright Text End */}
      </div>
    </div>
  </div>
</footer>

<a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  title="WhatsApp"
  aria-label="WhatsApp chat"
  onClick={handleWhatsappClick}
  style={{
    position: "fixed",
    bottom: 24,
    right: 24,
    zIndex: 9999,
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: "#25D366",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
    textDecoration: "none",
  }}
>
  {hasUnreadPrompt && <span className="whatsapp-notification-dot" />}
  {isPromptOpen && (
    <span className="whatsapp-prompt-bubble">
      <strong className="whatsapp-prompt-title">{promptContent.greeting}</strong>
      <span className="whatsapp-prompt-text">{promptContent.service}</span>
      <span className="whatsapp-prompt-cta">{promptContent.cta}</span>
    </span>
  )}
  <svg
    aria-hidden="true"
    viewBox="0 0 32 32"
    style={{
      width: 30,
      height: 30,
      display: "block",
    }}
  >
    <path
      fill="#FFFFFF"
      d="M19.11 17.25c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.33-.79-.71-1.33-1.58-1.48-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.44-.46-.61-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.27-.95.93-.95 2.26s.98 2.61 1.11 2.79c.14.18 1.92 2.93 4.66 4.11.65.28 1.16.44 1.56.56.66.21 1.25.18 1.72.11.53-.08 1.61-.66 1.84-1.3.23-.64.23-1.18.16-1.29-.06-.11-.24-.18-.5-.32Z"
    />
    <path
      fill="#FFFFFF"
      d="M16 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.25.59 4.45 1.72 6.39L3.2 28.8l6.57-1.68A12.72 12.72 0 0 0 16 28.8c7.07 0 12.8-5.73 12.8-12.8S23.07 3.2 16 3.2Zm0 23.49c-1.92 0-3.8-.51-5.44-1.48l-.39-.23-3.9 1 .99-3.81-.25-.39A10.62 10.62 0 0 1 5.39 16c0-5.85 4.76-10.61 10.61-10.61S26.61 10.15 26.61 16 21.85 26.69 16 26.69Z"
    />
  </svg>
</a>

        </>
    )
}

export default Footer
