(function(win, doc, $, undefined){
	// the minimum version of jQuery we want
    	var v = "1.3.2";
	
	alert(window.location.href);
	
	// check prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		alert('Getting jQuery');
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		alert('ready for function');
		initMyBookmarklet();
	}
	
	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			// your JavaScript code goes here!
			alert('filling in form');
    	    		$('input[name=cn]').val('Sean Keenan');
    	    		alert('done filling');
    	    		//$('#form').submit();
		})();
	}
    
})(window, window.document, window.jQuery);
