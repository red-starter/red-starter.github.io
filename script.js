$( document ).ready(function () {
	// These are called on page load
	function generateAllportfolioHTML(data){
		var porfolioScript = $("#porfolios-template").html()
		var porfolioModalScript = $("#porfolio-modal-template").html()

		var porfolioTemplate = Handlebars.compile(porfolioScript);
		$('.portfolio-list').append(porfolioTemplate(data));

		var porfolioModalTemplate = Handlebars.compile(porfolioModalScript);
		$('body').append(porfolioModalTemplate(data));

	}
	generateAllportfolioHTML(projects)

	function generateAllBlogsHTML(data){
		var blogScript = $("#blogs-template").html()
		var blogModalScript = $("#blog-modal-template").html()
		// function that compile data
		var blogTemplate = Handlebars.compile(blogScript);
		$('#blogs-list').append(blogTemplate(data));

		var blogModalTemplate = Handlebars.compile(blogModalScript);
		$('body').append(blogModalTemplate(data));
	}
	generateAllBlogsHTML(blogs)
	

});