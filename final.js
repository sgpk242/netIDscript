(function(){
	alert('ready for function');
	initMyBookmarklet();
	
	function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			// your JavaScript code goes here!
			alert('filling in form');
    	    		$('#form').val('Sean Keenan');
    	    		alert('done filling');
    	    		$('#form').submit();
		})();
	}
    
})();
