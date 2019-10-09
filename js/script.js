(function($) {
    $(document).ready(function (){
        //Tabs functionality
        //Hide all content divs
        $('#tabs div').hide();
        //Show #tab1 content
        $('#tabs div:first').show();
        //Add 'active' class to the #tab1
        $('#tabs ul li a:first').addClass('active');
        //Activating when a tab is clicked
        $('#tabs ul li a').click(function(){
        //remove the active class from #tab1
          $('#tabs ul li a').removeClass('active');
          //Apply active class to selected tab
          $(this).parent().addClass('active');
          //Set currentTab to this link
          var currentTab = $(this).attr('href');
          //Hide away other tabs
          $('#tabs div').hide();
          //and only show the selected tab
          $(currentTab).show();
          //Stop default link action from happening
          return false;
        });
    });

})(window.jQuery);
