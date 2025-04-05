// Initialize EmailJS with your User ID
emailjs.init('service_71mhond');

// Handle form submissionDvZwA
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
    };

    emailjs.send('service_71mhond', 'njEy•••••••••••••••••', templateParams)
        .then(function(response) {
            console.log('Success!', response);
            alert('Thank you for your message, ' + name + '! We will get back to you soon.');
        }, function(error) {
            console.log('Failed...', error);
            alert('Something went wrong. Please try again later.');
        });
});
