javascript:(function(){
	if (window.location.indexOf("https://apps.nd.edu/webdirectory/directory.cfm") > -1) {
		alert('Connection successful');
		//jQuery("input[name=cn]").val("Bilgicer");
		//jQuery("form[name=form7]").submit();
		//alert("Success");
	}
})();

(function(win, doc, $, undefined) {
    'use strict';
    
    // Don't run if jQuery isn't loaded
    if (typeof window.jQuery === 'undefined') {
      return;
    }
    
    // Code goes here.
    var fillForm = function() {
    	$('input[name=cn]').val(data.name);
  };
  
  fillForm();
  $('#form').submit();

  }(window, window.document, window.jQuery));
