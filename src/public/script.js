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


        console.log(formData);


        submitButton.style.color = "red"
    })
})
