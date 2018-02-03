jQuery(document).ready(function($) {

  //instagram feed
  var feed = new Instafeed({
    get: 'user',
    userId: '364180803',
    accessToken: '364180803.ca3e263.4ed78f3f4bbf4772946cfbc780872817',
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" class="img-insta"/></a>',
    sortBy: 'most-recent',
    limit: '4',
  });
  feed.run();


  //top menu fixed
  var $topo = $('.main');
  var $menu = $('.menu');
  var $filterSpacer = $('<div />', {
          "class": "filter-drop-spacer",
          "height": $menu.outerHeight()
  });

  $(window).scroll(function ()
  {
          if (!$menu.hasClass('video-scroll') && $(window).scrollTop() > $topo.offset().top)
          {
                  $menu.before($filterSpacer);
                  $menu.addClass('fix');
          }
          else if ($menu.hasClass('fix')  && $(window).scrollTop() < $filterSpacer.offset().top)
          {
                  $menu.removeClass('fix');
                  $filterSpacer.remove();
          }

  });


  //btn mobile
  $(".menu-mobile").on('click', function () {
    $(this).toggleClass('act');
      $(".menu-itens").toggleClass('menu-itens-active');
      $(".menu-mobile").toggleClass('menu-mobile-active');
  });

  //tracking share
  $("#share-fb").on('click', function(){
    ga('send', 'event', 'Share', 'click', 'Compartilhou no Facebook');
  });
  $("#share-tw").on('click', function(){
    ga('send', 'event', 'Share', 'click', 'Compartilhou no Twitter');
  });
  $("#share-gp").on('click', function(){
    ga('send', 'event', 'Share', 'click', 'Compartilhou no Google Plus');
  });
});
