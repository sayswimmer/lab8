function initMap() {
	// create center marker at UCSD
	var ucsd_ltlng = {lat:32.8788, lng:-117.2359};

	// create a map object adn specify the DOM element for display
	var map = new google.maps.Map(document.getElementById('map'), {
		center: ucsd_ltlng,
		zoom: 18
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map: map,
		title: "UCSD"
	});

}