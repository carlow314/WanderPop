var location = {};

//============================================================================
// Name        : displayConcertLocation
// Author      : Hai Nguyen
// Version     :
// Copyright   : 2017
// Description : 
//============================================================================
function getConcertLocation(address)
{
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
            location["lat"] = response["results"][i].geometry.location.lat;
            location["lng"] = response["results"][i].geometry.location.lng;
            console.log(location["lat"]);
            console.log(location["lng"]);
        }
        /*var myJSON = JSON.stringify(response["results"]);
        console.log(myJSON);*/
    });
}

$(document).ready(function()
{
    getConcertLocation();
});