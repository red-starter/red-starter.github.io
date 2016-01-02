$( document ).ready(function () {
	// These are called on page load
	function generateAllportfolioHTML(data){
		var portfolioScript = $("#portfolio-template").html()
		var portfolioModalScript = $("#portfolio-modal-template").html()

		var portfolioTemplate = Handlebars.compile(portfolioScript);
		$('#portfolio-list').append(portfolioTemplate(data));
		console.log(portfolioTemplate(data))

		var portfolioModalTemplate = Handlebars.compile(portfolioModalScript);
		$('body').append(portfolioModalTemplate(data));

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