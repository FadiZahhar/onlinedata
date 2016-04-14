// declaring all maps events, especially related to markers events.
var preloader = '<div class="preloader"><img src="assets/preloaders/preloader.gif"></div>';
// selected country variable used as a global variable
var selectedCountry = "";

var noEvent = function(e) {
	return;
}

var australiaClick = function(e) {
selectedCountry = "australia";
	window.location.href = '#australia';
	$('#map-details').fadeIn();
    $('#map-details').load(preloader);
    $('#map-details').load('views/'+selectedCountry+'.html');
    createMarkers();
    
        createMarker(map,-25.16517337,134.12109175,'Australia',noEvent,'red');
        
}

var egyptClick = function(e) {
	selectedCountry = "egypt";
	window.location.href = '#north-africa';
	$('#map-details').fadeIn();
    $('#map-details').load(preloader);
    $('#map-details').load('views/'+selectedCountry+'.html');
    createMarkers();
   
        createMarker(map,25.16517337,30.41015625,'Egypt',noEvent,'red');
        
}

var germanyClick = function(e) {
selectedCountry = "germany";
	window.location.href = '#europ';
	$('#map-details').fadeIn();
    $('#map-details').load(preloader);
    $('#map-details').load('views/'+selectedCountry+'.html');
    createMarkers();
        createMarker(map,51.99841038,12.43652144,'Germany',noEvent,'red');
}

var italyClick = function(e) {
selectedCountry = "italy";
	window.location.href = '#europ';
	$('#map-details').fadeIn();
    $('#map-details').load(preloader);
    $('#map-details').load('views/'+selectedCountry+'.html');
    createMarkers();
        createMarker(map,42.81152175,13.05175581,'Italy',noEvent,'red');
}

var jordanClick = function(e) {
selectedCountry = "jordan";
	window.location.href = '#north-africa';
	$('#map-details').fadeIn();
    $('#map-details').load(preloader);
    $('#map-details').load('views/'+selectedCountry+'.html');
    createMarkers();
    createMarker(map,31.05293399,37.08984375,'Jordan',noEvent,'red');
       
}

var morocoClick = function(e) {
selectedCountry = "moroco";
	window.location.href = '#north-africa';
	$('#map-details').fadeIn();
    $('#map-details').load(preloader);
    $('#map-details').load('views/'+selectedCountry+'.html');
    createMarkers();
    createMarker(map,33.13755119,-5.93261719,'Moroco',noEvent,'red');
}

var russiaClick = function(e) {
selectedCountry = "russia";
	window.location.href = '#asia';
	$('#map-details').fadeIn();
    $('#map-details').load(preloader);
    $('#map-details').load('views/'+selectedCountry+'.html');
     createMarkers();

        createMarker(map,61.22795718,82.66113281,'Russia',noEvent,'red');

        
}

var saudiarabiaClick = function(e) {
selectedCountry = "saudiarabia";
	window.location.href = '#middle-east';
	$('#map-details').fadeIn();
    $('#map-details').load(preloader);
    $('#map-details').load('views/'+selectedCountry+'.html');
    createMarkers();

        createMarker(map,25.72073513,43.28613281,'Saudi Arabia',noEvent,'red');
        
}

var turkeyClick = function(e) {
	selectedCountry = "turkey";
	window.location.href = '#europ';
	$('#map-details').fadeIn();
    $('#map-details').load(preloader);
    $('#map-details').load('views/'+selectedCountry+'.html');
    createMarkers();
        createMarker(map,39.02771884,35.63964844,'Turkey',noEvent,'red');
}

var ukClick = function(e) {
selectedCountry = "uk";
	window.location.href = '#europ';
	$('#map-details').fadeIn();
    $('#map-details').load(preloader);
    $('#map-details').load('views/'+selectedCountry+'.html');
    createMarkers();
        createMarker(map,52.64306344,-1.53808594,'United Kindom',noEvent,'red');
}

var usaClick = function(e) {
selectedCountry = "usa";
	window.location.href = '#north-america';
	$('#map-details').fadeIn();
    $('#map-details').load(preloader);
    $('#map-details').load('views/'+selectedCountry+'.html');
    createMarkers();
    
        createMarker(map,38.69408505,-101.02272034,'United State',noEvent,'red');
        
}