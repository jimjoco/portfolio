(function($) {
  $(function() {
    $("#category-carousel").owlCarousel({
      items: 4,
      dots: true,
      margin: 22,
      nav: false,
      loop: true,
      autoplay: false,
    });

    $("#top-picks-carousel").owlCarousel({
      items: 3,
      dots: true,
      margin: 38,
      nav: false,
      loop: true,
      autoplay: false,
    });

    $("#best-deals-").owlCarousel({
      items: 3,
      dots: true,
      margin: 38,
      nav: false,
      loop: true,
      autoplay: false,
    });

    $("#new-items-carousel").owlCarousel({
      items: 3,
      dots: true,
      margin: 38,
      nav: false,
      loop: true,
      autoplay: false,
    });

    $("#blogs-carousel").owlCarousel({
      items: 1,
      dots: true,
      margin: 38,
      nav: false,
      loop: true,
      autoplay: false,
    });
  });
}) (jQuery);

// Tabs
const onTabClick = (e) => {

  e.preventDefault();

  //get all active tabs
  let activeTabs = document.querySelectorAll('.on');

//deactivate existing tab and panel
  activeTabs.forEach(function(tab) {
    tab.className = tab.className.replace('on', '')
  });

  // activate new tab and panel
  e.target.parentElement.className += 'on';

  document.querySelector('#'+e.target.href.split('#')[1]).className += ' on';
}

const element = document.querySelector('#nav-tab');

element.addEventListener('click', onTabClick, false);