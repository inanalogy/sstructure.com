// ===== LANGUAGE SWITCHER =====
let currentLanguage = 'en';

function initLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    currentLanguage = savedLang;
    applyLanguage(currentLanguage);
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', currentLanguage);
    applyLanguage(currentLanguage);
}

function applyLanguage(lang) {
    const html = document.documentElement;
    const langBtn = document.querySelector('.lang-text');

    if (lang === 'ar') {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        if (langBtn) langBtn.textContent = 'English';

        // Update all elements with data-ar attributes
        document.querySelectorAll('[data-ar]').forEach(element => {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = element.getAttribute('data-placeholder-ar') || '';
            } else if (element.tagName === 'OPTION') {
                element.textContent = element.getAttribute('data-ar');
            } else {
                element.textContent = element.getAttribute('data-ar');
            }
        });
    } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        if (langBtn) langBtn.textContent = 'العربية';

        // Update all elements with data-en attributes
        document.querySelectorAll('[data-en]').forEach(element => {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = element.getAttribute('data-placeholder-en') || '';
            } else if (element.tagName === 'OPTION') {
                element.textContent = element.getAttribute('data-en');
            } else {
                element.textContent = element.getAttribute('data-en');
            }
        });
    }
}

// ===== MOBILE MENU TOGGLE =====
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');

            // Animate menu toggle button
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = navList.classList.contains('active')
                ? 'rotate(45deg) translateY(10px)'
                : 'none';
            spans[1].style.opacity = navList.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navList.classList.contains('active')
                ? 'rotate(-45deg) translateY(-10px)'
                : 'none';
        });

        // Close menu when clicking on a link
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
}

// ===== INQUIRY MODAL =====
function initModal() {
    const modal = document.getElementById('inquiryModal');
    const inquiryBtns = document.querySelectorAll('.inquiry-btn');
    const modalClose = document.getElementById('modalClose');

    if (modal) {
        inquiryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('active');
            });
        });

        if (modalClose) {
            modalClose.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
}

// ===== FORM HANDLING =====
function initForms() {
    // Inquiry Form
    const inquiryForm = document.getElementById('inquiryForm');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', handleInquirySubmit);
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

function handleInquirySubmit(e) {
    e.preventDefault();

    // Simulate form submission
    const formData = new FormData(e.target);

    // In production, you would send this to a backend API
    console.log('Inquiry Form Data:', Object.fromEntries(formData));

    // Show success message
    alert(currentLanguage === 'en'
        ? 'Thank you for your inquiry! We will contact you soon.'
        : 'شكراً لاستفسارك! سنتواصل معك قريباً.');

    // Close modal and reset form
    const modal = document.getElementById('inquiryModal');
    if (modal) modal.classList.remove('active');
    e.target.reset();
}

function handleContactSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formMessage = document.getElementById('formMessage');

    // In production, you would send this to a backend API or service like Formspree
    console.log('Contact Form Data:', Object.fromEntries(formData));

    // Show success message
    if (formMessage) {
        formMessage.className = 'form-message success';
        formMessage.textContent = currentLanguage === 'en'
            ? 'Thank you for your message! We will get back to you soon.'
            : 'شكراً لرسالتك! سنرد عليك قريباً.';

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }

    // Reset form
    e.target.reset();
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ===== ANIMATE ON SCROLL =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.service-card, .portfolio-item, .solution-card, .process-step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== ANIMATE EXPERTISE BARS =====
function initExpertiseBars() {
    const expertiseBars = document.querySelectorAll('.expertise-fill');

    if (expertiseBars.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });

        expertiseBars.forEach(bar => observer.observe(bar));
    }
}

// ===== HEADER SCROLL EFFECT =====
function initHeaderScroll() {
    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
            }
        });
    }
}

// ===== DOWNLOAD IMAGES =====
async function downloadImage(url, filename) {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = objectUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(objectUrl);
    } catch (error) {
        console.error('Error downloading image:', error);
    }
}

// ===== LAZY LOADING IMAGES =====
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ===== INITIALIZE ALL =====
function init() {
    initLanguage();
    initMobileMenu();
    initModal();
    initForms();
    initSmoothScroll();
    initScrollAnimations();
    initExpertiseBars();
    initHeaderScroll();
    initLazyLoading();

    // Language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Close modal on Escape key
    if (e.key === 'Escape') {
        const modal = document.getElementById('inquiryModal');
        if (modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    }
});

// Print debug info
console.log('Smart Structure Website - Static Version');
console.log('Language System: Active');
console.log('Responsive Design: Active');
console.log('Bilingual Support: English & Arabic');
