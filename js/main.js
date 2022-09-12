const nav = document.querySelector('.nav-links');
const openBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');


//functions to open nav links menu
const openNav = () => {
    nav.style.display = 'flex';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
}
openBtn.addEventListener('click', openNav)

//functions to close nav links menu
const closeNav = () => {
    nav.style.display = 'none';
    openBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
}
closeBtn.addEventListener('click', closeNav)