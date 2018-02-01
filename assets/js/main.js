jQuery(document).ready(function($) {
  var feed = new Instafeed({
    get: 'user',
    userId: '364180803',
    accessToken: '364180803.ca3e263.4ed78f3f4bbf4772946cfbc780872817',
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" class="img-insta"/></a>',
    sortBy: 'most-recent',
    limit: '4',
  });
  feed.run();

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

  $(".menu-mobile").on('click', function () {
    $(this).toggleClass('act');
      $(".menu-itens").toggleClass('menu-itens-active');
      $(".menu-mobile").toggleClass('menu-mobile-active');
  })

    $('#shareme').sharrre({
    share: {
      googlePlus: true,
      facebook: true,
      twitter: true,
    },
    enableTracking: true,
    buttons: {
      googlePlus: {size: 'tall', annotation:'bubble'},
      facebook: {layout: 'box_count'},
      twitter: {count: 'vertical'},
    },
    hover: function(api, options){
      $(api.element).find('.buttons').show();
    },
    hide: function(api, options){
      $(api.element).find('.buttons').hide();
    }
  });
});
