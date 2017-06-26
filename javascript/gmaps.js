//============================================================================
// Name        : getLngAndLat
// Author      : Hai Nguyen
// Version     :
// Copyright   : 2017
// Description : This function returns an object in which it will have the
//               longitude and latitude points based from firebase.
//============================================================================
function getLngAndLat()
{
    console.log("Enter getLngAndLat()");
    var address;
    var dest;
    var row = 0;
    var loc = {
        "lat": 0,
        "lng": 0
    };

    var db = getDatabase();
    var rootRef = db.ref();
    var query = rootRef.orderByChild("createdDate").limitToLast(1);
    query.on("child_added", function(snapshot) 
    {
        console.log(snapshot);
        var key = snapshot.key;
        console.log("key: " + key);
        console.log(snapshot.val());
        dest = snapshot.val().endingCity;
        console.log("Destination: " + dest);
        row++;
        address = dest;
        console.log("address: " + address);

        var queryBaseUrl = "https://maps.googleapis.com/maps/api/geocode/json";
        var apiKey = "AIzaSyB0B6uzuNB9zlLaa2urYpBN6Vdgb5BmL7g";
        var queryURL = queryBaseUrl + "?address=" + address + "&key=" + apiKey;

        console.log(queryURL);

        // Creates AJAX call 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
            var len = response["results"].length;
            console.log("len: " + len);
            for (var i = 0; i < len; i++)
            {
                // Creates an element to hold the rating
                loc.lat = response["results"][i].geometry.location.lat;
                loc.lng = response["results"][i].geometry.location.lng;
                console.log(loc);
            }
            /*var myJSON = JSON.stringify(response["results"]);
            console.log(myJSON);*/
        });
    }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });
    console.log("Exit getLngAndLat()");
    return loc;
}

function initMap() 
{
    //var html = $("#gMap");
    var map = new google.maps.Map(document.getElementById("gMap"), {
        center: {
            lat: -34.397, 
            lng: 150.644
        },
        zoom: 8
    });
}

function displayConcertMapLocation()
{
    //Get the coordinates for the venue
}

$(document).ready(function()
{
    //getLngAndLat();
});