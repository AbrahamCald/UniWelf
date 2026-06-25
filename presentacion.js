if(sessionStorage.getItem('uniwell_access') !== 'granted'){
    window.location.href = 'index.html';
}

const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('uniwell_access');
    window.location.href = 'index.html';
});

const glow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            if(entry.target.classList.contains('stat')) animateCounter(entry.target);
        }
    });
},{threshold:.18});

document.querySelectorAll('.reveal, .stat').forEach(el => observer.observe(el));

function animateCounter(card){
    const number = card.querySelector('[data-count]');
    if(!number || number.dataset.done) return;
    number.dataset.done = 'true';
    const target = Number(number.dataset.count);
    const duration = 1400;
    const start = performance.now();

    function update(now){
        const progress = Math.min((now - start) / duration, 1);
        number.textContent = Math.floor(progress * target).toLocaleString('es-NI');
        if(progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}
