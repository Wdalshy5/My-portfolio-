// script.js
$(document).ready(function () {
    // Smooth scrolling for navigation links
    $('.nav-links a').on('click', function (e) {
        e.preventDefault();
        const target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    });

    // Contact form submission (dummy functionality)
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        alert('Message sent successfully!');
        this.reset();
    });
});
