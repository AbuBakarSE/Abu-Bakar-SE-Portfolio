// GSAP Animations
    
    // Animate Navigation on load
    gsap.from('nav', {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.logo', {
      x: -50,
      opacity: 0,
      duration: 1,
      delay: 0.3
    });

    gsap.from('.nav-links li', {
      y: -20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.5
    });

    gsap.from('.nav-cta', {
      x: 50,
      opacity: 0,
      duration: 1,
      delay: 0.8
    });

    // Animate Hero Section - Left side (content)
    gsap.from('.hero-greeting', {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 1
    });

    gsap.from('.hero-name', {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 1.2
    });

    gsap.from('.hero-title', {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 1.4
    });

    gsap.from('.hero-description', {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 1.6
    });

    gsap.from('.hero-buttons', {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 1.8
    });

    gsap.from('.hero-social', {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 2
    });

    // Animate Hero Section - Right side (profile picture)
    gsap.from('.hero-profile', {
      opacity: 0,
      scale: 0.5,
      rotation: -10,
      duration: 1.5,
      delay: 0.8,
      ease: 'back.out(1.7)'
    });

    gsap.from('.scroll-indicator', {
      opacity: 0,
      duration: 1,
      delay: 2.2
    });

    // Animate particles
    gsap.to('.particle', {
      y: 'random(-100, 100)',
      x: 'random(-100, 100)',
      duration: 'random(3, 5)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.2
    });

    // Mobile Menu Functionality
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Open menu
    menuBtn.addEventListener('click', function() {
      mobileMenu.classList.add('active');
    });

    // Close menu
    closeBtn.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.remove('active');
      }
    });

    // Smooth scroll with offset for fixed nav
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const offset = 80; // Height of fixed nav
          const targetPosition = target.offsetTop - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Change nav background on scroll
    window.addEventListener('scroll', function() {
      const nav = document.querySelector('nav');
      if (window.scrollY > 50) {
        nav.style.background = 'rgba(17, 24, 39, 0.95)';
      } else {
        nav.style.background = 'rgba(17, 24, 39, 0.8)';
      }
    });

    // GSAP ScrollTrigger for About Section
    gsap.registerPlugin(ScrollTrigger);

    // Animate About Header
    gsap.from('.about-header', {
      scrollTrigger: {
        trigger: '.about-header',
        start: 'top 80%'
      },
      opacity: 0,
      y: 50,
      duration: 1
    });

    // Animate About Image
    gsap.from('.about-image-wrapper', {
      scrollTrigger: {
        trigger: '.about-image-wrapper',
        start: 'top 80%'
      },
      opacity: 0,
      scale: 0.8,
      rotation: -10,
      duration: 1.2,
      ease: 'back.out(1.7)'
    });

    // Animate Stats
    gsap.from('.about-stats > div', {
      scrollTrigger: {
        trigger: '.about-stats',
        start: 'top 80%'
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2
    });

    // Animate About Right Content
    gsap.from('.about-right h3', {
      scrollTrigger: {
        trigger: '.about-right',
        start: 'top 80%'
      },
      opacity: 0,
      x: 50,
      duration: 1
    });

    gsap.from('.about-right p', {
      scrollTrigger: {
        trigger: '.about-right',
        start: 'top 80%'
      },
      opacity: 0,
      x: 50,
      duration: 1,
      stagger: 0.2,
      delay: 0.3
    });

    gsap.from('.about-right .flex', {
      scrollTrigger: {
        trigger: '.about-right .flex',
        start: 'top 90%'
      },
      opacity: 0,
      x: 50,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.5
    });