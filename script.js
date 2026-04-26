const header = document.querySelector("[data-header]");
const revealItems = document.querySelectorAll(".reveal");
const quoteForm = document.querySelector(".quote-form");

const setHeaderState = () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = quoteForm.querySelector("button");
  const originalText = button.textContent;

  button.textContent = "Request Ready";
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    quoteForm.reset();
  }, 1800);
});
