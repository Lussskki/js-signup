document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("usernameInput")
    const passwordInput = document.getElementById("passwordInput")
    const submitButton = document.getElementById("submitButton")

    submitButton.addEventListener("click", function () {
        const username = usernameInput.value
        const password = passwordInput.value
        const formData = {
            username: username,
            password: password,
        }
        submitButton.style.color = "red"
          // Send the data to the server
          fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data) 
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
    })
// })

