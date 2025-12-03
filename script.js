// Fade-in scroll navbar effect
document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Form validation stays same
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            let isValid = true;

            const name = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const date = document.getElementById('date').value;
            const service = document.getElementById('service').value;

            document.querySelectorAll('.error').forEach(e => e.style.display = 'none');

            if (name === "") {
                document.getElementById('nameError').textContent = "Full Name is required.";
                document.getElementById('nameError').style.display = "block";
                isValid = false;
            }

            if (email === "" || !email.includes('@')) {
                document.getElementById('emailError').textContent = "Please enter a valid email.";
                document.getElementById('emailError').style.display = "block";
                isValid = false;
            }

            if (phone === "") {
                document.getElementById('phoneError').textContent = "Phone number is required.";
                document.getElementById('phoneError').style.display = "block";
                isValid = false;
            }

            if (date === "") {
                document.getElementById('dateError').textContent = "Please select a date.";
                document.getElementById('dateError').style.display = "block";
                isValid = false;
            }

            if (service === "") {
                document.getElementById('serviceError').textContent = "Please select a reason for the visit.";
                document.getElementById('serviceError').style.display = "block";
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
            } else {
                alert("Thank you! Your booking request has been validated.");
            }
        });
    }
});
