/// <reference types="vite/client" />
import DefaultTheme from "vitepress/theme";
import type { EnhanceAppContext } from "vitepress";
import "./custom.css";
import "./home.css";

let observer: IntersectionObserver | null = null;

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer?.unobserve(entry.target);
        }
      }
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );
  return observer;
}

function observeRevealElements() {
  if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return;
  const ob = getObserver();
  const items = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
  items.forEach((el) => ob.observe(el));
}

function setupRevealObserver() {
  // Quét nhiều lần để tóm các phần tử được Vue hydrate/mount sau
  observeRevealElements();
  requestAnimationFrame(observeRevealElements);
  setTimeout(observeRevealElements, 100);
  setTimeout(observeRevealElements, 400);
  setTimeout(observeRevealElements, 1000);
}

export default {
  extends: DefaultTheme,
  enhanceApp({ router }: EnhanceAppContext) {
    if (typeof window === "undefined") return;

    const init = () => setupRevealObserver();

    if (document.readyState === "complete") {
      init();
    } else if (document.readyState === "interactive") {
      requestAnimationFrame(init);
    } else {
      document.addEventListener("DOMContentLoaded", init, { once: true });
    }
    window.addEventListener("load", init, { once: true });

    // Mỗi lần chuyển route, scan lại
    router.onAfterRouteChange = () => {
      // Reset observer để các phần tử .reveal mới được theo dõi
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      setupRevealObserver();
    };
  },
};
