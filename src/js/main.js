'use strict';
$(document).ready(function() {
  // $('.topSlider').carousel()
  $('#eventClock').countDown({
    with_separators: false,
    label_dd: 'Дней',
    label_hh: 'Часов',
    label_mm: 'Минут',
    label_ss: 'Секунд',
  })
  $('.hamburger').click(function() {
    $('.menu').toggleClass('show');
  });

  $("a.slow").click(function() {
    var e = $(this).attr("href"),
      k = $(e).offset().top;
    return $("html,body").animate({
      scrollTop: k
    }, 750), !1
  });

  // $('.nav-tabs a').on('click', function() {
  //   // e.preventDefault();
  //   $('.nav-tabs a').removeClass('active');
  //   $(this).addClass('active');
  //   var target = $(this).attr('href');
  //   $('.tab-content > div').not(target).hide();
  //   $(target).fadeIn(250);
  // });

  $('.nav-tabs a').on('click', function(e) {
    e.preventDefault();
    $('.nav-tabs a').removeClass('active');
    $(this).addClass('active');
    var target = $(this).attr('href');
    $('.tab-content .tab-pane').removeClass('show');
    $(target).addClass('show');
  });

  // TEAM SEARCH CUSTOM SELECT

  $(".custom-select").each(function() {
    var classes = $(this).attr("class"),
      id = $(this).attr("id"),
      name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function() {
      template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });
  $(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
  }, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
  });
  $(".custom-select-trigger").on("click", function() {
    $('html').one('click', function() {
      $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
  });
  $(".custom-option").on("click", function() {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
  });

  $("input,textarea,email").focus(function() {
    $(this).data("placeholder", $(this).attr("placeholder")), $(this).attr("placeholder", "")
  });

  $("input,textarea,email").blur(function() {
    $(this).attr("placeholder", $(this).data("placeholder"))
  });
  $('input[type="phone"]').inputmask("+7 (999) 999 99 99");
  $('input.team_id').inputmask("numeric",{min:9,max:99999});

  $('.show-team-line-up').on('click', function(e) {
    e.preventDefault();
    // $('.teams_list .el').removeClass('opened');
    // $('.show-team-line-up').removeClass('active');
    $(this).toggleClass('active');
    $(this).parents(".el").toggleClass("opened");
  });

  $('.Upcoming-Qualifiers .slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode :true,
    arrows: true,
    prevArrow: '<div class="arrow prev "></div>',
    nextArrow: '<div class="arrow next "></div>',
    // lazyLoad: 'ondemand',
    centerPadding: '25px',
    infinite: true,
    pauseOnDotsHover: true,
    autoplay: false,
    speed: 500,
    responsive: [{
      breakpoint: 1920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 1660,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });

  $('.organizing_committee .slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 6,
    // slidesToScroll: 0,
    // centerMode :true,
    arrows: true,
    prevArrow: '<div class="arrow prev "></div>',
    nextArrow: '<div class="arrow next "></div>',
    // lazyLoad: 'ondemand',
    useTransform: true,
    centerPadding: '25px',
    infinite: true,
    pauseOnDotsHover: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 0,
    speed: 500,
    responsive: [{
      breakpoint: 1280,
      settings: {
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    }, {
      breakpoint: 1024,
      settings: {
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },{
      breakpoint: 699,
      settings: {
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    }, {
      breakpoint: 450,
      settings: {
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }]
  });

  $('.organizing_committee .prev').on('click', function() {
    $('.organizing_committee .slider').slick('slickPrev');
  });

  $('.organizing_committee .next').on('click', function() {
    $('.organizing_committee .slider').slick('slickNext');
  });

  $('.Upcoming-Qualifiers .prev').on('click', function() {
    $('.Upcoming-Qualifiers .slider').slick('slickPrev');
  });

  $('.Upcoming-Qualifiers .next').on('click', function() {
    $('.Upcoming-Qualifiers .slider').slick('slickNext');
  });

  $('.upload input[type="file"]').on('change', function() {
    var file = $(this).prop('files')[0];
    $('.upload span').remove();
    $('.upload .text').text(file.name);
    // console.log(file);
  });

  $('.tagline li').click(function() {
    $(this).toggleClass('active');
  });

  $('[data-fancybox]').fancybox({
    loop: true,
    buttons: ["zoom", "share", "slideShow", "fullScreen", "download", "thumbs", "close"],
    animationEffect: "zoom-in-out"
  });

  $('#yearPicker1, #yearPicker2, #yearPicker3, #yearPicker4, #yearPicker5, #yearPicker6, #yearPicker7, #yearPicker8').inputmask("9999");

  $('#yearPicker1, #yearPicker2, #yearPicker3, #yearPicker4, #yearPicker5, #yearPicker6, #yearPicker7, #yearPicker8').datepicker({
    view: 'years',
    minView: 'years',
    dateFormat: 'yyyy',
    autoClose: true
  });

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

$('input.random').click(function() {
  var val = getRandomInt(1, 99999);
  $('.team_id').val(val);
});

$('.add_member').click(function(e) {
  e.preventDefault();
  var $this = $(this);
  $(this).closest('.row').append('<div class="member"><label class=""><p class="alert">Поле не заполнено</p><input type="text" required=""></label><label class=""><p class="alert">Поле не заполнено</p><input type="text" required=""></label><label class="dob"><p class="alert">Поле не заполнено</p><input id="yearPicker8" type="text" required="" im-insert="true"><i class="icofont-ui-calendar"></i></label><button class="read icofont-pencil-alt-5"></button></div>');
  $($this).remove();
});

$('label.error, .row.error').click(function() {
  $(this).removeClass('error');
});

// var sortingBest = $('.best_results_list ol').isotope({
//   getSortData: {
//     number: '.best_results_list__result parseInt'
//   },
//   sortBy: [ 'number' ],
//   sortAscending: false,
// });



});

//# sourceMappingURL=main.js.map
