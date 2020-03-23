function workClass(selector, className, delay = 0, addOrRemove) {
  let el = document.querySelector(selector);
  if (addOrRemove === true) {
    if (el.classList.contains(className)) {
      el.classList.remove(className)
    } else {
      setTimeout(() => {
        el.classList.add(className);
      }, delay)
    }
  } else {
    if (el.classList.contains(className)) {
      setTimeout(() => {
        el.classList.remove(className);
      }, delay)
    } else {
      el.classList.add(className)
    }
  }
}

function burgerSwitch() {
  if (window.innerWidth < 992) {

    workClass('.js-nav', 'js-nav-pos', 300, false);
    workClass('.js-menu', 'js-menu-open', 0, true);
    workClass('.js-burger', 'js-menu-burger-active', 100, true);
    workClass('.js-burger', 'js-menu-burger-active-sec', 100, true);
    workClass('.js-lang', 'js-lang-open', 500, true);
    workClass('.js-svg-logo', 'js-svg-logo-active', 0, true);
    workClass('.js-body', 'js-body-active', 0), true;

  }
}



//Burger menu open
document.querySelector(".js-burger").onclick = function () {
  burgerSwitch()
};

//Burger menu point
document.querySelector(".js-menu").onclick = function () {
  burgerSwitch()
};