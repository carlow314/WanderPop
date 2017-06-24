var database;

function initializeFb()
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
  database = firebase.database();
}

function getData()
{
  database.ref().on("child_added", function(childSnapshot, prevChildKey){
    console.log(childSnapshot.val());
    //store everything into a variable
    var origin = childSnapshot.val();
    var dest = childSnapshot.val();
    var depart = childSnapshot.val();
    var home = childSnapshot.val();

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
  $("#returnDate").val();
}

$(document).ready(function()
{
  initializeFb();

  //button to add input fields to firebase
  $("#go").on("click", addRow);
});