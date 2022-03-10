function revealFromLeft() {
  var reveals = document.querySelectorAll(".reveal-lft");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("activelft");
    } else {
      reveals[i].classList.remove("activelft");
    }
  }
}

window.addEventListener("scroll", revealFromLeft);

function revealFromRight() {
  let reveals = document.querySelectorAll(".reveal-rgt");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("activergt");
    } else {
      reveals[i].classList.remove("activergt");
    }
  }
}

window.addEventListener("scroll", revealFromRight);

let revealContact = () => {
  let toShrink = document.getElementById(`contacttext`);
  let toReveal = document.getElementById(`contactform`);
  toReveal.classList.add(`contact__form--show`);
  toShrink.classList.add(`contact__title-cont--shrink`);
};
