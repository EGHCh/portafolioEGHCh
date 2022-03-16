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
  const skills = document.querySelectorAll(".skills .skill");
  console.log(skills.classList)

  if (skill.classList[1] !== undefined) {
    skills.forEach((item) => {
      item.classList.remove("skill--display");
      item.classList.remove("skill--hide");
    });
    break
  };

  skills.forEach((item) => {
    item.classList.remove("skill--display");
    item.classList.add("skill--hide");
  });
  skill.classList.add("skill--display");
  skill.classList.remove("skill--hide");
};

let backToSkills = (container) => {
  const skills = document.querySelectorAll(".skills .skill");
  console.log(skills);
  skills.forEach((item) => {
    console.log(item)
    item.classList.remove("skill--display");
    item.classList.remove("skill--hide");
  });
};

// CONTACT
function revealContact() {
  let toShrink = document.getElementById(`contacttext`);
  let toReveal = document.getElementById(`contactform`);
  toReveal.classList.add(`contact__form--show`);
  toShrink.classList.add(`contact__title-cont--shrink`);
}
