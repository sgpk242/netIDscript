javascript:(function(win, doc, $, undefined){
    alert('inside function');
    'use strict';
    
    // Don't run if jQuery isn't loaded
    if (typeof window.jQuery === 'undefined') {
        alert('no jQuery');
        return;
    }
    
    // Code goes here.
    var fillForm = function() {
    	$('input[name=cn]').val(data.name);
    };
    
    fillForm();
    $('#form').submit();
})(window, window.document, window.jQuery);
