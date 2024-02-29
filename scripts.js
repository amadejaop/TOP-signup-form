window.onload = function() {
    const password = document.getElementById('pwd');
    const confirmPassword = document.getElementById('pwdconf');
    const errorMessage = document.getElementById('pwdmatch');

    confirmPassword.addEventListener("keyup", checkPasswords);

    function checkPasswords() {
        if (password.value === confirmPassword.value) {
            errorMessage.style.visibility = "hidden";
        } else {
            errorMessage.style.visibility = "visible";
        }
    }
}