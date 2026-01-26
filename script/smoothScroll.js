const scrollBtn = document.getElementById('scrollBtn');
scrollBtn.addEventListener('click', () => {
    const target = document.getElementById('section');
    target.scrollIntoView({ behavior: 'smooth' });
});
