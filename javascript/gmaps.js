//============================================================================
// Name        : getConcertLocation
// Author      : Hai Nguyen
// Version     :
// Copyright   : 2017
// Description : 
//============================================================================
function getConcertLocation()
{
    var address = $("#destCity").val().trim();
    console.log("address: " + address);
    var queryBaseUrl = "https://maps.googleapis.com/maps/api/geocode/json";
    var apiKey = "AIzaSyB0B6uzuNB9zlLaa2urYpBN6Vdgb5BmL7g";
    var queryURL = queryBaseUrl + "?address=" + address + "&key=" + apiKey;
    var concertLoc = {
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
            concertLoc.lat = response["results"][i].geometry.location.lat;
            concertLoc.lng = response["results"][i].geometry.location.lng;
            console.log(concertLoc.lat);
            console.log(concertLoc.lng);
        }
        /*var myJSON = JSON.stringify(response["results"]);
        console.log(myJSON);*/
    });

    return concertLoc;
}

$(document).ready(function()
{
    getConcertLocation();
});