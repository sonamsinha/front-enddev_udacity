// Different restaurants with their information
//Markers

var markers = [
	{   
		rank:1,
    	title: "Alinea",
    	lat: 41.913427, 
    	lng: -87.648083,
    	address: "1723 Halsted St,Chicago,IL 60614",
    	url: "website.alinearestaurant.com",
    	id: "nav0",
    	visible: ko.observable(true),
    	check: true,
    	depth: 95,
    	flickr_id:'23752021172',
    	flickr_url:'',
    	holdMarker:''
    },
    {
    	rank:2,
    	title: "Girl & the Goat",
    	lat: 41.884109, 
    	lng: -87.647976,
    	address: "809 W Randolph St,Chicago,IL 60607",
    	url: "girlandthegoat.com",
    	id: "nav1",
    	visible: ko.observable(true),
    	check: true,
    	depth: 60,
    	flickr_id:'23233582323',
    	flickr_url:'',
    	holdMarker:''
    },
    {
    	rank:3,
	    title: "The Purple Pig",
	    lat: 41.891163, 
	    lng: -87.624687,
	    address: "500 N Michigan Ave,Chicago,IL 60611",
	    url: "thepurplepigchicago.com",
	    id: "nav2",
	    visible: ko.observable(true),
	    check: true,
	    depth: 145,
	    flickr_id:'23492469409',
    	flickr_url:'',
    	holdMarker:''
    },
    {
    	rank:4,
	    title: "Avec Restaurant",
	    lat: 41.884202, 
	    lng: -87.643388,
	    address: "615 W Randolph St,Chicago,IL 60661",
	    url: "avecrestaurant.com",
	    id: "nav3",
	    visible: ko.observable(true),
	    check: true,
	    depth: 128,
	    flickr_id:'23233577583',
    	flickr_url:'',
    	holdMarker:''
    },
    {
    	rank:5,
	    title: "Wildfire Chicago",
	    lat: 41.893786, 
	    lng: -87.633498,
	    address: "159 W Erie St. Chicago,IL 60654",
	    url: "wildfirerestaurant.com",
	    id: "nav4",
	    visible: ko.observable(true),
	    check: true,
	    depth: 150,
	    flickr_id:'23492469649',
    	flickr_url:'',
    	holdMarker:''
    },
    {
    	rank:6,
	    title: "The Gage",
	    lat: 41.881299, 
	    lng: -87.624942,
	    address: "24 S Michigan Ave, Chicago, IL 60603",
	    url: "viewmenu.com",
	    id: "nav5",
	    visible: ko.observable(true),
	    check: true,
	    depth: 530,
	    flickr_id:'23777889751',
    	flickr_url:'',
    	holdMarker:''
    }
];

var infowindow = null;


jQuery(function(){
	// Ajax call being made to flickr
	$.ajax({
		url: "https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=5cbf9bcd91446335996a28e00685735d&user_id=138689695%40N05&format=json",
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		success: displayImages,
		error: displayError
	});

	//Function to display display images from flickr
	function displayImages(data){
		//Loop through the results in the JSON array of data. The 'data.photos.photo'
		$.each(data.photos.photo, function(i,item){

		//Reads in each photo id.
		var photoID = item.id;

		//Gets the url for the images
		var photoURL = "http://farm" + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';

		htmlString = '<img src="' + photoURL + '">';
			jQuery.each(markers, function(i, m){
				if(m.flickr_id == item.id){
					m.flickr_url = htmlString;
				}
			});	
		});

		mapcode();
	}
	//Function to display error when unable to contact with flickr server
	function displayError(){
		alert(" Could not contact flickr server.Check your api key. Images will not be loaded !! ");
		mapcode();
	}

	var map;
	//Initialize the map and its contents
	function mapcode(){
		var start_marker = new google.maps.LatLng(markers[0]['lat'], markers[0]['lng']);
		var mapOptions = {
			center: start_marker,
			streetViewControl: false,
			panControl: false,
			maxZoom: 17,
			zoom: 13,
			zoomControl: true,
			zoomControlOptions: {
				style:google.maps.ZoomControlStyle.SMALL
			}
		};
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		var infowindow = new google.maps.InfoWindow({
			content: ''
		});

		//Reset map on click handler and
    	//when window resize conditionals are met
		$("#resetMap").click(function() {
			console.log(" Resetting now ");
			var windowSize = $(window).width();
			if(windowSize <= 1080) {
				map.setZoom(13);
				map.setCenter(mapOptions.center);

			}
			if (windowSize > 1080) {
				map.setZoom(13);
				map.setCenter(mapOptions.center);
			}
		});

		// Iterating over every marker, and assigning position and marker details to it.
		jQuery.each(markers, function(i, m){
			var start_marker = new google.maps.LatLng(41.903507, -87.652960);

			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(m.lat, m.lng),
				bounds: true,
				id: 'mk_' + m.rank,
				letter : m.index,
				map:map,
				title:m.name
			});

			m.holdMarker = marker;

			//Click marker to view infoWindow
            //zoom in and center location on click
			google.maps.event.addListener(marker, 'click', function(){
				infowindow.close();
				infowindow.setContent(contentString);
				infowindow.open(map, marker);
				var windowSize = $(window).width();
				if(windowSize <= 1080) {
					map.setZoom(18);
				}
				if(windowSize > 1080) {
					map.setZoom(16);
				}
			});

			// Opens info window when the link the scroll list is clicked
			var searchNav = $('#nav' + i);
        		searchNav.click((function(marker, i) {
		          return function() {
		            infowindow.setContent(contentString);
		            infowindow.open(map,marker);
		            map.setZoom(16);
		            map.setCenter(marker.getPosition());
		          }; 
        	})(m.holdMarker, i));

			var contentString = '<div id="content">'+
	                  '<div id="siteNotice">'+
	                  '</div>'+
	                  '<h1 id="firstHeading" class="firstHeading">'+ m.title + '</h1>'+
	                  '<div id="bodyContent">'+ 
	                  '<br><strong>' + m.address + '</strong><br>' +
	                  '<br><a class="weblinks" href="http://' +
						m.url + '"target=_blank">' + m.url + '</a>' +
					  '<br>' +
	                  m.flickr_url +
	                  '</div>'+
	                  '</div>';
		});
	}

	//Query through the different locations from nav bar with knockout.js
    //only display markers and nav elements that match query result
	var viewModel = {
	    query: ko.observable(''),
	};

	viewModel.markers = ko.dependentObservable(function() {
	    var self = this;
	    var search = self.query().toLowerCase();
	    return ko.utils.arrayFilter(markers, function(pointer) {
	    if (pointer.title.toLowerCase().indexOf(search) >= 0) {
	            pointer.check = true;
	            return pointer.visible(true);
	        } else {
	            pointer.check = false;
	            settingMap();
	            return pointer.visible(false);
	        }
	    });       
	}, viewModel);
	ko.applyBindings(viewModel);


	//show $ hide markers in sync with nav
	$("#searchInput").keyup(function() {
		var value = $(this).val(); 
		if(!value){
			settingMap(value);	
		}
	});

	//Determines if markers should be visible
	//This function is passed in the knockout viewModel function
	function settingMap(value){
		console.log(" Value being searched is "+value);

		for (var i = 0; i < markers.length; i++) {
		    if(markers[i].check === true) {
		    	markers[i].holdMarker.setMap(map);
		    	var latLng = new google.maps.LatLng(markers[i].lat, markers[i].lng);
		    	map.panTo(latLng);
		    	map.setZoom(17);
		    	
		    } else {
		    	markers[i].holdMarker.setMap(null);
		    	
		    }
	  	}
	}
});