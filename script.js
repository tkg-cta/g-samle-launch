document.addEventListener('DOMContentLoaded', function () {
 // Smooth scrolling
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
   e.preventDefault();
   const target = document.querySelector(this.getAttribute('href'));
   if (target) {
    target.scrollIntoView({
     behavior: 'smooth'
    });
   }
  });
 });

 // Scroll Reveal Animation
 const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
 };

 const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
   if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
   }
  });
 }, observerOptions);

 const animatedElements = document.querySelectorAll('.intro-card, .pricing-main, .option-card, .warning-box');
 animatedElements.forEach((el, index) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease-out';
  el.style.transitionDelay = `${index * 0.1}s`; // Stagger effect
  observer.observe(el);
 });

 // Add visible class style dynamically
 const style = document.createElement('style');
 style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
 document.head.appendChild(style);
});
