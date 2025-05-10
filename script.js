// Фиксация шапки
window.addEventListener('scroll', () => {
    const heroHeader = document.querySelector('.hero-header--left');
    const fullHeader = document.querySelector('.hero-header--full');
    const heroHeight = document.querySelector('.hero').offsetHeight;
  
    if (window.scrollY > 50) {
      heroHeader.classList.add('scrolled');
    } else {
      heroHeader.classList.remove('scrolled');
    }
  
    // Переключение шапок
    if (window.scrollY > heroHeight * 0.8) {
      fullHeader.style.display = 'flex';
    } else {
      fullHeader.style.display = 'none';
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");
  
    function animateOnScroll() {
      for (let el of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          el.classList.add("active");
        }
      }
    }
  
    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // сразу запускаем для элементов в зоне видимости
  });
  