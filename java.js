const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
};

// Mobilde menü varsayılan olarak gizlenmiş olacak
// navmenu.classList.add('closed');
document.addEventListener("DOMContentLoaded", function() {
    const animatedTexts = document.querySelectorAll('.animated-text');
    animatedTexts.forEach(text => {
      text.classList.add('animate');
    });
  });