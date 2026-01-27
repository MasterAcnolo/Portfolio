const scrollBtn = document.getElementById('scrollBtn');
scrollBtn.addEventListener('click', () => {
    const target = document.getElementById('about');
    target.scrollIntoView({ behavior: 'smooth' });
});
