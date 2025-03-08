function showBox(day) {
    const box = document.getElementById('displayBox');

    // Remove active class for reset animation
    box.classList.remove('active');

    // Change color based on day
    const colors = {
        Monday: '#FF5733',
        Tuesday: '#33A1FF',
        Wednesday: '#FFD700',
        Thursday: '#8A2BE2',
        Friday: '#32CD32',
        Saturday: '#FF1493',
        Sunday: '#FF4500'
    };

    // Brief delay to reset animation
    setTimeout(() => {
        box.innerHTML = `<h2>${day}</h2>`;
        box.style.backgroundColor = colors[day] || '#4CAF50';
        box.classList.add('active');
    }, 100);
}
