//songKick API
//Concerts 			id=concertResults
//Artist 			id=artist
//Venue 			id=venue
//date&time 		id=rConDateTime
//SongKick URI Btn	id=rURI

var depart = $("#departDate").val();
var returning = $("#returnDate").val();
var latitude = $("concertLoc.lat").val();
var longitude = $("concertLoc.lng").val();

$(document).ready(function(){
//SongKick API to specify what date range and location to call with number of responses
var queryURL = ("http://api.songkick.com/api/3.0/events.json?apikey=Femn3w3D7Uf09G60&per_page=10&location=geo:" + latitude + "," + longitude + "&min_date=" + depart + "&max_date=" + returning);
	
	console.log("SongKick URL: " + queryURL);

//AJAX call - GET
$.ajax({
	url: queryURL,
	method: "GET"
})

//What to run after data is received
.done(function(response){
	console.log(response);
	var answers = response.resultsPage;
	//loop through results to pull specific data from each object
	for (var i=0; i < answers.length; i++){
		var concertResults = concertResults.attr("src", answers[i].results.event[i].displayName);
	};
	console.log(concertResults);
})})


