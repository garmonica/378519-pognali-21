let pageHeader = document.querySelector('.page-header');
let mainNavToggle = document.querySelector('.main-nav__toggle');

window.onscroll = function () {
  if (window.pageYOffset > 0) {
    pageHeader.classList.add('page-header--scroll');
  } else {
    pageHeader.classList.remove('page-header--scroll');
  }
};

pageHeader.classList.remove('page-header--nojs');

mainNavToggle.addEventListener('click', function() {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }
});
