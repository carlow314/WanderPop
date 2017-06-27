
var database;

function getDatabase()
{
  return database;
}

function initializeFb()
{
  console.log("Enter initializeFb()")
  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyB91cGgjabADUEJNvLV4L77vppyU7kmF7o",
      authDomain: "wanderpop-b6f0c.firebaseapp.com",
      databaseURL: "https://wanderpop-b6f0c.firebaseio.com",
      projectId: "wanderpop-b6f0c",
      storageBucket: "",
      messagingSenderId: "717284626993"
        };
  firebase.initializeApp(config);
  database = firebase.database();
  console.log("Exit initializeFb()");
}

function getData()
{
  database.ref().on("child_added", function(childSnapshot, prevChildKey){
    console.log(childSnapshot.val());
    //store everything into a variable
    var origin = childSnapshot.val().startingCity;
    var dest = childSnapshot.val().endingCity;
    var depart = childSnapshot.val().takeoff;
    var home = childSnapshot.val().comeBack;

    //overview of info
    console.log("Origin: " + origin);
    console.log("Dest: " + dest);
    console.log("Depart: " + depart);
    console.log("Home: " + home);
  });
}

function addRow()
{
  event.preventDefault();

  //grab user input
  var originShort = $("#originCity").val().trim().substr($("#originCity").val().trim().length - 3);
  var destShort = $("#destCity").val().trim().substr($("#destCity").val().trim().length - 3);
  var origin = $("#originCity").val().trim();
  var dest = $("#destCity").val().trim();
  var departDate = $("#departDate").val().trim();
  var returnDate = $("#returnDate").val().trim();
  var passengers = $("#passNum").val().trim();

  //create local "temporary" object for holding data
  var vacation = {
    startingCity: origin,
    endingCity: dest,
    startingCityAirportCode: originShort,
    endingCityAirportCode: destShort,
    takeoff: departDate,
    comeBack: returnDate,
    passengers: passengers,
    createdDate: firebase.database.ServerValue.TIMESTAMP
  };

  //log to console
  console.log("FireBase Starting City: " + vacation.startingCity);
  console.log("FireBase Destination: " + vacation.endingCity);
  console.log("FireBase Starting City: " + vacation.startingCityAirportCode);
  console.log("FireBase Destination: " + vacation.endingCityAirportCode);
  console.log("FireBase Flight Start: " + vacation.takeoff);
  console.log("FireBase Flight Return: " + vacation.comeBack);
  console.log("FireBase Passenger Count: " + vacation.passengers);


  //upload data to FireBase
  database.ref().push(vacation);

  //clear all input boxes
  $("input").val();
    return false;
}

$(document).ready(function()
{
  initializeFb();

  //button to add input fields to firebase
  $("#go").on("click", addRow);
});
