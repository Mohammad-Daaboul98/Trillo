var list = document.querySelector(".side-nav");
var item = list.getElementsByTagName("li");

for (var i = 0; i < item.length; i++) {

  item[i].addEventListener("click", function() {

    (document.querySelector('.side-nav__item--active')) ? document.querySelector('.side-nav__item--active').classList.remove('side-nav__item--active') : '';

    this.classList.add('side-nav__item--active');
  });
} 

