// Typed text animation for hero heading with smooth fade in/out
(function(){
    const phrases = [
      "Building Efficient, Beautiful Web Experiences",
      "Crafting Responsive & Accessible Websites",
      "Blending Design & Technical Expertise",
      "Committed to Continuous Learning"
    ];
    const element = document.getElementById('typed-text');
    const typingDelay = 100;
    const erasingDelay = 60;
    const displayDelay = 1800;
    let phraseIndex = 0;
    let charIndex = 0;
    let isErasing = false;

    function type() {
      if(!element) return;
      const currentPhrase = phrases[phraseIndex];
      if(!isErasing && charIndex <= currentPhrase.length) {
        element.textContent = currentPhrase.substring(0, charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      }
      else if(isErasing && charIndex >= 0){
        element.textContent = currentPhrase.substring(0, charIndex);
        charIndex--;
        setTimeout(type, erasingDelay);
      }
      else {
        isErasing = !isErasing;
        if(!isErasing){
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, typingDelay + 800);
        } else {
          setTimeout(type, displayDelay);
        }
      }
    }
    document.addEventListener('DOMContentLoaded', () => setTimeout(type, 800));
  })();

  // Animate section titles and content on scroll with IntersectionObserver
  (() => {
    const options = {
      threshold: 0.25
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, options);

    document.querySelectorAll('h2.section-title, #about h2, #about p, #about img, #skills-list li, .project-category').forEach(el => {
      observer.observe(el);
    });
  })();

  // Contact form submission simulation
  (() => {
    const form = document.getElementById('contact-form');
    const msg = document.getElementById('contact-msg');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if(!form.checkValidity()) {
        msg.textContent = 'Please fill in all fields correctly.';
        msg.style.color = '#c04542';
        msg.classList.add('visible');
        setTimeout(() => msg.classList.remove('visible'), 4000);
        return;
      }

      msg.textContent = 'Sending message...';
      msg.style.color = '#ef6f6c';
      msg.classList.add('visible');
      setTimeout(() => {
        msg.textContent = 'Thank you for reaching out! I will get back to you soon.';
        form.reset();
        setTimeout(() => {
          msg.classList.remove('visible');
          msg.textContent = '';
        }, 6000);
      }, 1500);
    });
  })();