import{templates, select, classNames} from '../settings.js';

class Home {
  constructor(element) {
    const thisHome = this;

    thisHome.render(element);
    thisHome.initCarousel();
    thisHome.initLink();
  }

  render(element) {
    const thisHome = this;

    const generatedHTML = templates.homePage(element);

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;

    thisHome.dom.wrapper.carouselWidget = thisHome.dom.wrapper.querySelector(select.widgets.carousel.wrapper);
    thisHome.dom.wrapper.onlineOrder = thisHome.dom.wrapper.querySelector(select.home.onlineOrder);
    thisHome.dom.wrapper.bookTable = thisHome.dom.wrapper.querySelector(select.home.bookTable);
  }

  initCarousel(){

    const elem = document.querySelector('.main-carousel');
        const flkty = new Flickity(elem, { // eslint-disable-line
      // options
      cellAlign: 'left',
      contain: true,
      autoPlay: 2700,
      wrapAround: true,
      adaptiveHeight: true,
      prevNextButtons: false,
      draggable: '>1',
    });
  }

  activatePage(pageId){

    const pages = document.querySelector(select.containerOf.pages).children;
    const navLinks = document.querySelectorAll(select.nav.links);

    for(const page of pages){
      if(page.id !== pageId){
        page.classList.remove(classNames.pages.active);
      }else{
        page.classList.add(classNames.pages.active);
      }
    }

    for(const navLink of navLinks){
      if(!navLink.href.includes(pageId)){
        navLink.classList.remove(classNames.pages.active);
      }else{
        navLink.classList.add(classNames.pages.active);

      }
    }
    window.location.hash = '#/' + '/pageId';
  }

  initLink(){
    const thisHome = this;
    thisHome.dom.wrapper.onlineOrder.addEventListener('click', function(event){
      event.preventDefault();
      thisHome.activatePage('order');
    });

    thisHome.dom.wrapper.bookTable.addEventListener('click', function(event){
      event.preventDefault();
      thisHome.activatePage('booking');
    });
  }
}

export default Home;