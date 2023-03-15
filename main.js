// change nav style in scroll

window.addEventListener('scroll', function(){
    const nav = document.querySelector('nav');
    nav.classList.toggle("windo-scrolled", window.scrollY > 0);
});


// CONTACT BUTTON (circular text buttons)
const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(textButton => {
  let text = textButton.querySelector('p');
  text.innerHTML = text.innerHTML.split('').map((character, index) => 
  `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('');
});
