const icon = document.getElementById('user-icon');
const menu = document.getElementById('user-menu');

icon.addEventListener("mouseover", () => {
    menu.style.display='block';
});
icon.addEventListener("mouseout", () => {
    menu.style.display='none';
});
menu.addEventListener("mouseover", () => {
    menu.style.display='block';
});
menu.addEventListener("mouseout", () => {
    menu.style.display='none';
});

// const login=document.getElementById('user-login');
// const register = document.getElementById('user-register');
// const login_modal = document.getElementById('login-modal');
// const register_modal = document.getElementById('register-modal');


// login.addEventListener("click", () => {
//     login_modal.style.display = 'block';
// });
// register.addEventListener("click", () => {
//     register_modal.style.display = 'block';
// })
