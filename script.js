document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }
    
    // Display a success message
    alert('Thank you for your message, ' + name + '! I will get back to you soon.');
    
    // Clear the form
    document.getElementById('contactForm').reset();
});
