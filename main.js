/**
 * Local Boost Labs - Main JavaScript
 * SEO Agency for HVAC Businesses
 * Vanilla JS - No frameworks
 */

(function() {
  'use strict';

  // DOM Elements
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navDropdowns = document.querySelectorAll('.nav-dropdown');
  const leadForms = document.querySelectorAll('.lead-form');
  const faqQuestions = document.querySelectorAll('.faq-question');
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  /**
   * Initialize all functionality
   */
  function init() {
    initStickyHeader();
    initMobileMenu();
    initDropdowns();
    initFormValidation();
    initSmoothScroll();
    initFAQ();
  }

  /**
   * Sticky Header on Scroll
   */
  function initStickyHeader() {
    if (!header) return;

    let lastScroll = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;

      // Add scrolled class for styling
      if (currentScroll > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  /**
   * Mobile Menu Toggle
   */
  function initMobileMenu() {
    if (!mobileToggle || !navMenu) return;

    mobileToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a:not(.nav-dropdown > a)').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /**
   * Dropdown Menu for Mobile
   */
  function initDropdowns() {
    if (!navDropdowns.length) return;

    navDropdowns.forEach(function(dropdown) {
      const trigger = dropdown.querySelector('.nav-link');

      trigger.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    });
  }

  /**
   * Form Validation
   */
  function initFormValidation() {
    if (!leadForms.length) return;

    leadForms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();

        const isValid = validateForm(form);

        if (isValid) {
          // Show success message
          showFormSuccess(form);
          form.reset();
        }
      });

      // Real-time validation on blur
      form.querySelectorAll('input, textarea').forEach(function(input) {
        input.addEventListener('blur', function() {
          validateField(this);
        });

        input.addEventListener('input', function() {
          // Clear error on input
          const formGroup = this.closest('.form-group');
          if (formGroup && formGroup.classList.contains('error')) {
            formGroup.classList.remove('error');
          }
        });
      });
    });
  }

  /**
   * Validate entire form
   */
  function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach(function(field) {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    return isValid;
  }

  /**
   * Validate individual field
   */
  function validateField(field) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup ? formGroup.querySelector('.form-error') : null;
    let isValid = true;
    let errorMessage = '';

    // Required check
    if (field.hasAttribute('required') && !field.value.trim()) {
      isValid = false;
      errorMessage = 'This field is required';
    }

    // Email validation
    if (field.type === 'email' && field.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
      }
    }

    // Phone validation
    if (field.type === 'tel' && field.value.trim()) {
      const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
      if (!phoneRegex.test(field.value)) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
      }
    }

    // Update UI
    if (formGroup) {
      if (!isValid) {
        formGroup.classList.add('error');
        if (errorElement) {
          errorElement.textContent = errorMessage;
        }
      } else {
        formGroup.classList.remove('error');
      }
    }

    return isValid;
  }

  /**
   * Show success message after form submission
   */
  function showFormSuccess(form) {
    const wrapper = form.closest('.lead-form-wrapper') || form.closest('.contact-form-wrapper');

    if (wrapper) {
      const successMessage = document.createElement('div');
      successMessage.className = 'form-success';
      successMessage.innerHTML = `
        <svg viewBox="0 0 24 24" width="48" height="48" fill="#10b981">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <h3>Thank You!</h3>
        <p>We've received your request. Our Local SEO experts will contact you within 24 hours to discuss your HVAC business SEO strategy.</p>
      `;

      // Style the success message
      successMessage.style.cssText = `
        text-align: center;
        padding: 2rem;
        animation: fadeIn 0.3s ease;
      `;

      // Hide form and show success
      form.style.display = 'none';
      wrapper.appendChild(successMessage);

      // Reset after 5 seconds
      setTimeout(function() {
        form.style.display = '';
        successMessage.remove();
      }, 5000);
    }
  }

  /**
   * Smooth Scroll for anchor links
   */
  function initSmoothScroll() {
    smoothScrollLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        if (href === '#') return;

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();

          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * FAQ Accordion
   */
  function initFAQ() {
    if (!faqQuestions.length) return;

    faqQuestions.forEach(function(question) {
      question.addEventListener('click', function() {
        const faqItem = this.closest('.faq-item');
        const wasActive = faqItem.classList.contains('active');

        // Close all other FAQs
        document.querySelectorAll('.faq-item.active').forEach(function(item) {
          if (item !== faqItem) {
            item.classList.remove('active');
          }
        });

        // Toggle current FAQ
        faqItem.classList.toggle('active', !wasActive);
      });
    });
  }

  /**
   * Scroll to form function (used by CTAs)
   */
  window.scrollToForm = function() {
    const form = document.querySelector('.lead-form-wrapper');
    if (form) {
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = form.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
