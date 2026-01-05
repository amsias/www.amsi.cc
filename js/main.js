document.addEventListener('DOMContentLoaded', () => {
    // Font replacement logic
    const fonts = ['FCaslon-Italic', 'FCaslon-Roman', 'FCaslon-SC'];
    const interactiveElements = document.querySelectorAll('.hover-text, h1, h2, h3, a, li, button, span');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            const currentFont = el.style.fontFamily.replace(/['"]/g, '');
            const availableFonts = fonts.filter(f => f !== currentFont);
            const randomFont = availableFonts[Math.floor(Math.random() * availableFonts.length)];
            el.style.fontFamily = randomFont;
        });
    });

    // Accordion Logic
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(acc => {
        acc.addEventListener('click', function () {
            // Toggle active class
            this.classList.toggle('active');

            // Icon rotation/change (optional, simple +/- text toggle for now)
            const icon = this.querySelector('span:last-child');
            if (icon) {
                icon.textContent = this.classList.contains('active') ? '-' : '+';
            }

            // Panel visibility
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.classList.remove('active');
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.classList.add('active');
            }
        });
    });
});
