import React from 'react'
import ThemeIcon from '../Components/ThemeIcon'
import HeroVideo from '../Components/HeroVideo'
import { useLanguage } from '../Utils/Language'

const HOME_COPY = {
  en: {
    heroEyebrow: 'Crafting Timeless Stone Surfaces',
    heroTrust: 'Trusted by homeowners in Riyadh for quality installation.',
    watchVideo: 'Watch Video',
    exploreCollection: 'Explore Our Collection',
    moreAboutUs: 'More About Us',
    getFreeQuote: 'Get Free Quote',
    learnMore: 'Learn More',
    viewProducts: 'View Products',
    viewProduct: 'View Product',
    contactUsToday: 'Contact Us Today',
    latestBlogs: 'Latest Blogs',
    livingRoomTiles: 'Living Room Tiles',
    livingRoomTilesDesc: 'Transform your living space with tiles that combine style.',
    kitchenTiles: 'Kitchen Tiles',
    kitchenTilesDesc:
      'Designed for both style & practicality, our kitchen tiles resist spills.',
    bathroomTiles: 'Bathroom Tiles',
    decorCarvingGlossy: 'Décor Carving Glossy',
    glossyEndless: 'Glossy Endless',
    statuarioMarbleLook: 'Statuario Marble Look',
    statuarioMarbleLookDesc:
      'Statuario marble look surfaces inspired by classic Italian marble, featuring soft white tones.',
    partnerSuppliers: 'Partnering with Trusted Suppliers and Industry Experts',
    clientSatisfactionRate: 'Client Satisfaction Rate',
    highlyEquipped: '50+ Highly Equipped',
    highlyEquippedDesc:
      'With 50+ highly equipped units & advanced machinery, we ensure precision.',
    skilledExperts: '100+ Skilled Experts',
    riyadhServiceArea: 'Riyadh Service Area',
    yearsExperience: '25+ Years Experience',
    basedOnReviews: 'Based on 2500 reviews',
    naturalMarbleSlabs: 'Natural Marble Slabs',
    naturalMarbleSlabsDesc:
      'Carefully selected natural marble slabs feature unique veining and premium finishes.',
    glossCollections: 'Gloss Collections',
    designerPatternTiles: 'Designer Pattern Tiles',
    riyadhFocus: 'Riyadh Focus',
    supplyingTilesAcrossRiyadh: 'Supplying Tiles Across Riyadh',
    riyadhSupportAvailable: 'Riyadh Support Available',
    customerSatisfactionRate: 'Customer Satisfaction Rate',
    awardsRecognitions: 'Awards & Recognitions',
    needHelpCallUs: 'Need Any Help? Call Us',
    riyadhSupplyHubs: 'Riyadh Supply Hubs',
    riyadhProjectsCompleted: 'Riyadh Projects Completed',
    authorizedRiyadhPartners: 'Authorized Riyadh Supply Partners',
    blogTitleOne: 'How to Choose the Right Modern & Functional Interior Spaces',
    blogTitleTwo: 'Understanding Tile Finishes: Glossy, Matte, & Textured Surfaces',
    blogTitleThree: 'Top Tile Trends That Are Redefining Modern Interiors',
    testimonialRoleOne: 'Construction Consultant',
    testimonialRoleTwo: 'Penthouse Owner',
    testimonialRoleThree: 'Construction Consultant',
    testimonialRoleFour: 'Architect, UK',
    testimonialNameOne: 'Kristin Watson',
    testimonialNameTwo: 'Esther Howard',
    testimonialNameThree: 'Floyd Miles',
    testimonialNameFour: 'John Richardson',
  },
  ar: {
    heroEyebrow: 'نشكّل أسطحًا حجرية خالدة',
    heroTrust: 'يحظى بثقة أصحاب المنازل في الرياض لجودة التركيب.',
    watchVideo: 'مشاهدة الفيديو',
    exploreCollection: 'استكشف مجموعتنا',
    moreAboutUs: 'اعرف المزيد عنا',
    getFreeQuote: 'احصل على عرض سعر مجاني',
    learnMore: 'اعرف المزيد',
    viewProducts: 'عرض المنتجات',
    viewProduct: 'عرض المنتج',
    contactUsToday: 'تواصل معنا اليوم',
    latestBlogs: 'أحدث المدونات',
    livingRoomTiles: 'بلاط غرف المعيشة',
    livingRoomTilesDesc: 'حوّل مساحة معيشتك ببلاط يجمع بين الأناقة.',
    kitchenTiles: 'بلاط المطابخ',
    kitchenTilesDesc: 'مصمم للأناقة والعملية، ويقاوم بلاط المطابخ لدينا الانسكابات.',
    bathroomTiles: 'بلاط الحمامات',
    decorCarvingGlossy: 'ديكور كارفينغ لامع',
    glossyEndless: 'لامع لا نهائي',
    statuarioMarbleLook: 'مظهر رخام ستاتواريو',
    statuarioMarbleLookDesc:
      'أسطح بمظهر رخام ستاتواريو مستوحاة من الرخام الإيطالي الكلاسيكي، بدرجات بيضاء ناعمة.',
    partnerSuppliers: 'شراكات مع موردين موثوقين وخبراء الصناعة',
    clientSatisfactionRate: 'معدل رضا العملاء',
    highlyEquipped: '50+ وحدة مجهزة',
    highlyEquippedDesc: 'مع أكثر من 50 وحدة مجهزة وآلات متقدمة نضمن الدقة.',
    skilledExperts: '100+ خبير ماهر',
    riyadhServiceArea: 'منطقة الخدمة في الرياض',
    yearsExperience: 'خبرة تزيد عن 25 عامًا',
    basedOnReviews: 'استنادًا إلى 2500 تقييم',
    naturalMarbleSlabs: 'ألواح رخام طبيعي',
    naturalMarbleSlabsDesc:
      'ألواح رخام طبيعي مختارة بعناية تتميز بعروق فريدة وتشطيبات فاخرة.',
    glossCollections: 'مجموعات لامعة',
    designerPatternTiles: 'بلاط بنقوش تصميمية',
    riyadhFocus: 'التركيز على الرياض',
    supplyingTilesAcrossRiyadh: 'توريد البلاط في مختلف أنحاء الرياض',
    riyadhSupportAvailable: 'الدعم متاح في الرياض',
    customerSatisfactionRate: 'معدل رضا العملاء',
    awardsRecognitions: 'الجوائز والتقديرات',
    needHelpCallUs: 'هل تحتاج إلى مساعدة؟ اتصل بنا',
    riyadhSupplyHubs: 'مراكز التوريد في الرياض',
    riyadhProjectsCompleted: 'مشاريع الرياض المنجزة',
    authorizedRiyadhPartners: 'شركاء التوريد المعتمدون في الرياض',
    blogTitleOne: 'كيف تختار المساحات الداخلية العصرية والعملية المناسبة',
    blogTitleTwo: 'فهم تشطيبات البلاط: اللامع، والمطفي، والأسطح المزخرفة',
    blogTitleThree: 'أحدث اتجاهات البلاط التي تعيد تشكيل الديكورات الداخلية الحديثة',
    testimonialRoleOne: 'مستشار إنشائي',
    testimonialRoleTwo: 'مالك بنتهاوس',
    testimonialRoleThree: 'مستشار إنشائي',
    testimonialRoleFour: 'مهندس معماري، المملكة المتحدة',
    testimonialNameOne: 'كريستين واتسون',
    testimonialNameTwo: 'إيستر هوارد',
    testimonialNameThree: 'فلويد مايلز',
    testimonialNameFour: 'جون ريتشاردسون',
  },
}

const Home = () => {
  const { language } = useLanguage()
  const isArabic = language === 'ar'
  const text = HOME_COPY[isArabic ? 'ar' : 'en']

  return (
    <div>
      <div className="hero dark-section">
  {/* Video Start */}
  <div className="hero-bg-video">
    <HeroVideo />
  </div>
  {/* Video End */}
  <div className="container">
    <div className="row align-items-end">
      <div className="col-xl-7">
        {/* Hero Content Start */}
        <div className="hero-content">
          {/* Section Title Start */}
          <div className="section-title">
            <span
              className="section-sub-title wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              {text.heroEyebrow}
            </span>
            <h1
              className="text-anime-style-3"
              data-cursor="-opaque"
              aria-label="Professional tile and marble installation in Riyadh"
              style={{ perspective: 400 }}
            >
              <div
                className="split-line"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "block",
                  textAlign: "start"
                }}
              >
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    T
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    h
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    l
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    a
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    d
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    n
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    g
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    v
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    t
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    r
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    f
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    d
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    t
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    l
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    s
                  </div>
                </div>{" "}
              </div>
              <div
                className="split-line"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "block",
                  textAlign: "start"
                }}
              >
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    c
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    o
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    m
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    p
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    a
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    n
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    y
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    n
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    w
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    o
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    r
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    l
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    d
                  </div>
                </div>
              </div>
            </h1>
          </div>
          {/* Section Title End */}
          {/* Hero Button Start */}
          <div
            className="hero-btn wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp"
            }}
          >
            <a href="contact.html" className="btn-default btn-highlighted">
              {text.exploreCollection}
            </a>
          </div>
          {/* Hero Button End */}
        </div>
        {/* Hero Content End */}
      </div>
      <div className="col-xl-5">
        {/* Hero Body Start */}
        <div className="hero-body">
          {/* Hero Body Content Start */}
          <div
            className="hero-body-content wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <p>
              We install tiles and marble with precision for homes and interior
              spaces across Riyadh, delivering clean finishes and elegant
              results.
            </p>
          </div>
          {/* Hero Body Content End */}
          {/* Hero Info Box Start */}
          <div
            className="hero-info-box wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp"
            }}
          >
            {/* Hero Client Box Start */}
            <div className="hero-client-box">
              {/* Satisfy Client Images Start */}
              <div className="satisfy-client-images">
                <div className="satisfy-client-image">
                  <figure className="image-anime">
                    <img src="/images/author-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="satisfy-client-image">
                  <figure className="image-anime">
                    <img src="/images/author-2.jpg" alt="" />
                  </figure>
                </div>
                <div className="satisfy-client-image">
                  <figure className="image-anime">
                    <img src="/images/author-3.jpg" alt="" />
                  </figure>
                </div>
                <div className="satisfy-client-image">
                  <figure className="image-anime">
                    <img src="/images/author-4.jpg" alt="" />
                  </figure>
                </div>
              </div>
              {/* Satisfy Client Images End */}
              {/* Satisfy Client Content Start */}
              <div className="satisfy-client-content">
                <p>{text.heroTrust}</p>
              </div>
              {/* Satisfy Client Content End */}
            </div>
            {/* Hero Client Box End */}
            {/* Video Play Button Start */}
            <div className="video-play-button">
              <a
                href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                className="popup-video bg-effect"
                data-cursor-text="Play"
              >
                <ThemeIcon name="play" />
              </a>
              <p>{text.watchVideo}</p>
            </div>
            {/* Video Play Button End */}
          </div>
          {/* Hero Info Box End */}
        </div>
        {/* Hero Body End */}
      </div>
    </div>
  </div>
</div>


<div className="about-us">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-6">
        {/* About Us Image Box Start */}
        <div
          className="about-us-image-box wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          {/* About Us Image Box 1 Start */}
          <div className="about-us-image-box-1">
            {/* About Us Image Start */}
            <div className="about-us-image">
              <figure className="image-anime">
                <img src="/images/about-us-image-1.jpg" alt="" />
              </figure>
            </div>
            {/* About Us Image End */}
            {/* Contact Us Circle Start */}
            <div className="contact-us-circle">
              <a href="contact.html">
                <img src="/images/contact-us-circle.svg" alt="" />
              </a>
            </div>
            {/* Contact Us Circle End */}
          </div>
          {/* About US Image Box 1 End */}
          {/* About US Image Box 2 Start */}
          <div className="about-us-image-box-2">
            {/* About Us Image Start */}
            <div className="about-us-image">
              <figure className="image-anime">
                <img src="/images/about-us-image-2.jpg" alt="" />
              </figure>
            </div>
            {/* About Us Image End */}
          </div>
          {/* About US Image Box 2 End */}
        </div>
        {/* About Us Image Box End */}
      </div>
      <div className="col-xl-6">
        {/* About Us Content Start */}
        <div className="about-us-content">
          {/* Section Title Start */}
          <div className="section-title">
            <span
              className="section-sub-title wow fadeInUp"
              style={{ visibility: "hidden", animationName: "none" }}
            >
              About Our Company
            </span>
            <h2
              className="text-anime-style-3"
              data-cursor="-opaque"
              aria-label="Designed for premium living, built for everyday life"
              style={{ perspective: 400 }}
            >
              <div
                className="split-line"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "block",
                  textAlign: "start"
                }}
              >
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    D
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    s
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    g
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    n
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    d
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    f
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    o
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    r
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    p
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    r
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    m
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    u
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    m
                  </div>
                </div>{" "}
              </div>
              <div
                className="split-line"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "block",
                  textAlign: "start"
                }}
              >
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    l
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    v
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    g
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    ,
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    b
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    u
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    l
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    t
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    f
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    o
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    r
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    v
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    r
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    y
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    d
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    a
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    y
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    l
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    f
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(50px, 0px)",
                      opacity: 0
                    }}
                  >
                    e
                  </div>
                </div>
              </div>
            </h2>
            <p
              className="wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "hidden",
                animationDelay: "0.2s",
                animationName: "none"
              }}
            >
              {isArabic
                ? 'تضمن عمليات الإنتاج المتقدمة والحرفية الماهرة والرقابة الصارمة على الجودة أداءً ثابتًا وتشطيبات متقنة ومتانة طويلة الأمد.'
                : 'Our advanced production processes, skilled craftsmanship, & strict quality control ensure consistent performance, refined finishes, and long-lasting durability.'}
            </p>
          </div>
          {/* Section Title End */}
          {/* About Us Body Start */}
          <div className="about-us-body">
            {/* About Us Body Content Start */}
            <div className="about-us-body-content">
              {/* About Us Body list Start */}
              <div
                className="about-us-body-list wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: "hidden",
                  animationDelay: "0.4s",
                  animationName: "none"
                }}
              >
                <ul>
                  <li>{isArabic ? 'نواصل الاستثمار في التكنولوجيا المتقدمة' : 'Continuously invest a advance technology'}</li>
                  <li>
                    {isArabic
                      ? 'معايير جودة جاهزة لمتطلبات الرياض ومصممة لمتانة تدوم'
                      : 'Riyadh-ready quality standards built for lasting durability'}
                  </li>
                </ul>
              </div>
              {/* About Us Body list End */}
              {/* Skills Progress Bar Start */}
              <div className="skills-progress-bar">
                {/* Skill Item Start */}
                <div className="skillbar" data-percent="95%">
                  <div className="skill-data">
                    <div className="skill-title">{isArabic ? 'جودة التصنيع' : 'Manufacturing Quality'}</div>
                    <div className="skill-no">95%</div>
                  </div>
                  <div className="skill-progress">
                    <div className="count-bar" />
                  </div>
                </div>
                {/* Skill Item End */}
              </div>
              {/* Skills Progress Bar End */}
            </div>
            {/* About Us Body Content End */}
            {/* About Us Body Image Start */}
            <div className="about-us-body-image">
              <figure
                className="image-anime reveal"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(-100%, 0%)"
                }}
              >
                <img
                  src="/images/about-us-body-image.jpg"
                  alt=""
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)"
                  }}
                />
              </figure>
            </div>
            {/* About Us Body Image End */}
          </div>
          {/* About Us Body End */}
          {/* About Us Button Start */}
          <div
            className="about-us-btn wow fadeInUp"
            data-wow-delay="0.6s"
            style={{
              visibility: "hidden",
              animationDelay: "0.6s",
              animationName: "none"
            }}
          >
            <a href="about.html" className="btn-default">
              {text.moreAboutUs}
            </a>
          </div>
          {/* About Us Button End */}
        </div>
        {/* About Us Content End */}
      </div>
    </div>
  </div>
</div>



<div className="our-collection dark-section">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        {/* Section Title Start */}
        <div className="section-title section-title-center">
          <span
            className="section-sub-title wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            Premium Tiles Collection
          </span>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
            aria-label="Elevate every space with our finest tile selection"
            style={{ perspective: 400 }}
          >
            <div
              className="split-line"
              aria-hidden="true"
              style={{
                position: "relative",
                display: "block",
                textAlign: "center"
              }}
            >
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  E
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  l
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  v
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  a
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  v
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  r
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  y
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  p
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  a
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  c
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  w
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  h
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  o
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  u
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  r
                </div>
              </div>{" "}
            </div>
            <div
              className="split-line"
              aria-hidden="true"
              style={{
                position: "relative",
                display: "block",
                textAlign: "center"
              }}
            >
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  f
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  n
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  l
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  l
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  c
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  o
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  n
                </div>
              </div>
            </div>
          </h2>
        </div>
        {/* Section Title End */}
      </div>
    </div>
    <div className="row">
      <div className="col-xl-4 col-md-6">
        {/* Collection Item Start */}
        <div
          className="collection-item wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <div className="collection-item-image">
            <a href="collection.html" data-cursor-text="View">
              <figure>
                <img src="/images/collection-item-image-1.jpg" alt="" />
              </figure>
            </a>
          </div>
          <div className="collection-item-body">
            <div className="collection-item-btn">
              <a href="collection.html">
                <img src="/images/arrow-white.svg" alt="" />
              </a>
            </div>
            <div className="collection-item-content">
              <h2>
                <a href="collection.html">{text.livingRoomTiles}</a>
              </h2>
              <p>Transform your living space with tiles that combine style.</p>
            </div>
          </div>
        </div>
        {/* Collection Item End */}
      </div>
      <div className="col-xl-4 col-md-6">
        {/* Collection Item Start */}
        <div
          className="collection-item wow fadeInUp"
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp"
          }}
        >
          <div className="collection-item-image">
            <a href="collection.html" data-cursor-text="View">
              <figure>
                <img src="/images/collection-item-image-2.jpg" alt="" />
              </figure>
            </a>
          </div>
          <div className="collection-item-body">
            <div className="collection-item-btn">
              <a href="collection.html">
                <img src="/images/arrow-white.svg" alt="" />
              </a>
            </div>
            <div className="collection-item-content">
              <h2>
                <a href="collection.html">{text.kitchenTiles}</a>
              </h2>
              <p>
                {text.kitchenTilesDesc}
              </p>
            </div>
          </div>
        </div>
        {/* Collection Item End */}
      </div>
      <div className="col-xl-4 col-md-6">
        {/* Collection Item Start */}
        <div
          className="collection-item wow fadeInUp"
          data-wow-delay="0.4s"
          style={{
            visibility: "visible",
            animationDelay: "0.4s",
            animationName: "fadeInUp"
          }}
        >
          <div className="collection-item-image">
            <a href="collection.html" data-cursor-text="View">
              <figure>
                <img src="/images/collection-item-image-3.jpg" alt="" />
              </figure>
            </a>
          </div>
          <div className="collection-item-body">
            <div className="collection-item-btn">
              <a href="collection.html">
                <img src="/images/arrow-white.svg" alt="" />
              </a>
            </div>
            <div className="collection-item-content">
              <h2>
                <a href="collection.html">{text.bathroomTiles}</a>
              </h2>
              <p>
                Elevate your bathroom with tiles that feels elegance &amp;
                functionality.
              </p>
            </div>
          </div>
        </div>
        {/* Collection Item End */}
      </div>
      <div className="col-lg-12">
        {/* Section Footer Text Start */}
        <div
          className="section-footer-text section-satisfy-img wow fadeInUp"
          data-wow-delay="0.6s"
          style={{
            visibility: "visible",
            animationDelay: "0.6s",
            animationName: "fadeInUp"
          }}
        >
          {/* Satisfy Client Images Start */}
          <div className="satisfy-client-images">
            <div className="satisfy-client-image">
              <figure className="image-anime">
                <img src="/images/author-1.jpg" alt="" />
              </figure>
            </div>
            <div className="satisfy-client-image add-more">
              <img src="/images/icon-phone-white.svg" alt="" />
            </div>
          </div>
          {/* Satisfy Client Images End */}
          <p>
            Let's make something great work together.{" "}
            <a href="contact.html">{text.getFreeQuote}</a>
          </p>
        </div>
        {/* Section Footer Text End */}
      </div>
    </div>
  </div>
</div>



<div className="why-choose-us">
  <div className="container">
    <div className="row section-row align-items-center">
      <div className="col-xl-6">
        {/* Section Title Start */}
        <div className="section-title">
          <span
            className="section-sub-title wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            {isArabic ? 'لماذا تختارنا' : 'Why Choose Us'}
          </span>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
            aria-label="Quality, craftsmanship, and reliability you can trust"
            style={{ perspective: 400 }}
          >
            <div
              className="split-line"
              aria-hidden="true"
              style={{
                position: "relative",
                display: "block",
                textAlign: "start"
              }}
            >
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  Q
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  u
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  a
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  l
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  y
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  ,
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  c
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  r
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  a
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  f
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  m
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  a
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  n
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  h
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  p
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  ,
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  a
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  n
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  d
                </div>
              </div>{" "}
            </div>
            <div
              className="split-line"
              aria-hidden="true"
              style={{
                position: "relative",
                display: "block",
                textAlign: "start"
              }}
            >
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  r
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  l
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  a
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  b
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  l
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  y
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  y
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  o
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  u
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  c
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  a
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  n
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  r
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  u
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
              </div>
            </div>
          </h2>
        </div>
        {/* Section Title End */}
      </div>
      <div className="col-xl-6">
        {/* Section Content Btn Start */}
        <div className="section-content-btn">
          {/* Section Title Content Start */}
          <div
            className="section-title-content wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp"
            }}
          >
            <p>
              {isArabic
                ? 'نجمع بين المواد الفاخرة والحرفية المتقنة ومعايير الجودة الصارمة لتقديم بلاط يصمد أمام اختبار الزمن.'
                : 'We combine premium materials, expert craftsmanship, and strict quality standards to deliver tiles that stand the test of time.'}
            </p>
          </div>
          {/* Section Title Content End */}
          {/* Section Button Start */}
          <div
            className="section-btn wow fadeInUp"
            data-wow-delay="0.4s"
            style={{
              visibility: "visible",
              animationDelay: "0.4s",
              animationName: "fadeInUp"
            }}
          >
            <a className="btn-default" href="contact.html">
              {text.learnMore}
            </a>
          </div>
          {/* Section Button End */}
        </div>
        {/* Section Content Btn End */}
      </div>
    </div>
    <div className="row">
      <div className="col-xl-6">
        {/* Why Choose Us Image Box Start */}
        <div
          className="why-choose-us-image-box wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          {/* Why Choose Us Image Start */}
          <div className="why-choose-us-image">
            <figure className="image-anime">
              <img src="/images/why-choose-us-image.jpg" alt="" />
            </figure>
          </div>
          {/* Why Choose Us Image End */}
          {/* Why Choose Us Cta Box Start*/}
          <div className="why-choose-us-cta-box">
            {/* Satisfy Client Images Start */}
            <div className="satisfy-client-images">
              <div className="satisfy-client-image">
                <figure className="image-anime">
                  <img src="/images/author-1.jpg" alt="" />
                </figure>
              </div>
              <div className="satisfy-client-image">
                <figure className="image-anime">
                  <img src="/images/author-2.jpg" alt="" />
                </figure>
              </div>
              <div className="satisfy-client-image">
                <figure className="image-anime">
                  <img src="/images/author-3.jpg" alt="" />
                </figure>
              </div>
              <div className="satisfy-client-image">
                <figure className="image-anime">
                  <img src="/images/author-4.jpg" alt="" />
                </figure>
              </div>
            </div>
            {/* Satisfy Client Images End */}
            {/* Satisfy Client Content Start */}
            <div className="satisfy-client-content">
              <p>
                Chosen by 2,000+ Clients in Riyadh for Premium Tiles &amp;
                Marble Quality
              </p>
            </div>
            {/* Satisfy Client Content End */}
          </div>
          {/* Why Choose Us Cta Box End*/}
        </div>
        {/* Why Choose Us Image Box End */}
      </div>
      <div className="col-xl-6">
        {/* Why Choose Us Content Start */}
        <div className="why-choose-us-content">
          {/* Why Choose Item List Start */}
          <div className="why-choose-item-list">
            {/* Why Choose Item Start */}
            <div
              className="why-choose-item wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              {/* Satisfy Client Images Start */}
              <div className="satisfy-client-images">
                <div className="satisfy-client-image">
                  <figure className="image-anime">
                    <img src="/images/author-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="satisfy-client-image">
                  <figure className="image-anime">
                    <img src="/images/author-2.jpg" alt="" />
                  </figure>
                </div>
                <div className="satisfy-client-image">
                  <figure className="image-anime">
                    <img src="/images/author-3.jpg" alt="" />
                  </figure>
                </div>
                <div className="satisfy-client-image">
                  <figure className="image-anime">
                    <img src="/images/author-4.jpg" alt="" />
                  </figure>
                </div>
              </div>
              {/* Satisfy Client Images End */}
              {/* Satisfy Client Content Start */}
              <div className="satisfy-client-content">
                <p>
                  “ We don't just tiles and marble we craft surfaces that stand
                  the test of time.! ”
                </p>
              </div>
              {/* Satisfy Client Content End */}
            </div>
            {/* Why Choose Item End */}
            {/* Why Choose Item Start */}
            <div
              className="why-choose-item wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp"
              }}
            >
              {/* Why Choose Counter Content Start */}
              <div className="why-choose-counter-content">
                <h2>
                  <span>100</span>+
                </h2>
                <h3>{text.riyadhFocus}</h3>
              </div>
              {/* Why Choose Counter Content End */}
              {/* Why Choose Item Content Start */}
              <div className="why-choose-item-content">
                <p>
                  We currently serve homes, villas, and commercial projects
                  across Riyadh with high-quality tiles.
                </p>
              </div>
              {/* Why Choose Item Content End */}
            </div>
            {/* Why Choose Item End */}
            {/* Why Choose Item Start */}
            <div
              className="why-choose-item global-network-box wow fadeInUp"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp"
              }}
            >
              {/* Why Choose Item Header Start */}
              <div className="why-choose-item-header">
                <div className="icon-box">
                  <img src="/images/icon-why-choose-us-item-1.svg" alt="" />
                </div>
                <div className="why-choose-item-title">
                  <h3>{text.supplyingTilesAcrossRiyadh}</h3>
                </div>
              </div>
              {/* Why Choose Item Header End */}
              {/* Why Choose Country Flag List Start */}
              <div className="why-choose-country-flag-list">
                <ul>
                  <li>
                    <img src="/images/why-choose-item-image-1.png" alt="" />
                  </li>
                  <li>
                    <img src="/images/why-choose-item-image-2.png" alt="" />
                  </li>
                  <li>
                    <img src="/images/why-choose-item-image-3.png" alt="" />
                  </li>
                  <li>
                    <img src="/images/why-choose-item-image-4.png" alt="" />
                  </li>
                  <li>
                    <img src="/images/why-choose-item-image-5.png" alt="" />
                  </li>
                  <li>
                    <img src="/images/why-choose-item-image-6.png" alt="" />
                  </li>
                  <li>
                    <img src="/images/why-choose-item-image-7.png" alt="" />
                  </li>
                </ul>
              </div>
              {/* Why Choose Country Flag List End */}
            </div>
            {/* Why Choose Item End */}
          </div>
          {/* Why Choose Item List End */}
          {/* Section Footer Text Start */}
          <div
            className="section-footer-text section-satisfy-img wow fadeInUp"
            data-wow-delay="0.6s"
            style={{
              visibility: "hidden",
              animationDelay: "0.6s",
              animationName: "none"
            }}
          >
            {/* Satisfy Client Images Start */}
            <div className="satisfy-client-images">
              <div className="satisfy-client-image">
                <figure className="image-anime">
                  <img src="/images/author-1.jpg" alt="" />
                </figure>
              </div>
              <div className="satisfy-client-image add-more">
                <img src="/images/icon-phone-white.svg" alt="" />
              </div>
            </div>
            {/* Satisfy Client Images End */}
            <p>
              Let's make something great work together.{" "}
              <a href="contact.html">{text.getFreeQuote}</a>
            </p>
          </div>
          {/* Section Footer Text End */}
        </div>
        {/* Why Choose Us Content End */}
      </div>
    </div>
  </div>
</div>



<div className="our-products dark-section">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        {/* Section Title Start */}
        <div className="section-title section-title-center">
          <span
            className="section-sub-title wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            {isArabic ? 'منتجاتنا' : 'Our Products'}
          </span>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
            aria-label="Timeless tiles & marble designs"
            style={{ perspective: 400 }}
          >
            <div
              className="split-line"
              aria-hidden="true"
              style={{
                position: "relative",
                display: "block",
                textAlign: "center"
              }}
            >
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  T
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  m
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  l
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  l
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  &amp;
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  m
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  a
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  r
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  b
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  l
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  d
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  g
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  n
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
              </div>
            </div>
          </h2>
          <p
            className="wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp"
            }}
          >
            A refined collection of tiles and marble surfaces inspired by
            classic aesthetics and modern design, crafted to bring lasting
            beauty and sophistication to any space.
          </p>
        </div>
        {/* Section Title End */}
      </div>
    </div>
    <div className="row">
      <div className="col-xl-4 col-md-6">
        {/* Product Box Start */}
        <div
          className="product-box wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <div className="icon-box">
            <img src="/images/icon-product-box-1-silver.svg" alt="" />
          </div>
          <div className="product-box-content">
            <h2>
              <a href="products.html">{text.decorCarvingGlossy}</a>
            </h2>
            <p>
              Glossy décor carving surfaces crafted with intricate detailing
              &amp; refine finishes, designed to add depth.
            </p>
          </div>
          <div className="product-box-btn">
            <a href="products.html" className="readmore-btn">
              {text.viewProducts}
            </a>
          </div>
        </div>
        {/* Product Box End */}
      </div>
      <div className="col-xl-4 col-md-6">
        {/* Product Box Start */}
        <div
          className="product-box wow fadeInUp"
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp"
          }}
        >
          <div className="icon-box">
            <img src="/images/icon-product-box-2-silver.svg" alt="" />
          </div>
          <div className="product-box-content">
            <h2>
              <a href="products.html">{text.glossyEndless}</a>
            </h2>
            <p>
              Endless glossy surfaces designed with seamless patterns and a
              high-shine finish, expansive spaces.
            </p>
          </div>
          <div className="product-box-btn">
            <a href="products.html" className="readmore-btn">
              {text.viewProducts}
            </a>
          </div>
        </div>
        {/* Product Box End */}
      </div>
      <div className="col-xl-4 col-md-6">
        {/* Product Box Start */}
        <div
          className="product-box wow fadeInUp"
          data-wow-delay="0.4s"
          style={{
            visibility: "visible",
            animationDelay: "0.4s",
            animationName: "fadeInUp"
          }}
        >
          <div className="icon-box">
            <img src="/images/icon-product-box-3-silver.svg" alt="" />
          </div>
          <div className="product-box-content">
            <h2>
              <a href="products.html">{text.statuarioMarbleLook}</a>
            </h2>
            <p>
              {text.statuarioMarbleLookDesc}
            </p>
          </div>
          <div className="product-box-btn">
            <a href="products.html" className="readmore-btn">
              {text.viewProducts}
            </a>
          </div>
        </div>
        {/* Product Box End */}
      </div>
      <div className="col-lg-12">
        {/* Comapany Support Slider Box Start */}
        <div
          className="company-supports-slider-box wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          {/* Comapany Support Content Start */}
          <div className="company-supports-content">
            <hr />
            <p>{text.partnerSuppliers}</p>
            <hr />
          </div>
          {/* Comapany Support Content End */}
          {/* Comapany Support Slider Start */}
          <div className="company-supports-slider">
            <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-6d4fe78a74d51fb8"
                aria-live="off"
                style={{
                  transitionDuration: "0ms",
                  transform: "translate3d(-237.8px, 0px, 0px)",
                  transitionDelay: "0ms"
                }}
              >
                {/* Company Support Logo Start */}
                {/* Comapany Support Logo End */}
                {/* Company Support Logo Start */}
                {/* Comapany Support Logo End */}
                {/* Company Support Logo Start */}
                {/* Comapany Support Logo End */}
                {/* Company Support Logo Start */}
                {/* Comapany Support Logo End */}
                {/* Company Support Logo Start */}
                {/* Comapany Support Logo End */}
                {/* Company Support Logo Start */}
                {/* Comapany Support Logo End */}
                <div
                  className="swiper-slide swiper-slide-prev"
                  role="group"
                  aria-label="2 / 6"
                  style={{ width: "207.8px", marginRight: 30 }}
                  data-swiper-slide-index={1}
                >
                  <div className="company-supports-logo">
                    <img src="/images/company-supports-logo-2.svg" alt="" />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-active"
                  role="group"
                  aria-label="3 / 6"
                  style={{ width: "207.8px", marginRight: 30 }}
                  data-swiper-slide-index={2}
                >
                  <div className="company-supports-logo">
                    <img src="/images/company-supports-logo-3.svg" alt="" />
                  </div>
                </div>
                <div
                  className="swiper-slide swiper-slide-next"
                  role="group"
                  aria-label="4 / 6"
                  style={{ width: "207.8px", marginRight: 30 }}
                  data-swiper-slide-index={3}
                >
                  <div className="company-supports-logo">
                    <img src="/images/company-supports-logo-4.svg" alt="" />
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="5 / 6"
                  style={{ width: "207.8px", marginRight: 30 }}
                  data-swiper-slide-index={4}
                >
                  <div className="company-supports-logo">
                    <img src="/images/company-supports-logo-5.svg" alt="" />
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="6 / 6"
                  style={{ width: "207.8px", marginRight: 30 }}
                  data-swiper-slide-index={5}
                >
                  <div className="company-supports-logo">
                    <img src="/images/company-supports-logo-3.svg" alt="" />
                  </div>
                </div>
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="1 / 6"
                  style={{ width: "207.8px", marginRight: 30 }}
                  data-swiper-slide-index={0}
                >
                  <div className="company-supports-logo">
                    <img src="/images/company-supports-logo-1.svg" alt="" />
                  </div>
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </div>
          </div>
          {/* Comapany Support Slider End */}
        </div>
        {/* Comapany Support Slider Box End */}
      </div>
    </div>
  </div>
</div>



<div className="our-product-qualities">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-6">
        {/* Product Qualities Image Box Start */}
        <div
          className="product-qualities-image-box wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          {/* Product Qualities Image Box 1 Start */}
          <div className="product-qualities-image-box-1">
            {/* Product Qualities Image Start */}
            <div className="product-qualities-image">
              <figure className="image-anime">
                <img src="/images/our-product-qualities-image-1.jpg" alt="" />
              </figure>
            </div>
            {/* Product Qualities Image End */}
            {/* Product Qualities Counter Box Start */}
            <div className="product-qualities-counter-box">
              <h3>
                <span className="counter">36</span>%
              </h3>
              <p>{text.clientSatisfactionRate}</p>
            </div>
            {/* Product Qualities Counter Box End */}
          </div>
          {/* Product Qualities Image Box 1 End */}
          {/* Product Qualities Image Box 2 Start */}
          <div className="product-qualities-image-box-2">
            {/* Product Qualities Image Start */}
            <div className="product-qualities-image">
              <figure className="image-anime">
                <img src="/images/our-product-qualities-image-2.jpg" alt="" />
              </figure>
            </div>
            {/* Product Qualities Image End */}
          </div>
          {/* Product Qualities Image Box 2 End */}
        </div>
        {/* Product Qualities Image Box End */}
      </div>
      <div className="col-xl-6">
        {/* Product Qualities Content Start */}
        <div className="product-qualities-content">
          {/* Section title Start */}
          <div className="section-title">
            <span
              className="section-sub-title wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              Our Product Qualities
            </span>
            <h2
              className="text-anime-style-3"
              data-cursor="-opaque"
              aria-label="The standards that make our tile & marble exceptional"
              style={{ perspective: 400 }}
            >
              <div
                className="split-line"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "block",
                  textAlign: "start"
                }}
              >
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    T
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    h
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    s
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    t
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    a
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    n
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    d
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    a
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    r
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    d
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    s
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    t
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    h
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    a
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    t
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    m
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    a
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    k
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                </div>{" "}
              </div>
              <div
                className="split-line"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "block",
                  textAlign: "start"
                }}
              >
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    o
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    u
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    r
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    t
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    l
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    &amp;
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    m
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    a
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    r
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    b
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    l
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                </div>{" "}
              </div>
              <div
                className="split-line"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "block",
                  textAlign: "start"
                }}
              >
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    x
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    c
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    p
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    t
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    o
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    n
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    a
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    l
                  </div>
                </div>
              </div>
            </h2>
            <p
              className="wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp"
              }}
            >
              We focus on careful installation, accurate finishing, and
              dependable workmanship to deliver clean and lasting results.
            </p>
          </div>
          {/* Section title End */}
          {/* Product Qualities Item List Start */}
          <div className="product-qualities-item-list">
            {/* Product Qualities Item Start */}
            <div
              className="product-qualities-item wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div className="product-qualities-item-bg-image">
                <div className="icon-box">
                  <img
                    src="/images/icon-product-qualities-item-bg-1.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="product-qualities-item-header">
                <div className="icon-box">
                  <img src="/images/icon-product-qualities-item-1.svg" alt="" />
                </div>
                <div className="product-qualities-item-title">
                  <h3>{text.highlyEquipped}</h3>
                </div>
              </div>
              <div className="product-qualities-item-content">
                <p>
                  {text.highlyEquippedDesc}
                </p>
              </div>
            </div>
            {/* Product Qualities Item End */}
            {/* Product Qualities Item Start */}
            <div
              className="product-qualities-item wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp"
              }}
            >
              <div className="product-qualities-item-bg-image">
                <div className="icon-box">
                  <img
                    src="/images/icon-product-qualities-item-bg-2.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="product-qualities-item-header">
                <div className="icon-box">
                  <img src="/images/icon-product-qualities-item-2.svg" alt="" />
                </div>
                <div className="product-qualities-item-title">
                  <h3>{text.skilledExperts}</h3>
                </div>
              </div>
              <div className="product-qualities-item-content">
                <p>
                  With dedicated experts, we combine experience, expertise
                  creativity expertise.
                </p>
              </div>
            </div>
            {/* Product Qualities Item End */}
            {/* Product Qualities Item Start */}
            <div
              className="product-qualities-item wow fadeInUp"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp"
              }}
            >
              <div className="product-qualities-item-bg-image">
                <div className="icon-box">
                  <img
                    src="/images/icon-product-qualities-item-bg-3.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="product-qualities-item-header">
                <div className="icon-box">
                  <img src="/images/icon-product-qualities-item-3.svg" alt="" />
                </div>
                <div className="product-qualities-item-title">
                  <h3>{text.riyadhServiceArea}</h3>
                </div>
              </div>
              <div className="product-qualities-item-content">
                <p>
                  Our team currently supports tile and marble requirements
                  across Riyadh, Saudi Arabia.
                </p>
              </div>
            </div>
            {/* Product Qualities Item End */}
            {/* Product Qualities Item Start */}
            <div
              className="product-qualities-item wow fadeInUp"
              data-wow-delay="0.6s"
              style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeInUp"
              }}
            >
              <div className="product-qualities-item-bg-image">
                <div className="icon-box">
                  <img
                    src="/images/icon-product-qualities-item-bg-4.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="product-qualities-item-header">
                <div className="icon-box">
                  <img src="/images/icon-product-qualities-item-4.svg" alt="" />
                </div>
                <div className="product-qualities-item-title">
                  <h3>{text.yearsExperience}</h3>
                </div>
              </div>
              <div className="product-qualities-item-content">
                <p>
                  With over 25 years of experience in the tiles and marble
                  industry.
                </p>
              </div>
            </div>
            {/* Product Qualities Item End */}
          </div>
          {/* Product Qualities Item List End */}
        </div>
        {/* Product Qualities Content End */}
      </div>
    </div>
  </div>
</div>



<div className="interactive interactive-process-layout">
  {/* Interactive Process Wrapper Start */}
  <div className="interactive-interactive-process-wrapper interactive-wrapper">
    <div className="interactive-con">
      {/* Interactive Inner Grid Start */}
      <div className="interactive-con-inner interactive-grid">
        {/* Interactive Process Item Start */}
        <div className="interactive-process-item">
          <div className="interactive-inner-process activate" data-index={0}>
            <div className="process-content-wap">
              <div className="interactive-process-item-wap">
                <div className="interactive-process-item-body-wap">
                  <div className="interactive-process-item-content-wap">
                    <h3>
                      <a href="products.html">Polished &amp; Honed Marble Tiles</a>
                    </h3>
                    <p>
                      Refined marble tiles available in polished and finishes,
                      offering timeless elegance.
                    </p>
                  </div>
                  <div className="interactive-process-item-btn">
                    <a href="products.html" className="readmore-btn">
                      {text.viewProduct}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Interactive Process Item End */}
        {/* Interactive Process Item Start */}
        <div className="interactive-process-item">
          <div className="interactive-inner-process" data-index={1}>
            <div className="process-content-wap">
              <div className="interactive-process-item-wap">
                <div className="interactive-process-item-body-wap">
                  <div className="interactive-process-item-content-wap">
                    <h3>
                      <a href="products.html">{text.naturalMarbleSlabs}</a>
                    </h3>
                    <p>
                      {text.naturalMarbleSlabsDesc}
                    </p>
                  </div>
                  <div className="interactive-process-item-btn">
                    <a href="products.html" className="readmore-btn">
                      {text.viewProduct}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Interactive Process Item End */}
        {/* Interactive Process Item Start */}
        <div className="interactive-process-item">
          <div className="interactive-inner-process" data-index={2}>
            <div className="process-content-wap">
              <div className="interactive-process-item-wap">
                <div className="interactive-process-item-body-wap">
                  <div className="interactive-process-item-content-wap">
                    <h3>
                      <a href="products.html">{text.glossCollections}</a>
                    </h3>
                    <p>
                      Our Gloss Design Collections features refineding surfaces
                      with a brilliant shine.
                    </p>
                  </div>
                  <div className="interactive-process-item-btn">
                    <a href="products.html" className="readmore-btn">
                      {text.viewProduct}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Interactive Process Item End */}
        {/* Interactive Process Item Start */}
        <div className="interactive-process-item">
          <div className="interactive-inner-process" data-index={3}>
            <div className="process-content-wap">
              <div className="interactive-process-item-wap">
                <div className="interactive-process-item-body-wap">
                  <div className="interactive-process-item-content-wap">
                    <h3>
                      <a href="products.html">{text.designerPatternTiles}</a>
                    </h3>
                    <p>
                      Designer tiles crafted with precision patterns and refine
                      finishes, offering distinctive.
                    </p>
                  </div>
                  <div className="interactive-process-item-btn">
                    <a href="products.html" className="readmore-btn">
                      {text.viewProduct}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Interactive Process Item End */}
      </div>
      {/* Interactive Inner Grid End */}
      {/* Interactive Process Image Start */}
      <div className="interactive-process-list-image">
        <div
          className="interactive-process-image img-0 show"
          data-bg="images/interactive-process-image-1.jpg"
          style={{
            backgroundImage: 'url("images/interactive-process-image-1.jpg")'
          }}
        />
        <div
          className="interactive-process-image img-1"
          data-bg="images/interactive-process-image-2.jpg"
          style={{
            backgroundImage: 'url("images/interactive-process-image-2.jpg")'
          }}
        />
        <div
          className="interactive-process-image img-2"
          data-bg="images/interactive-process-image-3.jpg"
          style={{
            backgroundImage: 'url("images/interactive-process-image-3.jpg")'
          }}
        />
        <div
          className="interactive-process-image img-3"
          data-bg="images/interactive-process-image-4.jpg"
          style={{
            backgroundImage: 'url("images/interactive-process-image-4.jpg")'
          }}
        />
      </div>
      {/* Interactive Process Image End */}
    </div>
  </div>
  {/* Interactive Process Wrapper End */}
</div>




<div className="our-core-features">
  <div className="container">
    <div className="row">
      <div className="col-xl-6">
        {/* Core Features Image Box Start */}
        <div
          className="core-features-image-box wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          {/* Core Features Image Start */}
          <div className="core-features-image">
            <figure className="image-anime">
              <img src="/images/our-core-features-image.jpg" alt="" />
            </figure>
          </div>
          {/* Core Features Image End */}
          {/* Core Features CTA Box Start */}
          <div className="core-features-cta-box">
            {/* Core Features CTA Image Start */}
            <div className="core-features-cta-image">
              <img src="/images/icon-core-features-cta-box.svg" alt="" />
            </div>
            {/* Core Features CTA Image End */}
            {/* Core Features CTA Info Start */}
            <div className="core-features-cta-info">
              <div className="core-features-cta-info-header">
                <h3>
                  <span className="counter">4.9</span>/5
                </h3>
                <div className="core-features-cta-rating">
                  <ThemeIcon name="star" />
                  <ThemeIcon name="star" />
                  <ThemeIcon name="star" />
                  <ThemeIcon name="star" />
                  <ThemeIcon name="star" />
                </div>
              </div>
              <div className="core-features-cta-content">
                <p>{text.basedOnReviews}</p>
              </div>
            </div>
            {/* Core Features CTA Info End */}
          </div>
          {/* Core Features CTA Box End */}
        </div>
        {/* Core Features Image Box End */}
      </div>
      <div className="col-xl-6">
        {/* Core Feature Content Start */}
        <div className="core-features-content">
          {/* Section title Start */}
          <div className="section-title">
            <span
              className="section-sub-title wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              {isArabic ? 'مميزاتنا الأساسية' : 'Our Core Features'}
            </span>
            <h2
              className="text-anime-style-3"
              data-cursor="-opaque"
              aria-label="Reliable features built for lasting performance"
              style={{ perspective: 400 }}
            >
              <div
                className="split-line"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "block",
                  textAlign: "start"
                }}
              >
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    R
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    l
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    a
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    b
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    l
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    f
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    a
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    t
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    u
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    r
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    s
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    b
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    u
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    l
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    t
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    f
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    o
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    r
                  </div>
                </div>{" "}
              </div>
              <div
                className="split-line"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "block",
                  textAlign: "start"
                }}
              >
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    l
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    a
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    s
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    t
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    n
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    g
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    p
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    r
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    f
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    o
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    r
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    m
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    a
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    n
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    c
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                </div>
              </div>
            </h2>
            <p
              className="wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp"
              }}
            >
              We use proven installation methods to deliver clean alignment,
              durable finishes, and reliable long-term performance.
            </p>
          </div>
          {/* Section title End */}
          {/* Features Accordion Start */}
          <div className="features-accordion" id="faccordion">
            {/* FAQ Item Start */}
            <div
              className="accordion-item wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <h2 className="accordion-header" id="fheading1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#fcollapse1"
                  aria-expanded="true"
                  aria-controls="fcollapse1"
                >
                  <img src="/images/icon-core-features-accordion-1.svg" alt="" />{" "}
                  Hygienic
                </button>
              </h2>
              <div
                id="fcollapse1"
                className="accordion-collapse collapse show"
                role="region"
                aria-labelledby="fheading1"
                data-bs-parent="#faccordion"
              >
                <div className="accordion-body">
                  <p>
                    Non-porous surfaces that resist stains, bacteria, and
                    moisture, making them easy to clean and ideal for healthy
                    living spaces.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ Item End */}
            {/* FAQ Item Start */}
            <div
              className="accordion-item wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp"
              }}
            >
              <h2 className="accordion-header" id="fheading2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#fcollapse2"
                  aria-expanded="true"
                  aria-controls="fcollapse2"
                >
                  <img src="/images/icon-core-features-accordion-2.svg" alt="" />{" "}
                  Easy To Clean
                </button>
              </h2>
              <div
                id="fcollapse2"
                className="accordion-collapse collapse"
                role="region"
                aria-labelledby="fheading2"
                data-bs-parent="#faccordion"
              >
                <div className="accordion-body">
                  <p>
                    Non-porous surfaces that resist stains, bacteria, and
                    moisture, making them easy to clean and ideal for healthy
                    living spaces.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ Item End */}
            {/* FAQ Item Start */}
            <div
              className="accordion-item wow fadeInUp"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp"
              }}
            >
              <h2 className="accordion-header" id="fheading3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#fcollapse3"
                  aria-expanded="true"
                  aria-controls="fcollapse3"
                >
                  <img src="/images/icon-core-features-accordion-3.svg" alt="" />{" "}
                  Hygienic
                </button>
              </h2>
              <div
                id="fcollapse3"
                className="accordion-collapse collapse"
                role="region"
                aria-labelledby="fheading3"
                data-bs-parent="#faccordion"
              >
                <div className="accordion-body">
                  <p>
                    Non-porous surfaces that resist stains, bacteria, and
                    moisture, making them easy to clean and ideal for healthy
                    living spaces.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ Item End */}
            {/* FAQ Item Start */}
            <div
              className="accordion-item wow fadeInUp"
              data-wow-delay="0.6s"
              style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeInUp"
              }}
            >
              <h2 className="accordion-header" id="fheading4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#fcollapse4"
                  aria-expanded="true"
                  aria-controls="fcollapse4"
                >
                  <img src="/images/icon-core-features-accordion-4.svg" alt="" />{" "}
                  Impact Resistant
                </button>
              </h2>
              <div
                id="fcollapse4"
                className="accordion-collapse collapse"
                role="region"
                aria-labelledby="fheading4"
                data-bs-parent="#faccordion"
              >
                <div className="accordion-body">
                  <p>
                    Non-porous surfaces that resist stains, bacteria, and
                    moisture, making them easy to clean and ideal for healthy
                    living spaces.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ Item End */}
          </div>
          {/* Features Accordion End */}
          {/* Core Features Button Start */}
          <div
            className="core-features-btn wow fadeInUp"
            data-wow-delay="0.8s"
            style={{
              visibility: "visible",
              animationDelay: "0.8s",
              animationName: "fadeInUp"
            }}
          >
            <a href="contact.html" className="btn-default">
              {text.learnMore}
            </a>
          </div>
          {/* Core Features Button End */}
        </div>
        {/* Core Feature Content End */}
      </div>
    </div>
  </div>
</div>



<div className="cta-box dark-section parallaxie">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-7">
        {/* CTA Box Content Start */}
        <div className="cta-box-content">
          {/* Section title Start */}
          <div className="section-title">
            <span
              className="section-sub-title wow fadeInUp"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              {text.contactUsToday}
            </span>
            <h2
              className="text-anime-style-3"
              data-cursor="-opaque"
              aria-label="Let's discuss your tiles and marble requirements"
              style={{ perspective: 400 }}
            >
              <div
                className="split-line"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "block",
                  textAlign: "start"
                }}
              >
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    L
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    t
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    '
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    s
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    d
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    s
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    c
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    u
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    s
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    s
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    y
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    o
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    u
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    r
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    t
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    l
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    s
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    a
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    n
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    d
                  </div>
                </div>{" "}
              </div>
              <div
                className="split-line"
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "block",
                  textAlign: "start"
                }}
              >
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    m
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    a
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    r
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    b
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    l
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                </div>{" "}
                <div
                  aria-hidden="true"
                  style={{ position: "relative", display: "inline-block" }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    r
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    q
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    u
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    i
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    r
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    m
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    e
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    n
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    t
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1
                    }}
                  >
                    s
                  </div>
                </div>
              </div>
            </h2>
            <p
              className="wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp"
              }}
            >
              {isArabic
                ? 'دعنا نناقش احتياجاتك من البلاط والرخام ونجد الحل المثالي لمشروعك. خبراؤنا جاهزون لإرشادك بمنتجات فاخرة.'
                : "Let's discuss your tiles and marble requirements & find the perfect solution for your project. Our experts are ready to guide you with premium products."}
            </p>
          </div>
          {/* Section title End */}
          {/* CTA Box Contact Content Start */}
          <div
            className="cta-box-contact-content wow fadeInUp"
            data-wow-delay="0.4s"
            style={{
              visibility: "visible",
              animationDelay: "0.4s",
              animationName: "fadeInUp"
            }}
          >
            <p>{text.needHelpCallUs}</p>
            <h3>
              <a href="tel:123456789">+(123) 456-789</a>
            </h3>
          </div>
          {/* CTA Box Contact Content End */}
        </div>
        {/* CTA Box Content End */}
      </div>
      <div className="col-xl-5">
        {/* Contact Us Circle Start */}
        <div
          className="contact-us-circle wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <a href="contact.html">
            <img src="/images/contact-us-cta-circle.svg" alt="" />
          </a>
        </div>
        {/* Contact Us Circle End */}
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        {/* CTA Box Counter List Start */}
        <div
          className="cta-box-counter-list wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          {/* CTA Box Counter Item Start */}
          <div className="cta-box-counter-item">
            <div className="icon-box">
              <img src="/images/icon-cta-box-1.svg" alt="" />
            </div>
            <div className="cta-box-counter-item-content">
              <h2>
                <span className="counter">50</span>+
              </h2>
              <p>{text.riyadhSupplyHubs}</p>
            </div>
          </div>
          {/* CTA Box Counter Item End */}
          {/* CTA Box Counter Item Start */}
          <div className="cta-box-counter-item">
            <div className="icon-box">
              <img src="/images/icon-cta-box-2.svg" alt="" />
            </div>
            <div className="cta-box-counter-item-content">
              <h2>
                <span className="counter">3500</span>+
              </h2>
              <p>{text.riyadhProjectsCompleted}</p>
            </div>
          </div>
          {/* CTA Box Counter Item End */}
          {/* CTA Box Counter Item Start */}
          <div className="cta-box-counter-item">
            <div className="icon-box">
              <img src="/images/icon-cta-box-3.svg" alt="" />
            </div>
            <div className="cta-box-counter-item-content">
              <h2>
                <span className="counter">150</span>+
              </h2>
              <p>{text.authorizedRiyadhPartners}</p>
            </div>
          </div>
          {/* CTA Box Counter Item End */}
        </div>
        {/* CTA Box Counter List End */}
      </div>
    </div>
  </div>
</div>



<div className="our-partners">
  <div className="container">
    <div className="row section-row align-items-center">
      <div className="col-xl-6">
        {/* Section Title Start */}
        <div className="section-title">
          <span
            className="section-sub-title wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            Our Riyadh Presence
          </span>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
              aria-label="Trusted by partners and projects in Riyadh"
            style={{ perspective: 400 }}
          >
            <div
              className="split-line"
              aria-hidden="true"
              style={{
                position: "relative",
                display: "block",
                textAlign: "start"
              }}
            >
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  T
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  r
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  u
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  d
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  b
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  y
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  p
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  a
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  r
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  n
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  r
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  a
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  n
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  d
                </div>
              </div>{" "}
            </div>
            <div
              className="split-line"
              aria-hidden="true"
              style={{
                position: "relative",
                display: "block",
                textAlign: "start"
              }}
            >
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  p
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  r
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  o
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  j
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  c
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  w
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  o
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  r
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  l
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  d
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  w
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  d
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
              </div>
            </div>
          </h2>
        </div>
        {/* Section Title End */}
      </div>
      <div className="col-xl-6">
        {/* Section Content Btn Start */}
        <div className="section-content-btn">
          {/* Section Title Content Start */}
          <div
            className="section-title-content wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp"
            }}
          >
            <p>
              Our expertise and commitment to excellence have earned the trust
              of clients and collaborators across Riyadh, delivering successful
              outcomes for residential and commercial spaces.
            </p>
          </div>
          {/* Section Title Content End */}
          {/* Section Button Start */}
          <div
            className="section-btn wow fadeInUp"
            data-wow-delay="0.4s"
            style={{
              visibility: "visible",
              animationDelay: "0.4s",
              animationName: "fadeInUp"
            }}
          >
            <a className="btn-default" href="contact.html">
              {text.contactUsToday}
            </a>
          </div>
          {/* Section Button End */}
        </div>
        {/* Section Content Btn End */}
      </div>
    </div>
    <div className="row">
      <div className="col-xl-4 col-md-6">
        {/* Our Partners Item Start */}
        <div
          className="partners-item wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <div className="partners-item-header">
            <div className="icon-box">
              <img src="/images/icon-our-partners-1.svg" alt="" />
            </div>
            <div className="partners-item-counter">
              <div className="partners-item-counter-number">
                <h2>
                  <span className="counter">8</span>*7
                </h2>
              </div>
              <div className="partners-item-counter-content">
                <h3>{text.riyadhSupportAvailable}</h3>
              </div>
            </div>
          </div>
          <div className="partners-item-content">
            <p>
              Our dedicated support team is available to assist clients across
              Riyadh with fast and reliable coordination.
            </p>
          </div>
        </div>
        {/* Our Partners Item End */}
      </div>
      <div className="col-xl-4 col-md-6">
        {/* Our Partners Item Start */}
        <div
          className="partners-item wow fadeInUp"
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp"
          }}
        >
          <div className="partners-item-header">
            <div className="icon-box">
              <img src="/images/icon-our-partners-2.svg" alt="" />
            </div>
            <div className="partners-item-counter">
              <div className="partners-item-counter-number">
                <h2>
                  <span className="counter">34</span>%
                </h2>
              </div>
              <div className="partners-item-counter-content">
                <h3>{text.customerSatisfactionRate}</h3>
              </div>
            </div>
          </div>
          <div className="partners-item-content">
            <p>
              {isArabic
                ? 'بفضل معدل رضا مرتفع باستمرار، نقدم حلولًا موثوقة وعالية الجودة تتجاوز التوقعات.'
                : 'With a consistently high satisfaction rate, we deliver reliable, high-quality solutions that exceed expectations.'}
            </p>
          </div>
        </div>
        {/* Our Partners Item End */}
      </div>
      <div className="col-xl-4 col-md-6">
        {/* Our Partners Item Start */}
        <div
          className="partners-item wow fadeInUp"
          data-wow-delay="0.4s"
          style={{
            visibility: "visible",
            animationDelay: "0.4s",
            animationName: "fadeInUp"
          }}
        >
          <div className="partners-item-header">
            <div className="icon-box">
              <img src="/images/icon-our-partners-3.svg" alt="" />
            </div>
            <div className="partners-item-counter">
              <div className="partners-item-counter-number">
                <h2>
                  <span className="counter">17</span>+
                </h2>
              </div>
              <div className="partners-item-counter-content">
                <h3>Awards &amp; Recognitions</h3>
              </div>
            </div>
          </div>
          <div className="partners-item-content">
            <p>
              Our commitment to excellence and innovation has been recognized by
              project partners across Riyadh.
            </p>
          </div>
        </div>
        {/* Our Partners Item End */}
      </div>
      <div className="col-lg-12">
        {/* Section Footer Text Start */}
        <div
          className="section-footer-text section-satisfy-img wow fadeInUp"
          data-wow-delay="0.6s"
          style={{
            visibility: "visible",
            animationDelay: "0.6s",
            animationName: "fadeInUp"
          }}
        >
          {/* Satisfy Client Images Start */}
          <div className="satisfy-client-images">
            <div className="satisfy-client-image">
              <figure className="image-anime">
                <img src="/images/author-1.jpg" alt="" />
              </figure>
            </div>
            <div className="satisfy-client-image add-more">
              <img src="/images/icon-phone-white.svg" alt="" />
            </div>
          </div>
          {/* Satisfy Client Images End */}
          <p>
            Let's make something great work together.{" "}
            <a href="contact.html">{text.getFreeQuote}</a>
          </p>
        </div>
        {/* Section Footer Text End */}
      </div>
    </div>
  </div>
</div>





<div className="our-testimonials dark-section parallaxie">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        {/* Section Title Start */}
        <div className="section-title section-title-center">
          <span
            className="section-sub-title wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            {isArabic ? 'آراء عملائنا' : 'Our Testimonials'}
          </span>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
            aria-label="Trusted voices that reflect"
            style={{ perspective: 400 }}
          >
            <div
              className="split-line"
              aria-hidden="true"
              style={{
                position: "relative",
                display: "block",
                textAlign: "center"
              }}
            >
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  T
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  r
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  u
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  d
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  v
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  o
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  c
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  h
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  a
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  r
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  f
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  l
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  c
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
              </div>
            </div>
          </h2>
          <p
            className="wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp"
            }}
          >
            {isArabic
              ? 'استمع مباشرة إلى عملائنا وهم يشاركون تجاربهم مع الجودة والحرفية والخدمة؛ تعكس كلماتهم التزامنا بالتميّز.'
              : 'Hear directly from our clients as they share their experiences with our quality, craftsman-ship, and service, their words reflect our commitment to excellence.'}
          </p>
        </div>
        {/* Section Title End */}
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        {/* Testimonial Slider Start */}
        <div
          className="testimonial-slider wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div
              className="swiper-wrapper"
              data-cursor-text="Drag"
              id="swiper-wrapper-5210e5107ccf05cb8"
              aria-live="off"
              style={{
                transitionDuration: "0ms",
                transform: "translate3d(-433.333px, 0px, 0px)",
                transitionDelay: "0ms"
              }}
            >
              {/* Testimonial Slide Start */}
              {/* Testimonial Slide End */}
              {/* Testimonial Slide Start */}
              {/* Testimonial Slide End */}
              {/* Testimonial Slide Start */}
              {/* Testimonial Slide End */}
              {/* Testimonial Slide Start */}
              {/* Testimonial Slide End */}
              <div
                className="swiper-slide swiper-slide-prev"
                role="group"
                aria-label="2 / 4"
                style={{ width: "403.333px", marginRight: 30 }}
                data-swiper-slide-index={1}
              >
                {/* Testimonial Item Start */}
                <div className="testimonial-item">
                  <div className="testimonial-item-header">
                    <div className="testimonial-author-image">
                      <figure className="image-anime">
                        <img src="/images/author-2.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="testimonial-item-quote">
                      <img src="/images/testimonial-quote.svg" alt="" />
                    </div>
                  </div>
                  <div className="testimonial-item-body">
                    <div className="testimonial-item-rating">
                      <ThemeIcon name="star" />
                      <ThemeIcon name="star" />
                      <ThemeIcon name="star" />
                      <ThemeIcon name="star" />
                      <ThemeIcon name="star" />
                    </div>
                    <div className="testimonial-item-content">
                      <p>
                        We selected their tiles for a retail project &amp; the
                        feedback has been excellent. Durable, stylish, &amp;
                        perfect for high-traffic spaces.
                      </p>
                    </div>
                    <div className="testimonial-author-content">
                      <h2>{text.testimonialNameOne}</h2>
                      <p>{text.testimonialRoleOne}</p>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item End */}
              </div>
              <div
                className="swiper-slide swiper-slide-active"
                role="group"
                aria-label="3 / 4"
                style={{ width: "403.333px", marginRight: 30 }}
                data-swiper-slide-index={2}
              >
                {/* Testimonial Item Start */}
                <div className="testimonial-item">
                  <div className="testimonial-item-header">
                    <div className="testimonial-author-image">
                      <figure className="image-anime">
                        <img src="/images/author-3.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="testimonial-item-quote">
                      <img src="/images/testimonial-quote.svg" alt="" />
                    </div>
                  </div>
                  <div className="testimonial-item-body">
                    <div className="testimonial-item-rating">
                      <ThemeIcon name="star" />
                      <ThemeIcon name="star" />
                      <ThemeIcon name="star" />
                      <ThemeIcon name="star" />
                      <ThemeIcon name="star" />
                    </div>
                    <div className="testimonial-item-content">
                      <p>
                        {isArabic
                          ? 'ارتقى البلاط بمظهر التصميم الداخلي لدينا فورًا. التشطيب مثالي، والجودة تبدو فاخرة بكل معنى الكلمة.'
                          : 'The tiles instantly elevated the look of our interiors. The finish is flawless, & the quality truly feels premium in every sense.'}
                      </p>
                    </div>
                    <div className="testimonial-author-content">
                      <h2>{text.testimonialNameTwo}</h2>
                      <p>{text.testimonialRoleTwo}</p>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item End */}
              </div>
              <div
                className="swiper-slide swiper-slide-next"
                role="group"
                aria-label="4 / 4"
                style={{ width: "403.333px", marginRight: 30 }}
                data-swiper-slide-index={3}
              >
                {/* Testimonial Item Start */}
                <div className="testimonial-item">
                  <div className="testimonial-item-header">
                    <div className="testimonial-author-image">
                      <figure className="image-anime">
                        <img src="/images/author-4.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="testimonial-item-quote">
                      <img src="/images/testimonial-quote.svg" alt="" />
                    </div>
                  </div>
                  <div className="testimonial-item-body">
                    <div className="testimonial-item-rating">
                      <ThemeIcon name="star" />
                      <ThemeIcon name="star" />
                      <ThemeIcon name="star" />
                      <ThemeIcon name="star" />
                      <ThemeIcon name="star" />
                    </div>
                    <div className="testimonial-item-content">
                      <p>
                        The team helped me choose the perfect tiles for living
                        room. The installation was flawless space looks
                        absolutely stunning!
                      </p>
                    </div>
                    <div className="testimonial-author-content">
                      <h2>{text.testimonialNameThree}</h2>
                      <p>{text.testimonialRoleThree}</p>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item End */}
              </div>
              <div
                className="swiper-slide"
                role="group"
                aria-label="1 / 4"
                style={{ width: "403.333px", marginRight: 30 }}
                data-swiper-slide-index={0}
              >
                {/* Testimonial Item Start */}
                <div className="testimonial-item">
                  <div className="testimonial-item-header">
                    <div className="testimonial-author-image">
                      <figure className="image-anime">
                        <img src="/images/author-1.jpg" alt="" />
                      </figure>
                    </div>
                    <div className="testimonial-item-quote">
                      <img src="/images/testimonial-quote.svg" alt="" />
                    </div>
                  </div>
                  <div className="testimonial-item-body">
                    <div className="testimonial-item-rating">
                      <ThemeIcon name="star" />
                      <ThemeIcon name="star" />
                      <ThemeIcon name="star" />
                      <ThemeIcon name="star" />
                      <ThemeIcon name="star" />
                    </div>
                    <div className="testimonial-item-content">
                      <p>
                        We used these tiles in a hotel project, and the results
                        were impressive - luxurious appearance with practical
                        performance.
                      </p>
                    </div>
                    <div className="testimonial-author-content">
                      <h2>{text.testimonialNameFour}</h2>
                      <p>{text.testimonialRoleFour}</p>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item End */}
              </div>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>
        </div>
        {/* Testimonial Slider End */}
      </div>
      <div className="col-lg-12">
        {/* Section Footer Text Start */}
        <div
          className="section-footer-text section-satisfy-img wow fadeInUp"
          data-wow-delay="0.2s"
          style={{
            visibility: "hidden",
            animationDelay: "0.2s",
            animationName: "none"
          }}
        >
          {/* Satisfy Client Images Start */}
          <div className="satisfy-client-images">
            <div className="satisfy-client-image">
              <figure className="image-anime">
                <img src="/images/author-1.jpg" alt="" />
              </figure>
            </div>
            <div className="satisfy-client-image add-more">
              <img src="/images/icon-phone-white.svg" alt="" />
            </div>
          </div>
          {/* Satisfy Client Images End */}
          <p>
            Let's make something great work together.{" "}
            <a href="contact.html">{text.getFreeQuote}</a>
          </p>
        </div>
        {/* Section Footer Text End */}
      </div>
    </div>
  </div>
</div>




<div className="our-blog">
  <div className="container">
    <div className="row section-row">
      <div className="col-lg-12">
        {/* Section Title Start */}
        <div className="section-title section-title-center">
          <span
            className="section-sub-title wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            {text.latestBlogs}
          </span>
          <h2
            className="text-anime-style-3"
            data-cursor="-opaque"
            aria-label="Expert inspiration for beautiful living spaces"
            style={{ perspective: 400 }}
          >
            <div
              className="split-line"
              aria-hidden="true"
              style={{
                position: "relative",
                display: "block",
                textAlign: "center"
              }}
            >
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  E
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  x
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  p
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  r
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  n
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  p
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  r
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  a
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  o
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  n
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  f
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  o
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  r
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  b
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  a
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  u
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  t
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  f
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  u
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  l
                </div>
              </div>{" "}
            </div>
            <div
              className="split-line"
              aria-hidden="true"
              style={{
                position: "relative",
                display: "block",
                textAlign: "center"
              }}
            >
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  l
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  v
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  i
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  g
                </div>
              </div>{" "}
              <div
                aria-hidden="true"
                style={{ position: "relative", display: "inline-block" }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  p
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  a
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  c
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  e
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: 1
                  }}
                >
                  s
                </div>
              </div>
            </div>
          </h2>
        </div>
        {/* Section Title End */}
      </div>
    </div>
    <div className="row">
      <div className="col-xl-4 col-md-6">
        {/* Post Item Start */}
        <div
          className="post-item wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          {/* Post Featured Image Start */}
          <div className="post-featured-image">
            <a href="blog-single.html" data-cursor-text="View">
              <figure>
                <img src="/images/post-1.jpg" alt="" />
              </figure>
            </a>
          </div>
          {/* Post Featured Image End */}
          {/* Post Item Body Start */}
          <div className="post-item-body">
            {/* Post Item Content Start */}
            <div className="post-item-content">
              <h2>
                <a href="blog-single.html">
                  {text.blogTitleOne}
                </a>
              </h2>
            </div>
            {/* Post Item Content End */}
            {/* Post Item Button Start*/}
            <div className="post-item-btn">
              <a href="blog-single.html" className="readmore-btn">
                {text.learnMore}
              </a>
            </div>
            {/* Post Item Button End*/}
          </div>
          {/* Post Item Body End */}
        </div>
        {/* Post Item End */}
      </div>
      <div className="col-xl-4 col-md-6">
        {/* Post Item Start */}
        <div
          className="post-item wow fadeInUp"
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp"
          }}
        >
          {/* Post Featured Image Start */}
          <div className="post-featured-image">
            <a href="blog-single.html" data-cursor-text="View">
              <figure>
                <img src="/images/post-2.jpg" alt="" />
              </figure>
            </a>
          </div>
          {/* Post Featured Image End */}
          {/* Post Item Body Start */}
          <div className="post-item-body">
            {/* Post Item Content Start */}
            <div className="post-item-content">
              <h2>
                <a href="blog-single.html">
                  {text.blogTitleTwo}
                </a>
              </h2>
            </div>
            {/* Post Item Content End */}
            {/* Post Item Button Start*/}
            <div className="post-item-btn">
              <a href="blog-single.html" className="readmore-btn">
                {text.learnMore}
              </a>
            </div>
            {/* Post Item Button End*/}
          </div>
          {/* Post Item Body End */}
        </div>
        {/* Post Item End */}
      </div>
      <div className="col-xl-4 col-md-6">
        {/* Post Item Start */}
        <div
          className="post-item wow fadeInUp"
          data-wow-delay="0.4s"
          style={{
            visibility: "visible",
            animationDelay: "0.4s",
            animationName: "fadeInUp"
          }}
        >
          {/* Post Featured Image Start */}
          <div className="post-featured-image">
            <a href="blog-single.html" data-cursor-text="View">
              <figure>
                <img src="/images/post-3.jpg" alt="" />
              </figure>
            </a>
          </div>
          {/* Post Featured Image End */}
          {/* Post Item Body Start */}
          <div className="post-item-body">
            {/* Post Item Content Start */}
            <div className="post-item-content">
              <h2>
                <a href="blog-single.html">
                  {text.blogTitleThree}
                </a>
              </h2>
            </div>
            {/* Post Item Content End */}
            {/* Post Item Button Start*/}
            <div className="post-item-btn">
              <a href="blog-single.html" className="readmore-btn">
                {text.learnMore}
              </a>
            </div>
            {/* Post Item Button End*/}
          </div>
          {/* Post Item Body End */}
        </div>
        {/* Post Item End */}
      </div>
    </div>
  </div>
</div>




    </div>
  )
}

export default Home
