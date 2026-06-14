import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applyLanguageToDocument, useLanguage } from "./Language";

const resetSwiperMarkup = (swiperElement) => {
  if (!swiperElement) {
    return;
  }

  if (swiperElement.swiper?.destroy) {
    swiperElement.swiper.destroy(true, true);
  }

  swiperElement.classList.remove("swiper-initialized", "swiper-horizontal", "swiper-backface-hidden");

  const wrapper = swiperElement.querySelector(".swiper-wrapper");
  if (wrapper) {
    wrapper.removeAttribute("style");
    wrapper.removeAttribute("id");
    wrapper.removeAttribute("aria-live");
  }

  swiperElement.querySelectorAll(".swiper-slide").forEach((slide) => {
    slide.classList.remove(
      "swiper-slide-active",
      "swiper-slide-prev",
      "swiper-slide-next",
      "swiper-slide-visible",
      "swiper-slide-fully-visible"
    );
    slide.removeAttribute("style");
    slide.removeAttribute("role");
    slide.removeAttribute("aria-label");
  });

  swiperElement.querySelector(".swiper-notification")?.remove();
};

export default function useThemeRuntime() {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const $ = window.jQuery;
      const Swiper = window.Swiper;

      if ($?.fn?.magnificPopup) {
        $(".popup-video").each(function initializePopup() {
          const $element = $(this);

          if ($element.data("magnificPopup")) {
            $element.magnificPopup("destroy");
          }

          $element.magnificPopup({
            type: "iframe",
            disableOn: () => window.innerWidth < 992,
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true,
          });
        });
      }

      if (Swiper) {
        document.querySelectorAll(".company-supports-slider .swiper").forEach((element) => {
          resetSwiperMarkup(element);
          new Swiper(element, {
            slidesPerView: 2,
            speed: 2000,
            spaceBetween: 30,
            loop: true,
            autoplay: {
              delay: 5000,
            },
            breakpoints: {
              767: {
                slidesPerView: 4,
              },
              1300: {
                slidesPerView: 5,
              },
            },
          });
        });

        document.querySelectorAll(".testimonial-slider .swiper").forEach((element) => {
          resetSwiperMarkup(element);
          new Swiper(element, {
            slidesPerView: 1,
            speed: 1500,
            spaceBetween: 30,
            loop: true,
            autoplay: {
              delay: 5000,
            },
            breakpoints: {
              768: {
                slidesPerView: 2,
              },
              1300: {
                slidesPerView: 3,
              },
            },
          });
        });
      }

      const heroVideo = document.getElementById("myvideo");
      if (heroVideo && !heroVideo.dataset.initialized) {
        heroVideo.dataset.initialized = "true";
        heroVideo.muted = true;
        heroVideo.defaultMuted = true;
        heroVideo.setAttribute("muted", "");
        heroVideo.setAttribute("playsinline", "");
        heroVideo.setAttribute("webkit-playsinline", "true");

        const playPromise = heroVideo.play?.();
        if (playPromise?.catch) {
          playPromise.catch(() => {});
        }
      }

      applyLanguageToDocument(language);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, language]);
}
