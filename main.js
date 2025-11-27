/**
 * Local Boost Labs - Main JavaScript
 * Vanilla JS only - No frameworks or libraries
 */

(function() {
    'use strict';

    // DOM Elements
    const header = document.querySelector('.header');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');
    const forms = document.querySelectorAll('.lead-form');
    const faqItems = document.querySelectorAll('.faq-item');

    /**
     * Sticky Header Behavior
     * Adds 'scrolled' class when page is scrolled
     */
    function initStickyHeader() {
        if (!header) return;

        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 50) {
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

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Handle dropdowns on mobile
        dropdowns.forEach(function(dropdown) {
            const toggle = dropdown.querySelector('a');
            toggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        });
    }

    /**
     * Smooth Scroll for Anchor Links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');

                if (targetId === '#') return;

                const target = document.querySelector(targetId);

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
     * Form Validation
     */
    function initFormValidation() {
        forms.forEach(function(form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();

                let isValid = true;
                const formGroups = form.querySelectorAll('.form-group');

                // Clear previous errors
                formGroups.forEach(function(group) {
                    group.classList.remove('error');
                });

                // Validate required fields
                const requiredFields = form.querySelectorAll('[required]');
                requiredFields.forEach(function(field) {
                    const value = field.value.trim();
                    const formGroup = field.closest('.form-group');

                    if (!value) {
                        isValid = false;
                        if (formGroup) {
                            formGroup.classList.add('error');
                        }
                    }

                    // Email validation
                    if (field.type === 'email' && value) {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailRegex.test(value)) {
                            isValid = false;
                            if (formGroup) {
                                formGroup.classList.add('error');
                                const errorMsg = formGroup.querySelector('.error-message');
                                if (errorMsg) {
                                    errorMsg.textContent = 'Please enter a valid email address';
                                }
                            }
                        }
                    }

                    // Phone validation
                    if (field.type === 'tel' && value) {
                        const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
                        if (!phoneRegex.test(value)) {
                            isValid = false;
                            if (formGroup) {
                                formGroup.classList.add('error');
                                const errorMsg = formGroup.querySelector('.error-message');
                                if (errorMsg) {
                                    errorMsg.textContent = 'Please enter a valid phone number';
                                }
                            }
                        }
                    }
                });

                if (isValid) {
                    // Show success message
                    const successMsg = form.querySelector('.form-success');
                    if (successMsg) {
                        form.style.display = 'none';
                        successMsg.classList.add('show');
                    } else {
                        // Create success message if not exists
                        const success = document.createElement('div');
                        success.className = 'form-success show';
                        success.innerHTML = '<strong>Thank you!</strong><p>Your request has been received. We\'ll contact you within 24 hours with your free Local SEO strategy.</p>';
                        form.parentNode.appendChild(success);
                        form.style.display = 'none';
                    }

                    // In production, you would submit the form data here
                    // For now, we'll just log it
                    const formData = new FormData(form);
                    console.log('Form submitted:', Object.fromEntries(formData));
                }
            });

            // Real-time validation
            form.querySelectorAll('input, textarea, select').forEach(function(field) {
                field.addEventListener('blur', function() {
                    const formGroup = this.closest('.form-group');
                    if (formGroup && this.required && !this.value.trim()) {
                        formGroup.classList.add('error');
                    }
                });

                field.addEventListener('input', function() {
                    const formGroup = this.closest('.form-group');
                    if (formGroup && this.value.trim()) {
                        formGroup.classList.remove('error');
                    }
                });
            });
        });
    }

    /**
     * FAQ Accordion
     */
    function initFAQ() {
        faqItems.forEach(function(item) {
            const question = item.querySelector('.faq-question');

            if (question) {
                question.addEventListener('click', function() {
                    const isActive = item.classList.contains('active');

                    // Close all other items
                    faqItems.forEach(function(otherItem) {
                        otherItem.classList.remove('active');
                    });

                    // Toggle current item
                    if (!isActive) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    /**
     * Scroll to Form CTA
     */
    function initScrollToForm() {
        document.querySelectorAll('[data-scroll-to-form]').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const form = document.querySelector('.lead-form-wrapper') || document.querySelector('.sidebar-form');

                if (form) {
                    const headerHeight = header ? header.offsetHeight : 0;
                    const formPosition = form.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

                    window.scrollTo({
                        top: formPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Lazy Loading Images
     */
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(function(img) {
                imageObserver.observe(img);
            });
        }
    }

    /**
     * Animate Elements on Scroll
     */
    function initScrollAnimations() {
        if ('IntersectionObserver' in window) {
            const animateObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                        animateObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.service-card, .city-card, .testimonial-card, .stat-card').forEach(function(el) {
                animateObserver.observe(el);
            });
        }
    }

    /**
     * Close mobile menu on resize
     */
    function initResizeHandler() {
        let resizeTimer;

        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth > 768 && navMenu) {
                    navMenu.classList.remove('active');
                    if (mobileToggle) {
                        mobileToggle.classList.remove('active');
                    }
                    document.body.style.overflow = '';
                }
            }, 250);
        });
    }

    /**
     * Initialize all functions on DOM ready
     */
    function init() {
        initStickyHeader();
        initMobileMenu();
        initSmoothScroll();
        initFormValidation();
        initFAQ();
        initScrollToForm();
        initLazyLoading();
        initScrollAnimations();
        initResizeHandler();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
