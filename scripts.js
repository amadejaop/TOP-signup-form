window.onload = function() {
    const password = document.getElementById('pwd');
    const confirmPassword = document.getElementById('pwdconf');
    const errorMessage = document.getElementById('pwdmatch');

    confirmPassword.addEventListener("keyup", checkPasswords);

    function checkPasswords() {
        if (password.value === confirmPassword.value) {
            password.classList.remove('error');
            confirmPassword.classList.remove('error');
            errorMessage.style.visibility = "hidden";
        } else {
            password.classList.add('error');
            confirmPassword.classList.add('error');
            errorMessage.style.visibility = "visible";
        }
    }
}