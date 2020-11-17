function learnMore(){
    document.getElementById("learn").addEventListener(alert("Mohon maaf, saat ini masih dalam proses pengembangan"));
}

const nav = document.querySelector('nav ul');
const menu = document.querySelector('nav a.hamburgerMenu');
menu.addEventListener('click', function(){
    nav.classList.toggle('slide');
})