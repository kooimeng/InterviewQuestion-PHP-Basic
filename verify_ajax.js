// verify_ajax.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const errorContainer = document.getElementById("error-container");
    const verificationMessage = document.getElementById("verification-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const enteredUsername = usernameInput.value.trim();

        if (enteredUsername === "") {
            errorContainer.textContent = "Username cannot be empty.";
            return;
        }

        // If username is not empty, proceed with AJAX call
        errorContainer.textContent = "";

        // Perform an AJAX call to info.php
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "info.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Display the verification message based on the response
                verificationMessage.textContent = xhr.responseText;
            }
        };
        const data = "username=" + encodeURIComponent(enteredUsername);
        xhr.send(data);
    });
});
