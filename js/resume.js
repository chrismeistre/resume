(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  $('document').ready(function() {

    jQuery.getJSON('data/workexperience.json', 
      function(data) {
        for (var i =0; i < data.length; i++) {
          var html = `<div class="work-experience-item resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">
            <h3 class="mb-0">` + data[i].title + `</h3>
            ` + data[i].content + `
          </div>
        </div>`;
        $(".work-experience-item:last-child").after(html);
        }
    });

    jQuery.getJSON('data/programming.json', 
      function(data) {
        for (var i =0; i < data.length; i++) {
          var level = data[i].level;
          var rating = '';
          for (var j = 1; j <= level; j++) {
            rating += `<i class='fas fa-star fa-xs'></i>`;
          }
          for (var j = parseInt(level)+1; j <= 5; j++) {
            rating += `<i class='far fa-star fa-xs'></i>`;
          }
          var html = `<div class="rating"><span class="name mr-2">` + data[i].name + `</span>
            ` + rating + `
          </div>`;
          $(".programming-skills").append(html);
        }
    });

    jQuery.getJSON('data/skills.json', 
      function(data) {
        for (var i =0; i < data.length; i++) {
          var level = data[i].level;
          var rating = '';
          for (var j = 1; j <= level; j++) {
            rating += `<i class='fas fa-star fa-xs'></i>`;
          }
          for (var j = parseInt(level)+1; j <= 5; j++) {
            rating += `<i class='far fa-star fa-xs'></i>`;
          }
          var html = `<div class="rating"><span class="name mr-2">` + data[i].name + `</span>
            ` + rating + `
          </div>`;
          $(".skills").append(html);
        }
    });

  });

})(jQuery); // End of use strict
