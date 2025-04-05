const formBox = document.querySelector('#form-box');
const cancelBtn = document.querySelector('#cancelbtn');
const contactForm = document.querySelector('#contact-form');
const header = document.querySelector('#header');
const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('.item-title');
        if (title) {
            formBox.style.display = "flex";
            formBox.style.opacity = "1";
            header.innerText = title.innerText;
        }
    });
});

cancelBtn.addEventListener('click', () => {
    formBox.style.display = "none";
    formBox.style.opacity = "0";
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const subject = header.innerText;
    const nameInput = document.querySelector('#name')?.value || '';
    const messageInput = document.querySelector('#message')?.value || '';
    const whatsappUrl = `https://wa.me/+919045755655?text=Hello%20I%20am%20${nameInput}%20and%20I%20want%20to%20contact%20you%20regarding%20your%20services.%0A${subject}%0A${messageInput}`;
    
    window.location.href = whatsappUrl;
    formBox.style.display = "none";
    formBox.style.opacity = "0";
    contactForm.reset();
});

function redirectToServices() {
    window.location.href = "/services";
}

function redirectToContacts() {
    window.location.href = "/contact";
}

function downloadResume() {
    window.location.href = "/downloadresume";
}