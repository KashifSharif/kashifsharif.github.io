// Scroll-reveal: elements fade/slide in as they enter the viewport.
// Respects prefers-reduced-motion (CSS handles the static fallback).
(function () {
  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach(function (el) { io.observe(el); });
})();

// Build mailto links at runtime so the address never appears in the page source.
(function () {
  document.querySelectorAll(".js-mail").forEach(function (el) {
    el.href = "mailto:" + el.dataset.u + "@" + el.dataset.d;
  });
})();


// Fixed header: pad the body by the header's real height and keep it in sync.
(function () {
  var header = document.querySelector(".site-header");
  if (!header) return;
  function sync() {
    document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
  }
  sync();
  window.addEventListener("resize", sync);
  window.addEventListener("load", sync);
})();
