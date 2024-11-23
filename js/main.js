$(document).ready(function () {
  "use strict";

  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    console.log(e);
  });

  /** ------------------------------------
   * StellarNav Header
   * -------------------------------------*/
  $(".stellarnav").stellarNav({
    theme: "light",
    breakpoint: 991,
    openingSpeed: 350,
    closingDelay: 10,
    position: "top",
    scrollbarFix: false,
    mobileMode: false,
    closeLabel: "",
    menuLabel: "",
  });
  /** ------------------------------------
   *  Mobile menu should close automatically after the clicking on the menu item
   * -------------------------------------*/
  $(".stellarnav ul li").click(function (e) {
    if ($(window).width() < 991) {
      $(".stellarnav ul").css("display", "none");
      $(".stellarnav").removeClass("active");
    }
  });
  /** ------------------------------------
   * Owl Carousel Portfolio
   * -------------------------------------*/

  function work_list() {
    var owl = $(".work-list");
    owl.owlCarousel({
      loop: true,
      margin: 25,
      responsiveClass: true,
      nav: false,
      navText: [
        '<i class="bi bi-arrow-right arrow-right"></i>',
        '<i class="bi bi-arrow-left arrow-left"></i>',
      ],
      items: 6,
      smartSpeed: 1000,
      dots: true,
      autoplay: false,
      autoplayHoverPause: false,
      autoplayTimeout: 4000,
      center: false,
      responsive: {
        0: {
          items: 2,
        },
        480: {
          items: 3,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  }
  work_list();

  /** ------------------------------------
   * Portfolio Mixitup
   * -------------------------------------*/

  $("#grid").mixItUp({});
  $(".portfolio-list2 li a").eq(0).addClass("active");

  /** ------------------------------------
   * Counterup
   * -------------------------------------*/
  $(".counternumber").counterUp({
    delay: 10,
    time: 1000,
  });

  /** ------------------------------------
   * Valid Contact Form
   * -------------------------------------*/

  $("#emailForm").submit(function (event) {
    event.preventDefault();
    var formData = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "php-mail/send.php",
      data: formData,
      success: function (response) {
        $("#response").html(response); // Update response div with the result
      },
      error: function () {
        $("#response").html("Error occurred. Please try again."); // Display error message
      },
    });
  });

  /** ------------------------------------
   * Scroll bottom to top
   * -------------------------------------*/

  var circleBtn = $(".back-to-top");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      circleBtn.addClass("show");
    } else {
      circleBtn.removeClass("show");
    }
  });
  circleBtn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "300"
    );
  });
  /** ------------------------------------
   * WOW
   * -------------------------------------*/

  new WOW().init();

  /** ------------------------------------
   * WOW
   * -------------------------------------*/

  //Scroll stable when click element
  $("portfolio-list2 li a.filter").on("click", function (e) {
    e.preventDefault();
  });
  var headerFixed = $(".header-area");
  if ($(window).scrollTop() > 60) {
    headerFixed.addClass("animated fadeInDown stricky-menu");
  } else {
    headerFixed.removeClass("animated fadeInDown stricky-menu");
  }

  // window on scroll function
  $(window).on("scroll", function () {
    // Sticky Header
    if ($(window).scrollTop() > 50) {
      headerFixed.addClass("animated fadeInDown stricky-menu");
    } else {
      headerFixed.removeClass("animated fadeInDown stricky-menu");
    }
  });
});

$(window).on("load", function () {
  /** ------------------------------------
   * Preloder
   * -------------------------------------*/
  $(".loading").fadeOut();
});
