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
    var address;
    var dest;
    var row = 0;
    var db = getDatabase();

    db.ref().orderByChild("dateAdded").on("child_added", function(snapshot) 
    {
        console.log(snapshot);
        var key = snapshot.key;
        console.log("key: " + key);
        console.log(snapshot.val());
        dest = snapshot.val().endingCity;
        console.log(dest);
        row++;
    }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });

    address = dest;
    console.log("address: " + address);

    var queryBaseUrl = "https://maps.googleapis.com/maps/api/geocode/json";
    var apiKey = "AIzaSyB0B6uzuNB9zlLaa2urYpBN6Vdgb5BmL7g";
    var queryURL = queryBaseUrl + "?address=" + address + "&key=" + apiKey;
    var loc = {
        "lat": 0,
        "lng": 0
    };

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

    return loc;
}

function displayConcertMapLocation()
{
    //Get the coordinates for the venue
}

$(document).ready(function()
{
});