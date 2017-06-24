// Initialize Firebase
var config = {
  apiKey: "AIzaSyD_NO_rLt4BZj7VJ9LJYROpIYvn402vMJM",
  authDomain: "flights-and-concerts.firebaseapp.com",
  databaseURL: "https://flights-and-concerts.firebaseio.com",
  projectId: "flights-and-concerts",
  storageBucket: "",
  messagingSenderId: "626134173683"
};
firebase.initializeApp(config);

var database = firebase.database();

//button to add input fields to firebase
$("#go").on("click", function(event){
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
};

//upload data to FireBase
database.ref().push(vacation);

//log to console
console.log("FireBase Starting City: " + vacation.startingCity);
console.log("FireBase Destination: " + vacation.endingCity);
console.log("FireBase Flight Start: " + vacation.comeBack);

//clear all input boxes
$("#originCity").val();
$("#destCity").val();
$("#departDate").val();
$("#returnDate").val();

})

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
})
