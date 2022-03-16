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

// SKILLS

let selectResume = (skill) => {
  const skills = document.querySelectorAll('.skills .skill');
  skills.forEach((item) => {
    item.classList.remove('skill--display');
    item.classList.add('skill--hide');
  });

  skill.classList.add('skill--display');
  skill.classList.remove('skill--hide');

  // let choiceContainer = document.querySelector(`.skills__${choice.id}`);
  // let ico = container.querySelector('.skill_icon');
  // let title = document.querySelector('.skill__title');
  // let display = document.querySelector('.skill__display');

  // if (container.id === "resume") {
  //   remove = "medals";
  // } else {
  //   remove = "resume";
  // }
  // console.log(title);

  // remove = document.querySelector(`.skills__${remove}`);
  // remove.classList.add("remove");
  // containerContainer.classList.add(
  //   `${containerContainer.className}--display`.replace(/\s/g, "")
  // );
  // ico.classList.add(`${ico.className}--display`.replace(/\s/g, ""));
  // title.classList.add(`${title.className}--display`.replace(/\s/g, ""));
  // iframe.classList.add(`${iframe.className}--display`.replace(/\s/g, ""));
};

// CONTACT
function revealContact() {
  let toShrink = document.getElementById(`contacttext`);
  let toReveal = document.getElementById(`contactform`);
  toReveal.classList.add(`contact__form--show`);
  toShrink.classList.add(`contact__title-cont--shrink`);
}
