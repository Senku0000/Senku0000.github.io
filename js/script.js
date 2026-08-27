(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("open");
      });
    });
  }

  /* ---------- Scroll spy: highlight active nav link ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var navAnchors = document.querySelectorAll(".nav__link");

  function setActiveLink(id) {
    navAnchors.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + id);
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { spyObserver.observe(s); });
  }

  /* ---------- Scroll reveal ---------- */
  var revealTargets = document.querySelectorAll(
    ".skill-card, .journey-card, .achievement-card, .cert-row, .project-card, .timeline__item, .stat-block, .education-card"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealTargets.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Terminal typing effect ---------- */
  var typeLines = document.querySelectorAll(".type-line");
  if (typeLines.length && !prefersReducedMotion) {
    var i = 0;
    function typeNext() {
      if (i >= typeLines.length) return;
      var el = typeLines[i];
      var text = el.getAttribute("data-text") || "";
      var c = 0;
      var interval = setInterval(function () {
        el.textContent = text.slice(0, c + 1);
        c++;
        if (c >= text.length) {
          clearInterval(interval);
          i++;
          setTimeout(typeNext, 250);
        }
      }, 45);
    }
    typeNext();
  } else {
    typeLines.forEach(function (el) {
      el.textContent = el.getAttribute("data-text") || "";
    });
  }

  /* ---------- Contact form (Formspree/Web3Forms friendly) ---------- */
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");

  if (form && status) {
    form.addEventListener("submit", function (e) {
      var action = form.getAttribute("action") || "";
      if (action.indexOf("[ADD FORMSPREE ID]") !== -1) {
        e.preventDefault();
        status.textContent = "Form endpoint not configured yet — add your Formspree or Web3Forms ID in index.html.";
        return;
      }

      e.preventDefault();
      status.textContent = "Sending...";
      var data = new FormData(form);

      fetch(action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
        .then(function (res) {
          if (res.ok) {
            status.textContent = "Message sent — thank you!";
            form.reset();
          } else {
            status.textContent = "Something went wrong. Please try again or email me directly.";
          }
        })
        .catch(function () {
          status.textContent = "Network error. Please try again or email me directly.";
        });
    });
  }
})();
