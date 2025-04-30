
document.getElementById('enquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        propertyType: document.getElementById('propertyType').value
    };

    const whatsappMessage = encodeURIComponent(
        `New Enquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProperty Interest: ${formData.propertyType}\nMessage: ${formData.message}`
    );

    window.open(`https://wa.me/+918452838905?text=${whatsappMessage}`);
    this.reset();
    alert('Please complete the message in the opened WhatsApp window');
});

const toggleButton = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links a');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');
});

navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        toggleButton.classList.remove('active');
    });

});

























