
function changeColor() {
    const resume = document.querySelector('.resume');
    resume.classList.toggle('colorful'); 


    const button = document.getElementById('colorButton');
    button.textContent = resume.classList.contains('colorful') 
        ? 'Change back to normal' 
        : 'Add some color';
}
const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'translateY(-5px)';
        section.style.transition = 'transform 0.3s ease';
    });

    section.addEventListener('mouseleave', () => {
        section.style.transform = 'translateY(0)';
    });
});