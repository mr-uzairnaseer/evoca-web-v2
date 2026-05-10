document.addEventListener('DOMContentLoaded', () => {
    // 1. Existing Hero Accordion Logic (Keep your existing code for sidebar)
    const accordions = document.querySelectorAll('.accordion-item');
    accordions.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            accordions.forEach(acc => {
                acc.classList.remove('active');
                acc.querySelector('.acc-icon').textContent = '+';
            });
            if (!isActive) {
                item.classList.add('active');
                item.querySelector('.acc-icon').textContent = '-';
            }
        });
    });

    // 2. New Logic for "Flavor Rift" (The Horizontal Panels)
    const riftPanels = document.querySelectorAll('.rift-panel');
    
    riftPanels.forEach(panel => {
        panel.addEventListener('mouseenter', () => {
            // Remove active class from all
            riftPanels.forEach(p => p.classList.remove('active-panel'));
            // Add to hovered
            panel.classList.add('active-panel');
        });
    });

    // Optional: Reset to first panel when mouse leaves the section
    const riftSection = document.querySelector('.flavor-rift');
    riftSection.addEventListener('mouseleave', () => {
        riftPanels.forEach(p => p.classList.remove('active-panel'));
        riftPanels[0].classList.add('active-panel');
    });

    // 3. Mobile Menu Toggle
    const menuTrigger = document.querySelector('.menu-trigger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLeft = document.querySelector('.nav-left');

    navLeft.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        // Toggle hamburger animation
        document.querySelector('.line-1').classList.toggle('rotate-top');
        document.querySelector('.line-2').classList.toggle('rotate-bottom');
    });
});