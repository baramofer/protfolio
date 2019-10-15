'use strict';
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict


function init() {
  renderCards()
}

function renderCards() {
  var cards = getCards();
  var elCards = document.querySelector('.cards');
  var strHtml = '';
  cards.forEach(function (card) {
    strHtml += `<div class="col-md-4 col-sm-6 portfolio-item">
                      <a class="portfolio-link" data-toggle="modal" href="#modal" onclick="renderModal(${card.id})">
                        <div class="portfolio-hover">
                          <div class="portfolio-hover-content">
                            <i class="fa fa-plus fa-3x"></i>
                          </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/${card.img}" alt=""/>
                      </a>
                      <div class="portfolio-caption">
                        <h4>${card.name}</h4>
                        <p class="text-muted">${card.Category}</p>
                      </div>
                  </div>
                `
  });
  elCards.innerHTML = strHtml;
}

function renderModal(cardId) {
  var cards = getCards();
  var currCard = cards.find(function (card) {
    return +card.id === cardId;
  }) 
  var elModals = document.querySelector('.modal-body');
  elModals.innerHTML = `
                <h2>${currCard.name}</h2>
                <p class="item-intro text-muted">${currCard.title}</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${currCard.img}" alt="">
                  <p>${currCard.describe}</p>
                  <ul class="list-inline">
                    <li>Date: January 2017</li>
                    <li>Client: Explore</li>
                    <li>Category: ${currCard.Category}</li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>`
}