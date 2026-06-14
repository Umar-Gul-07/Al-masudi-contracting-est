import React, { useEffect, useRef } from "react";

const VIDEO_SOURCES = [
  "https://demo.awaikenthemes.com/assets/videos/tilux-hero-video.mp4",
  "/videos/hero-bg-video.mp4",
];

function HeroVideo() {
  const videoRef = useRef(null);
  const sourceIndexRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return undefined;
    }

    const container = video.closest(".hero-bg-video");

    const tryPlay = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "true");

      const playPromise = video.play?.();
      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
    };

    const showFallback = () => {
      video.style.display = "none";
      container?.classList.add("hero-bg-video--fallback");
    };

    const loadSource = (index) => {
      sourceIndexRef.current = index;

      if (index >= VIDEO_SOURCES.length) {
        showFallback();
        return;
      }

      video.src = VIDEO_SOURCES[index];
      video.load();
    };

    const handleError = () => {
      loadSource(sourceIndexRef.current + 1);
    };

    const handleLoadedData = () => {
      tryPlay();
    };

    const unlockPlay = () => {
      tryPlay();
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);
    document.addEventListener("touchstart", unlockPlay, { once: true, passive: true });
    document.addEventListener("click", unlockPlay, { once: true });

    loadSource(0);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
      document.removeEventListener("touchstart", unlockPlay);
      document.removeEventListener("click", unlockPlay);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      loop
      preload="auto"
      id="myvideo"
    />
  );
}

export default HeroVideo;
