// Intersection Observer for fade-in animations (optional enhancement)
document.addEventListener('DOMContentLoaded', () => {
    
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

    // Subtly parallax the grid background
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const bgGrid = document.querySelector('.bg-grid');
        if (bgGrid) {
            bgGrid.style.transform = `translateY(${scrolled * 0.05}px)`;
        }
    });
});
