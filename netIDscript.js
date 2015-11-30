if (window.location.indexOf("https://apps.nd.edu/webdirectory/directory.cfm") > -1) {
	jQuery("input[name=cn]").val("Bilgicer");
	jQuery("form[name=form7]").submit();
	alert("Success");
}