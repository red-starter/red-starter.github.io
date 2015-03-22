$(document).ready(function(){

	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 400, 'swing', function () {
			window.location.hash = target;
		});
	});


	$('button.toggle').click(function () {
		$(this).prev('div').collapse('toggle')
		$(this).find('i.glyphicon').toggleClass('glyphicon-chevron-up glyphicon-chevron-down')
		$(this).find('span.btn-label').toggle('slow');
	})

	$('button.toggle-all').click(function () {
		// set little rotating spinner to fadein and out
		$(this).prev('i.fa').fadeIn('slow').toggleClass('fa-spinner fa-pulse').fadeOut('slow');
		// trigger other toggle buttons
		$( 'button.toggle' ).trigger( "click" );
		// delay use of button after few seconds
		var btn = $(this);
		btn.prop('disabled', true);
		setTimeout(function(){
		btn.prop('disabled', false);
		}, 1000);
	})
});

function initialize() {
	var myLatlng = new google.maps.LatLng(51.500086, -0.220291);
	var mapProp = {

		center:new google.maps.LatLng(51.500086, -0.220291),
		zoom:12,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'Hello World!'
	});

}

google.maps.event.addDomListener(window, 'load', initialize);
