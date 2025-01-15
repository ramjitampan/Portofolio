
// Importing GSAP and Anime.js (ensure these libraries are included in your project)
import gsap from "gsap";
import anime from "animejs/lib/anime.es.js";

// GSAP animation for feedback items
export const animateFeedbackItems = () => {
  gsap.from(".feedback-item", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
  });
};

// Anime.js animation for the form submission button
export const animateSubmitButton = () => {
  anime({
    targets: ".feedback-form button",
    scale: [1, 1.2, 1],
    duration: 500,
    easing: "easeInOutQuad",
  });
};

// Initialization function to add animations when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Add GSAP animation to feedback items when they appear
  const observer = new MutationObserver(() => {
    animateFeedbackItems();
  });

  const feedbackList = document.querySelector(".feedback-list");
  if (feedbackList) {
    observer.observe(feedbackList, { childList: true });
  }

  // Add Anime.js animation to the submit button on click
  const submitButton = document.querySelector(".feedback-form button");
  if (submitButton) {
    submitButton.addEventListener("click", animateSubmitButton);
  }
});
