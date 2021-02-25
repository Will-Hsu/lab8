function initMap() {
	L.mapquest.key = 'E95cJaQkB7gIsLA1O1oJdcguyu6VBM5B';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	  center: [32.877651, -117.240044],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12,
	  zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}