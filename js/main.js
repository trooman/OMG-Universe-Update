// Modal-form
let button = document.querySelector('#button');
let modal = document.querySelector('#modal');
let closeButton = document.querySelector('#closeButton');

button.addEventListener('click', function () {
  modal.classList.add('modal-active');
  menu.classList.remove('header-navbar__navigation__active');
  menuButton.classList.remove('menu-button-active');
});

closeButton.addEventListener('click', function () {
  modal.classList.remove('modal-active');
});




// бургер меню
let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.header-navbar__navigation');

menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-navbar__navigation__active');
});




// Закрытие бургера при нажатии на элементы navbar
let aboutUs = document.querySelector('#aboutUs');
aboutUs.onclick = function () {
  menu.classList.remove('header-navbar__navigation__active');
  menuButton.classList.remove('menu-button-active');
}

let servicesInNavbar = document.querySelector('#servicesInNavbar');
servicesInNavbar.onclick = function () {
  menu.classList.remove('header-navbar__navigation__active');
  menuButton.classList.remove('menu-button-active');
}

let contactsInNavbar = document.querySelector('#contactsInNavbar');
contactsInNavbar.onclick = function () {
  menu.classList.remove('header-navbar__navigation__active');
  menuButton.classList.remove('menu-button-active');
}

let findUs = document.querySelector('#findUs');
findUs.onclick = function () {
  menu.classList.remove('header-navbar__navigation__active');
  menuButton.classList.remove('menu-button-active');
}



let openButton = document.querySelector('.services-img-link'),
  popup = document.querySelector('.popup'),
  close = document.querySelector('.close');

openButton.onclick = function () {
  popup.style.display = 'block';
}

close.onclick = function () {
  popup.style.display = 'none';
}

// window.onclick = function (e) {
//   if (e.target == popup) popup.style.display = 'none';
// }




let openButton2 = document.querySelector('.services-img-link2'),
  popup2 = document.querySelector('.popup2'),
  close2 = document.querySelector('.close2');

openButton2.onclick = function () {
  popup2.style.display = 'block';
}

close2.onclick = function () {
  popup2.style.display = 'none';
}





let openButton3 = document.querySelector('.services-img-link3'),
  popup3 = document.querySelector('.popup3'),
  close3 = document.querySelector('.close3');

openButton3.onclick = function () {
  popup3.style.display = 'block';
}

close3.onclick = function () {
  popup3.style.display = 'none';
}




let openButton4 = document.querySelector('.services-img-link4'),
  popup4 = document.querySelector('.popup4'),
  close4 = document.querySelector('.close4');

openButton4.onclick = function () {
  popup4.style.display = 'block';
}

close4.onclick = function () {
  popup4.style.display = 'none';
}




let openButton5 = document.querySelector('.services-img-link5'),
  popup5 = document.querySelector('.popup5'),
  close5 = document.querySelector('.close5');

openButton5.onclick = function () {
  popup5.style.display = 'block';
}

close5.onclick = function () {
  popup5.style.display = 'none';
}



let openButton6 = document.querySelector('.services-img-link6'),
  popup6 = document.querySelector('.popup6'),
  close6 = document.querySelector('.close6');

openButton6.onclick = function () {
  popup6.style.display = 'block';
}

close6.onclick = function () {
  popup6.style.display = 'none';
}


// Tabulation
// let accordeonArrow = document.querySelectorAll('.services-accordeon-button');
let servicesInfoBlock = document.querySelector('.services-info__block');
let servicesDescription = document.querySelectorAll('.services-description');
let servicesDescriptionList = document.querySelectorAll('.services-description__list');

// accordeonArrow.onclick = function() {
//   accordeonArrow.innerHTML = '⇧';
// }

for (let i = 0; i <= servicesDescriptionList.length; i++) {
  servicesDescriptionList[i].onclick = function() {
    this.classList.toggle('active');

    this.nextElementSibling.classList.toggle('show')
  }
}