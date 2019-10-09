(function($) {
  //Tabs functionality
  //Hide all content divs
  $('#tabs div').hide();
  //Show #tab1 content
  $('#tabs div:first').show();
  //Add 'active' class to the #tab1
  $('#tabs ul li a:first').addClass('active');


})(window.jQuery);
