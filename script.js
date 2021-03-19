const menu = document.querySelector('header#menu');
let lastScrollPosition = 0;
document.addEventListener('scroll', function(e) {
    lastScrollPosition = window.scrollY;
    console.log(lastScrollPosition);
    if (lastScrollPosition > 5) {
        menu.classList.add('ativo');
    } else {
        menu.classList.remove('ativo');
    }ccc
});

const menuOpen = document.querySelector('#button-menu');
const menuClose = document.querySelector('#button-menu-close');
let mobileConatiner = document.querySelector('.mobile-container');

menuOpen.addEventListener('click', function (e) {
    mobileConatiner.classList.add('open');
    mobileConatiner.classList.remove('close');
});
menuClose.addEventListener('click', function (e) {
    mobileConatiner.classList.add('close');
    mobileConatiner.classList.remove('open');
});

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_s8p23l9';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('E-mail enviado com Sucesso');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});