// Basic JavaScript for form handling (Optional)

document.querySelector('.btn-login').addEventListener('click', function() {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Login successful!");
        // Perform further login processing here
    }
});
