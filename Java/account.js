const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
document.addEventListener("DOMContentLoaded", function () {
        var emailInput = document.getElementById("email");
        var phoneInput = document.getElementById("phone");
        var passwordInput = document.getElementById("password");
        var confirmPasswordInput = document.getElementById("confirmPassword");
        var submitButton = document.getElementById("submitButton");
        var emailErrorText = document.getElementById("email-error");
        var phoneErrorText = document.getElementById("phone-error");
        var passwordErrorText = document.getElementById("password-error");
        var confirmPasswordErrorText = document.getElementById("confirmPassword-error");
        var successMessage = document.getElementById("successMessage");

        emailInput.addEventListener("input", function () {
            validateEmail(emailInput.value);
        });

        phoneInput.addEventListener("input", function () {
            validatePhone(phoneInput.value);
        });

        function validateEmail(email) {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(email)) {
                emailErrorText.style.display = "none";
            } else {
                emailErrorText.style.display = "block";
            }
            checkFormValidity();
        }

        function validatePhone(phone) {
            var phoneRegex = /^\d{10,}$/;
            if (phoneRegex.test(phone)) {
                phoneErrorText.style.display = "none";
            } else {
                phoneErrorText.style.display = "block";
            }
            checkFormValidity();
        }

        function validatePassword(password) {
            var minLength = 8;
            var hasUpperCase = /[A-Z]/.test(password);
            var hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

            if (password.length >= minLength && hasUpperCase && hasSpecialChar) {
                passwordErrorText.style.display = "none";
            } else {
                passwordErrorText.style.display = "block";
            }
            checkFormValidity();
        }

        function checkPasswordsMatch(password, confirmPassword) {
            if (password === confirmPassword) {
                confirmPasswordErrorText.style.display = "none";
            } else {
                confirmPasswordErrorText.style.display = "block";
            }
            checkFormValidity();
        }

        function checkFormValidity() {
            if (
                emailErrorText.style.display === "none" &&
                phoneErrorText.style.display === "none" &&
                passwordErrorText.style.display === "none" &&
                confirmPasswordErrorText.style.display === "none"
            ) {
                submitButton.disabled = false;
            } else {
                submitButton.disabled = true;
            }
        }

        passwordInput.addEventListener("input", function () {
            validatePassword(passwordInput.value);
        });

        confirmPasswordInput.addEventListener("input", function () {
            checkPasswordsMatch(passwordInput.value, confirmPasswordInput.value);
        });

        function redirectToHome() {
            window.location.href = "trangchu.html"; // Chuyển hướng đến trang chủ
        }
    
        // Xử lý sự kiện khi đăng ký
        var registerForm = document.querySelector(".sign-up form");
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault(); 
            redirectToHome();
        });
    
        // Xử lý sự kiện khi đăng nhập
        var loginForm = document.querySelector(".sign-in form");
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); 
            redirectToHome();
        });
    });