
function createMarkers() {
        createMarker(map,31.05293399,37.08984375,'Jordan',jordanClick,'blue');
        createMarker(map,38.69408505,-101.02272034,'United State',usaClick,'blue');
        createMarker(map,-25.16517337,134.12109175,'Australia',australiaClick,'blue');
        createMarker(map,25.16517337,30.41015625,'Egypt',egyptClick,'blue');
        createMarker(map,51.99841038,12.43652144,'Germany',germanyClick,'blue');
        createMarker(map,42.81152175,13.05175581,'Italy',italyClick,'blue');
        createMarker(map,33.13755119,-5.93261719,'Moroco',morocoClick,'blue');
        createMarker(map,61.22795718,82.66113281,'Russia',russiaClick,'blue');
        createMarker(map,25.72073513,43.28613281,'Saudi Arabia',saudiarabiaClick,'blue');
        createMarker(map,39.02771884,35.63964844,'Turkey',turkeyClick,'blue');
        createMarker(map,52.64306344,-1.53808594,'United Kindom',ukClick,'blue');
}

function initStyle(){
  var styles = [{
    "featureType": "administrative",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#808080" },
      { "invert_lightness": true },
      { "visibility": "off" }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
      { "weight": 0.1 },
      { "visibility": "on" },
      { "color": "#efefef" }
    ]
  },{
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "visibility": "on" },
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "administrative.country",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#000000" },
      { "weight": 5.8 },
      { "hue": "#ff0099" },
      { "saturation": 58 },
      { "lightness": 38 },
      { "gamma": 0.44 },
      { "invert_lightness": true }
    ]
  }];
        
        map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
        });
        
        map.setStyle("map_style"); // set the map style

        for(var i = 0;i<countries.length;i++) {

          if(countries[i].code=="EG" || 
            countries[i].code=="SA" || 
            countries[i].code=="LY" || 
            countries[i].code=="SD" ||
            countries[i].code=="YE" ||
            countries[i].code=="JP" ||
            countries[i].code=="GB" ||
            countries[i].code=="FR" ||
            countries[i].code=="IT" ||
            countries[i].code=="AU" ||
            countries[i].code=="NL" ||
            countries[i].code=="BE" ||
            countries[i].code=="CH" ||
            countries[i].code=="TR" ||
            countries[i].code=="GR" ||
            countries[i].code=="DE" ||
            countries[i].code=="JO" ||
            countries[i].code=="OM" ||
            countries[i].code=="IQ" ||
            countries[i].code=="QA" ||
            countries[i].code=="AE" ||
            countries[i].code=="IL" ||
            countries[i].code=="LB" ||
            countries[i].code=="MA") {
          // to trace the code should remove it in production.
          console.log(i + " is the number of " + countries[i].name + " The Code is " + countries[i].code);
          map.drawPolygon({
          paths: countries[i].geoJSON.coordinates,
          useGeoJSON: true,
          strokeColor: '#005093',
          strokeOpacity: 1,
          strokeWeight: 1,
          fillColor: '#005093',
          fillOpacity: 1
          });
        }
      }

}

function drawPolygon(index) {
  map.drawPolygon({
          paths: countries[index].geoJSON.coordinates,
          useGeoJSON: true,
          strokeColor: '#005093',
          strokeOpacity: 1,
          strokeWeight: 1,
          fillColor: '#005093',
          fillOpacity: 0.5
          });
}
// paramerters are : 
// map Gmap object.
// lat, lng of the location of the map
// title to display on the marker if needed
// click a call back function of the marker
// icon_color so far a string of red or blue.
function createMarker(map,lat,lng,title,click,icon_color) {
  // check the icon color if red or blue and set the correct url of the marker icon image.
  var icon;
  if(icon_color=="red"){
    icon = 'http://fadizahhar.github.io/onlinedata/images/reddot.png'
  }
  else {
    icon = 'http://fadizahhar.github.io/onlinedata/images/bluedot.png'
  }

  map.addMarker({
    lat: lat,
    lng: lng,
    title: title,
    click: click,
    icon: icon
    });

}

// a function to create a map used in the events.
        
function createMap(lat,lng,zoom) {
// should add to styles and not overwrite it
  styles = [{
    "featureType": "administrative",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#808080" },
      { "invert_lightness": true },
      { "visibility": "off" }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
      { "weight": 0.1 },
      { "visibility": "on" },
      { "color": "#efefef" }
    ]
  },{
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "visibility": "on" },
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "administrative.country",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#000000" },
      { "weight": 5.8 },
      { "hue": "#ff0099" },
      { "saturation": 58 },
      { "lightness": 38 },
      { "gamma": 0.44 },
      { "invert_lightness": true }
    ]
  },{
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#808080" }
    ]
  }];

map = new GMaps({
          el: "#map-canvas",
          lat: lat,
          lng: lng, 
          zoom: zoom,
        disableDefaultUI: true,
        scrollwheel: true,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        maxZoom: 9,
        minZoom:2,
        panControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM
        }
        });

           map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
        });
        
        map.setStyle("map_style");
}