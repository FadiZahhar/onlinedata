// initializing the map and style for the first time

        var map = new GMaps({
          el: "#map-canvas",
          lat: 12.55456353,
          lng: 20.19140625, 
          zoom: 2,
          disableDefaultUI: true,
          scrollwheel: true,
          draggable: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          maxZoom: 9,
          minZoom:2,
          panControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM
        } // end panControlOptions
        }); // ned GMaps instance.

        // get the normal style of the map.
        initStyle();

        createMarkers(map);
