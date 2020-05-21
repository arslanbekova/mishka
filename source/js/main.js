var navMain = document.querySelector('.page-header');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('page-header--closed')) {
    navMain.classList.remove('page-header--closed');
    navMain.classList.add('page-header--opened');
  } else {
    navMain.classList.add('page-header--closed');
    navMain.classList.remove('page-header--opened');
  }
});

var link = document.querySelector(".modal__link");
var modal = document.querySelector(".modal");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal--hide");
  modal.classList.add("modal--show");
});
