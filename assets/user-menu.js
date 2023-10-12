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

