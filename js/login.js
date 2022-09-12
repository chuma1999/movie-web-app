const forms = document.querySelector('.forms');
pwShowHide = document.querySelectorAll('.eye-iconz');
links = document.querySelectorAll('.link');

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener('click', () => {
        let pwFields = eyeIcon.parentElement.querySelectorAll('.password');

        pwFields.forEach(password => {
            if (password.type === 'password') {
                password.type = "text";
                eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        })
    })
})


links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); // prevents form submit
        forms.classList.toggle("show-signup");
    })
})