let pageHeader = document.querySelector('.page-header');
let mainNavToggle = document.querySelector('.main-nav__toggle');
let ratesButton = document.querySelector('.profile-promo__business-rates');
let ratesPopup = document.querySelector('.modal');
let ratesClose = document.querySelector('.modal__close');
let filter = document.querySelector('.filter');
let filterToggle = document.querySelector('.filter__toggle');
let filterHide = document.querySelector('.filter__hide');

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

if (ratesButton) {
  ratesButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    ratesPopup.classList.add('modal--show');
  });

  ratesClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    ratesPopup.classList.remove('modal--show');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (ratesPopup.classList.contains('modal--show')) {
        evt.preventDefault();
        ratesPopup.classList.remove('modal--show');
      }
    }
  });
}

if (filter) {
  filter.classList.remove('filter--nojs');

  filterToggle.addEventListener('click', function() {
    if (filter.classList.contains('filter--closed')) {
      filter.classList.remove('filter--closed');
      filter.classList.add('filter--opened');
    } else {
      filter.classList.add('filter--closed');
      filter.classList.remove('filter--opened');
    }
  });

  filterHide.addEventListener('click', function() {
    filter.classList.remove('filter--opened');
    filter.classList.add('filter--closed');
  });
}
