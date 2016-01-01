$(function () {
	// These are called on page load
	function generateAllprojectsHTML(data){
		var list = $('.projects-list');
		var theTemplateScript = $("#projects-template").html();
		console.log(theTemplateScript)
		var theTemplate = Handlebars.compile(theTemplateScript);
		console.log(theTemplate(data))
		list.append(theTemplate(data));

	}
	generateAllprojectsHTML(projects)

});