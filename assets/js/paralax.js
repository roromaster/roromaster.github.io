var pContainerHeight = $('.intro').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.intro-text').css({
      'transform' : 'translate('+ wScroll/2  +'%, '+ wScroll /2 +'%)'
    });
  }


  // Landing Elements
  if(wScroll > $('.testimonials-section').offset().top - ($(window).height() / 1.2)) {

    $('.testimonials-section .testimonial').each(function(i){

      setTimeout(function(){
        $('.testimonials-section .testimonial').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.35))) - 700);
    });

  }


  // Promoscope
  if(wScroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity});

  }


  // Floating Elements

  if(wScroll > $('.blog-posts').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
});
