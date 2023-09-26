function checkWindowSize() {
    const mobileNav = document.querySelector('.mobileNav');
    const desktopNav = document.querySelector('.desktopNav');
    const hamburger = document.querySelector('.hamburger');

    if (window.innerWidth > 768) {
        mobileNav.classList.remove('active');
        desktopNav.style.display = 'block';
        hamburger.style.display = 'none';
    } else {
        desktopNav.style.display = 'none';
        hamburger.style.display = 'flex';
    }
}

// Execute a função quando a página for carregada e sempre que o tamanho da janela for alterado
window.addEventListener('load', checkWindowSize);
window.addEventListener('resize', checkWindowSize);
