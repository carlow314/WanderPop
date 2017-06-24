var database;

//============================================================================
// Name        : initializeFirebase
// Author      : Hai Nguyen
// Version     :
// Copyright   : 2017
// Description : This function creates firebase object and reference the 
//               database.
//============================================================================
/*function initializeFirebase()
{
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDJ1q545aKirOrEgLuNRbo4hy8KAZ-pePc",
        authDomain: "flights-and-concerts.firebaseapp.com",
        databaseURL: "https://flights-and-concerts.firebaseio.com",
        projectId: "flights-and-concerts",
        storageBucket: "flights-and-concerts.appspot.com",
        messagingSenderId: "626134173683"
    };
    firebase.initializeApp(config);

    //Reference the database.
    database = firebase.database();
}*/

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
    var row = 0;

    /*event.preventDefault();

    //grab user input
    var origin = $("#originCity").val().trim();
    var dest = $("#destCity").val().trim();
    var depart = $("#departDate").val().trim();
    var home = $("#returnDate").val().trim();

    //create local "temporary" object for holding data
    var vacation = {
      startingCity: origin,
      endingCity: dest,
      takeoff: depart,
      comeBack: home,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    };

    //log to console
    console.log("FireBase Starting City: " + vacation.startingCity);
    console.log("FireBase Destination: " + vacation.endingCity);
    console.log("FireBase Flight Start: " + vacation.comeBack);

    //upload data to FireBase
    database.ref().push(vacation);

    //clear all input boxes
    $("#originCity").val();
    $("#destCity").val();
    $("#departDate").val();
    $("#returnDate").val();*/

    database.ref().orderByChild("dateAdded").on("child_added", function(snapshot) 
    {
        console.log(snapshot);
        var key = snapshot.key;
        console.log("key: " + key);
        console.log(snapshot.val());
        var dest = snapshot.val().endingCity;
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

function displayConcertMapLocation()
{
    //Get the coordinates for the venue
}

$(document).ready(function()
{
    //initializeFirebase();

    //This function handles events where the add animal button is clicked
    //The reason this form works because the button with the #go id
    //was already loaded by the index.html.
    //$("#go").on("click", getLngAndLat);
});