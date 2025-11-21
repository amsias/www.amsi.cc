const fontFamilies = [
    'FCaslonTwelveITC-Italic',
    'FCaslonTwelveITC-Roman',
    'FCaslonTwelveSCITCTTRoman'
];

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.font-switch');

    elements.forEach(element => {
        const originalText = element.innerHTML;

        element.addEventListener('mouseenter', () => {
            let newHtml = '';
            const words = originalText.split(' ');
            words.forEach(word => {
                const randomFont = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
                newHtml += `<span style="font-family: '${randomFont}'">${word}</span> `;
            });
            element.innerHTML = newHtml;
        });

        element.addEventListener('mouseleave', () => {
            element.innerHTML = originalText;
        });
    });
});
