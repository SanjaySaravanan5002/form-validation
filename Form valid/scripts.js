document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, textarea');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        inputs.forEach(input => {
            const errorMessage = input.nextElementSibling;
            if (!input.checkValidity()) {
                input.classList.add('invalid');
                errorMessage.textContent = input.validationMessage;
                errorMessage.style.display = 'block';
                isValid = false;
            } else {
                input.classList.remove('invalid');
                input.classList.add('valid');
                errorMessage.style.display = 'none';
            }
        });

        if (isValid) {
            // Handle form submission
            alert('Form submitted successfully!');
            form.reset();
            inputs.forEach(input => input.classList.remove('valid'));
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const errorMessage = input.nextElementSibling;
            if (input.checkValidity()) {
                input.classList.remove('invalid');
                input.classList.add('valid');
                errorMessage.style.display = 'none';
            } else {
                input.classList.remove('valid');
                input.classList.add('invalid');
                errorMessage.textContent = input.validationMessage;
                errorMessage.style.display = 'block';
            }
        });
    });
});
