/*case*/

const sectionLinks = document.querySelectorAll('.section-case-link');
const arrows = document.querySelectorAll('.case-arrow');
let currentSection = 0;

sectionLinks.forEach((linkElement, index) => {
    const arrowElement = arrows[index];

    linkElement.addEventListener('mouseenter', () => {
        linkElement.style.transform = 'translate(0, 0) scale(1.1)';
        arrowElement.style.transform = 'translate(0, 0)';
    });

    linkElement.addEventListener('mousemove', (event) => {
        const x = (event.clientX / window.innerWidth) * 95;
        const y = (event.clientY / window.innerHeight) * 95;
        linkElement.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
        
        const arrowX = (event.clientX / window.innerWidth) * 20;
        const arrowY = (event.clientY / window.innerHeight) * 20;
        arrowElement.style.transform = `translate(${arrowX}px, ${arrowY}px)`;
    });

    linkElement.addEventListener('mouseleave', () => {
        linkElement.style.transform = 'translate(0, 0) scale(1)';
        arrowElement.style.transform = 'translate(0, 0)';
    });

    linkElement.addEventListener('click', () => {
        scrollToSection(index);
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && currentSection > 0) {
        scrollToSection(currentSection - 1);
    }
    if (event.key === 'ArrowRight' && currentSection < sectionLinks.length - 1) {
        scrollToSection(currentSection + 1);
    }
});

scrollToSection(currentSection);

/*case*/