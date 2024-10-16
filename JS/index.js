// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add 'show' class when the element is in the viewport
function scrollFadeIn() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => {
        if (isElementInViewport(el)) {
            el.classList.add('show');
        }
    });
}

// Listen to scroll events for fade-in effect
window.addEventListener('scroll', scrollFadeIn);

// Go-Up Button Visibility
const goUpButton = document.getElementById('go-up');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        goUpButton.classList.add('show');
    } else {
        goUpButton.classList.remove('show');
    }
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    
    document.getElementById('scrollProgressBar').style.width = scrollPercent + '%';
});
