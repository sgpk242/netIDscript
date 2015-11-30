javascript:(function(win, doc, $, undefined){
    
    'use strict';
    
    // Don't run if jQuery isn't loaded
    if (typeof window.jQuery === 'undefined') {
        alert('no jQuery');
        return;
    }
    
    // Code goes here.
    var fillForm = function() {
        alert('attempting to fill form');
    	$('input[name=cn]').val('Sean Keenan');
    };
    
    alert('inside function');
    
    fillForm();
    //$('#form').submit();
})(window, window.document, window.jQuery);
