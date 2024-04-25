/**
 * @file
 * Add Particles on the block provided by this example module.
 */

(function ($, Drupal) {
  Drupal.behaviors.particlesjs_cair = {
    attach: function (context, settings) {
    	//alert(drupalSettings.path.baseUrl);

      	// Particles.
      	particlesJS.load("particles-js", drupalSettings.path.baseUrl + "modules/custom/particlesjs/particlesjs_cair/particles.json");

    }
  };
})(jQuery, Drupal);
