/**
* PHP Email Form Validation - v3.2
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  emailjs.init('xzECRwpRq7rk944Pa');

  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let thisForm = this;
        thisForm.querySelector('.loading').classList.add('d-block');
        thisForm.querySelector('.error-message').classList.remove('d-block');
        thisForm.querySelector('.sent-message').classList.remove('d-block');
        // generate a five digit number for the contact_number variable
        thisForm.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'template_97542yl', this)
            .then(function() {
              thisForm.querySelector('.sent-message').classList.add('d-block');
              thisForm.reset(); 
            }, function(error) {
                displayError(thisForm, error);
            });
    });
  }
  
})();
