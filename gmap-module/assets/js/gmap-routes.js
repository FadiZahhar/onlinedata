// initialisation the map and style for the first time 

  // check the hashchange once done.
  $(window).on('hashchange',function(){ 
            var hashtag = location.hash.slice(1);
            var opts;

            // clean the top menu selection
            $('.map-container').find('ul').find('li').removeClass('active');
            // add active to selected top menu using the jquery parent() method.
            var obj = 'a[href="#'+hashtag+'"]';
            $(obj).parent().addClass('active');



            switch(hashtag) {

              case "middle-east":
              createMap(25.84267363,41.61621094,4);
              createMarkers();
              if(selectedCountry=="") {
                selectedCountry = "jordan";
              }
              drawPolygon(136);
              drawPolygon(137);
              drawPolygon(139);
              drawPolygon(140);
              drawPolygon(141);
              drawPolygon(146);
              drawPolygon(147); 
             $('#map-details').fadeIn();
              $('#map-details').load(preloader);
              $('#map-details').load('views/'+selectedCountry+'.html');           
              break;


              case "north-africa":
              createMap(19.47695021,17.62207031,4);
              createMarkers();
              if(selectedCountry=="") {
                selectedCountry = "egypt";
              }
              // draw egypt
              drawPolygon(56);
              drawPolygon(58);
              // draw moroco
              drawPolygon(117);
              $('#map-details').fadeIn();
              $('#map-details').load(preloader);
              $('#map-details').load('views/'+selectedCountry+'.html');
              break;

              case "europ":
              createMap(54.26522408,54.22753906,3);
              createMarkers();
              if(selectedCountry=="") {
                selectedCountry = "france";
              }
              drawPolygon(73);
              drawPolygon(75);
              drawPolygon(76);
              drawPolygon(90);
              drawPolygon(91);
              drawPolygon(93);
              drawPolygon(97);
              drawPolygon(98);
              drawPolygon(102);
              $('#map-details').fadeIn();
              $('#map-details').load(preloader);
              $('#map-details').load('views/'+selectedCountry+'.html');
              break;

              case "asia":
              createMap(52.16045456,97.82226563,3);
              createMarkers();
              if(selectedCountry=="") {
                selectedCountry = "russia";
              }
              drawPolygon(60);
              $('#map-details').fadeIn();
              $('#map-details').load(preloader);
              $('#map-details').load('views/'+selectedCountry+'.html');
              break;

              case "australia":
              createMap(-25.16517337,134.03320313,4);
              createMarkers();
              if(selectedCountry=="") {
                selectedCountry = "australia";
              }
              createMarker(map,-25.16517337,134.12109175,'Australia',noEvent,'red');
              drawPolygon(80);
              $('#map-details').fadeIn();
              $('#map-details').load(preloader);
              $('#map-details').load('views/'+selectedCountry+'.html');
              break;

              case "north-america":
              createMap(46.67959447,-98.70117187,3);
              createMarkers();
              if(selectedCountry=="") {
                selectedCountry = "north-america";
              }
              $('#map-details').fadeIn();
              $('#map-details').load(preloader);
              $('#map-details').load('views/'+selectedCountry+'.html');
              break;

            }
    });
