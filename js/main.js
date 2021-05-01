const openPopupBtn = document.querySelector('.page-header__burger-btn');
const pageNav = document.querySelector('.page-header__nav');

function mobileHidden() {
   pageNav.classList.add('visually-hidden');
}

pageNav.classList.add('visually-hidden');
openPopupBtn.addEventListener('click', function() {

    openPopupBtn.classList.toggle('page-header__burger-btn--close');
 if(pageNav.classList.contains('page-header__nav--close') == true) {
    pageNav.classList.remove('page-header__nav--close');
    pageNav.classList.remove('visually-hidden');
    pageNav.classList.add('page-header__nav--open');
 } else { 
        pageNav.classList.remove('page-header__nav--open');
        pageNav.classList.add('page-header__nav--close');
        setTimeout(mobileHidden, 1000);
  }
});