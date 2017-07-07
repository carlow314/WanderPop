//============================================================================
// Name        : showMaps
// Author      : Hai Nguyen
// Version     :
// Copyright   : 2017
// Description : This function loads the google maps api and calls loadMaps()
//               function to display the maps into a given HTML div element.
//============================================================================
function showMaps()
{
    var script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB0B6uzuNB9zlLaa2urYpBN6Vdgb5BmL7g&callback=loadMaps";
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
    window.google = {}; //attempt to fix including Google Maps API multiple times error 
}

//============================================================================
// Name        : showMaps
// Author      : Hai Nguyen
// Version     :
// Copyright   : 2017
// Description : This function displays the maps into a given HTML div element.
//============================================================================
function loadMaps() 
{
    console.log("conInfo: ", conInfo);
    var infowindow = new google.maps.InfoWindow();
    var map;
    for (var i = 0; i < conInfo.length; i++)
    {
        var uluru = {
            lat: conInfo[i]["lat"], 
            lng: conInfo[i]["lng"]
        };
        console.log("uluru: ", uluru);
        if (i === 0)
        {
            map = new google.maps.Map(document.getElementById("gMap"), {
                zoom: 8,
                center: uluru,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
        }
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
        google.maps.event.addListener(marker, "click", (function(marker, i) {
            return function() {
                infowindow.setContent(conInfo[i]["venNm"]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}