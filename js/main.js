document.addEventListener('DOMContentLoaded', () => {
    const fonts = ['FCaslon-Italic', 'FCaslon-Roman', 'FCaslon-SC'];
    const interactiveElements = document.querySelectorAll('.hover-text, h1, h2, h3, p, a, li');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            // Get current font to avoid picking it again
            const currentFont = el.style.fontFamily.replace(/['"]/g, ''); // Clean up quotes if present

            // Filter out the current font from the available options
            const availableFonts = fonts.filter(f => f !== currentFont);

            // Pick a random font from the remaining options
            const randomFont = availableFonts[Math.floor(Math.random() * availableFonts.length)];

            el.style.fontFamily = randomFont;
        });

        // Optional: Reset on mouseleave? 
        // User said: "randomly change to one of the fonts every time the pointer hovers"
        // It implies the change happens ON hover. It doesn't explicitly say it should revert.
        // Keeping the changed font adds to the chaotic/artistic feel.
    });
});
