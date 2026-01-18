// /c:/Users/Amigos/Desktop/HanaKrasniqi-Progpath/scripts/contact.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        const entry = {
            name,
            email,
            message,
            createdAt: new Date().toISOString()
        };

        const key = 'contactMessages';
        const items = JSON.parse(localStorage.getItem(key) || '[]');
        items.push(entry);
        localStorage.setItem(key, JSON.stringify(items));

        alert(`Thank you for contacting us, ${name}!`);
        form.reset();
    });
});