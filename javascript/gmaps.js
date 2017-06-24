//============================================================================
// Name        : displayConcertLocation
// Author      : Hai Nguyen
// Version     :
// Copyright   : 2017
// Description : 
//============================================================================
function displayConcertLocation(address)
{
    address = "Denver+CO";
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
            var lat  = response["results"][i].geometry.location.lat;
            var lng  = response["results"][i].geometry.location.lng;
            console.log("lat: " + lat);
            console.log("lng: " + lng);
        }
        /*var myJSON = JSON.stringify(response["results"]);
        console.log(myJSON);*/
    });
}

$(document).ready(function()
{
    displayConcertLocation();
});