var map;
var markersArray = [];

function loadScript()
{
	var script = document.createElement('script');
	script.type = "text/javascript";
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
      '&signed_in=false&callback=initialize';
	//script.src = "http://maps.googleapis.com/maps/api/js?key=&sensor=false&callback=initialize";
	document.body.appendChild(script);
} 

window.onload = loadScript; 

function initialize()
{
	var mapProp = {
		center: new google.maps.LatLng(41.903507, -87.652960),
		zoom:14,
		zoomControl:true,
		disableDefaultUI:true,
		mapTypeControl:false
	};
  
	map = new google.maps.Map(document.getElementById("map-canvas"),mapProp);
	
	//Helps to keep the map centered to the browser's window
	google.maps.event.addDomListener(window, "resize", function() {
   		var center = map.getCenter();
   		google.maps.event.trigger(map, "resize");
   		map.setCenter(center); 
   	});

	setMarkers(markers);

	settingMap();

	function reset() {  						//TO DO
		var windowSize = $(window).width();
		if(windowSize <= 1080) {
			map.setZoom(14);
			map.setCenter(mapProp.center);

		}
		if (windowSize > 1080) {
			map.setZoom(14);
			map.setCenter(mapProp.center);
		}
	}

	$("#resetMap").click(function() {
		reset();
	});
	/*$(window).resize(function() {
		reset();
	});*/
}

// Different restaurants with their information
//Markers

 var markers = [
	{   
    title: "Alinea",
    lat: 41.913427, 
    lng: -87.648083,
    address: "1723 Halsted St,Chicago,IL 60614",
    url: "website.alinearestaurant.com",
    id: "nav0",
    visible: ko.observable(true),
    check: true,
    depth: 95
    },
    {
    title: "Girl & the Goat",
    lat: 41.884109, 
    lng: -87.647976,
    address: "809 W Randolph St,Chicago,IL 60607",
    url: "girlandthegoat.com",
    id: "nav1",
    visible: ko.observable(true),
    check: true,
    depth: 60
    },
    {
    title: "The Purple Pig",
    lat: 41.891163, 
    lng: -87.624687,
    address: "500 N Michigan Ave,Chicago,IL 60611",
    url: "thepurplepigchicago.com",
    id: "nav2",
    visible: ko.observable(true),
    check: true,
    depth: 145
    },
    {
    title: "Avec Restaurant",
    lat: 41.884202, 
    lng: -87.643388,
    address: "615 W Randolph St,Chicago,IL 60661",
    url: "avecrestaurant.com",
    id: "nav3",
    visible: ko.observable(true),
    check: true,
    depth: 128
    },
    {
    title: "Wildfire Chicago",
    lat: 41.893786, 
    lng: -87.633498,
    address: "159 W Erie St. Chicago,IL 60654",
    url: "wildfirerestaurant.com",
    id: "nav4",
    visible: ko.observable(true),
    check: true,
    depth: 150 
    },
    {
    title: "The Gage",
    lat: 41.881299, 
    lng: -87.624942,
    address: "24 S Michigan Ave, Chicago, IL 60603",
    url: "viewmenu.com",
    id: "nav5",
    visible: ko.observable(true),
    check: true,
    depth: 530
    },
];

//Directs the visibility of the markers on the map
function settingMap() {
  for (var i = 0; i < markers.length; i++) {
    if(markers[i].check === true) {
    markers[i].holdMarker.setMap(map);
    } else {
    markers[i].holdMarker.setMap(null);
    }
  }
}


var images = [
	{
		url: 'images/alinea.png',
		size: new google.maps.Size(273,124),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(189,116)	
	},
	{
		url: 'images/girl&goat.png',
		size: new google.maps.Size(273,124),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(103,102)
	},
	{
		url: 'images/purplepig.png',
		size: new google.maps.Size(273,124),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(192,148)
	},
	{
		url: 'images/avec.png',
		size: new google.maps.Size(273,124),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(46,109)
	},
	{
		url: 'images/wildfire.png',
		size: new google.maps.Size(273,124),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(82,125)	
	},
	{
		url: 'images/thegage.png',
		size: new google.maps.Size(273,124),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(117,134)	
	}
]; 

//var z-Index = [100, 100, 110, 113, 118, 115];

// TO DO- Get and add  
// Get street view image for every particular marker


//Set the markers on the map 
//Set the information window for each marker
function setMarkers(marker) {

	//alert(" Length of Images "+images.length); // to do

	/*for(j=0; j<images.length; j++){
		//alert(" URL of Image = "+images[j].url);
	}*/

	for (i = 0; i<marker.length;i++) {
		marker[i].holdMarker = new google.maps.Marker({
			position: new google.maps.LatLng(marker[i].lat, marker[i].lng),
			map:map,
			/*icon: {
		    	url: 'images/alinea.png',
		    	size: new google.maps.Size(150,60),
		    	origin: new google.maps.Point(0,0),
		    	anchor: new google.maps.Point(189,116)
	    	},*/
	    	icon: images[i],
			title: marker[i].title,
			zIndex: marker[i].depth
		});
				marker[i].contentString = '<strong>' + marker[i].title + '</strong><br><p>'
				+ marker[i].address + '<br>' + '<br></p><a class="weblinks" href="http://' +
				marker[i].url + '"target=_blank">' + marker[i].url + '</a>';

				var infoWindow = new google.maps.InfoWindow({
					content: markers[i].contentString
				})

		//Binds infoWindows content to each marker
		/*marker[i].contentString = '<strong>' + marker[i].title + '</strong><br><p>'
			+ marker[i].address + '<br>' + '<br></p><a class="weblinks" href="http://' +
			marker[i].url + '"target=_blank">' + marker[i].url + '</a>';

		var infoWindow = new google.maps.InfoWindow({
			content: markers[i].contentString
		})*/

		google.maps.event.addListener(marker[i].holdMarker, 'click', (function(location, i) {
			return function() {
				infoWindow.setContent(marker[i].contentString);
				infoWindow.open(map,this);
				var windowSize = $(window).width();
				if(windowSize <= 1080) {
					map.setZoom(18);
				}
				if(windowSize > 1080) {
					map.setZoom(16);
				}
				map.setCenter(location.getPosition());
				// TO DO- ADD pic
			}
		})(marker[i].holdMarker, i));
	}
}


