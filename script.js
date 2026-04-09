// Intersection Observer for fade-in animations (optional enhancement)
document.addEventListener('DOMContentLoaded', () => {
    
    // Typewriter effect
    const typewriterElement = document.getElementById("typewriter-text");
    if (typewriterElement) {
        const words = ["AI Developer", "Full Stack Engineer", "UI/UX Designer", "Software Innovator"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            typewriterElement.textContent = currentWord.substring(0, charIndex);

            let typeSpeed = isDeleting ? 40 : 100;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000; // Pause at end of word
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 400; // Pause before next word
            }

            setTimeout(type, typeSpeed);
        }
        
        type();
    }

    // Select all sections that we might want to fade in
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Set initial states
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(section);
    });

    // Scroll effects: Navbar morph + parallax grid
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        if (navbar) {
            if (scrolled > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        const bgGrid = document.querySelector('.bg-grid');
        if (bgGrid) {
            bgGrid.style.transform = `translateY(${scrolled * 0.05}px)`;
        }
    });
});
