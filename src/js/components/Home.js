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

  initLink() {
    const thisHome = this;

    thisHome.homeLinks = document.querySelectorAll(select.nav.homeLinks);
    thisHome.pages = document.querySelector(select.containerOf.pages).children;
    thisHome.navLinks = document.querySelectorAll(select.nav.links);
    //console.log(thisHome.homeLinks);

    for (let link of thisHome.homeLinks) {
      // console.log(link);
      link.addEventListener('click', function (event) {
        event.preventDefault;

        const clickedElement = this;
        const id = clickedElement.getAttribute('href').replace('#', '');
        
        /*run thisHome.activatePage with that id*/
        thisHome.activatePage(id);
        /*change URL hash*/
        window.location.hash = '#/' + id;
      });
    }
  }
  activatePage(pageId) {
    const thisHome = this;

    for (let page of thisHome.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }


    for (let link of thisHome.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );

    } 
  }
}

export default Home;