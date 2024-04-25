/**
 * @file
 * Global utilities.
 *
 */
 
// Expandable Search
//

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.expandableSearch = {
    attach: function (context, settings) {

      $('.menu--search-menu .nav-link, .search-reset').once('expandableSearch').on('click', function(event) {
        event.preventDefault();

        $('.search-expandable input.form-text').val('');

        $('.search-expandable').toggleClass('open');

        if ($('.search-expandable').hasClass('open')) {
            setTimeout(function() {
                $('.search-expandable input.form-text').focus();
            }, 100);
        }
      });
    }
  };
})(jQuery, Drupal);



// Blazy fixes
//

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.equalHeights = {
    attach: function (context, settings) {

      // Match heights
      //
      $('.slick').on('setPosition', function () {
          $(this).find('.card-title').matchHeight();
          $(this).find('.card-footer').matchHeight();
      });

      $('.view-group-listing .grid .card-title').matchHeight({
        byRow: false
      });
    }
  };
})(jQuery, Drupal);
