//songKick API
//Concerts 			id=concertResults
//Artist 			id=artist
//Venue 			id=venue
//date&time 		id=rConDateTime
//SongKick URI Btn	id=rURI
var latitude = "51.5078";
var longitude = "-0.128";
var departDate = "2017-07-08";
var returnDate = "2017-12-12";

$(document).ready(function(){
//SongKick API to specify what date range and location to call with number of responses
var queryURL = ("http://api.songkick.com/api/3.0/events.json?apikey=Femn3w3D7Uf09G60&per_page=10&location=geo:" + latitude + "," + longitude + "&min_date=" + departDate + "&max_date=" + returnDate);

//AJAX call - GET
$.ajax({
	url: queryURL,
	method: "GET"
})

//What to run after data is received
.done(function(response){
	console.log(queryURL);
	console.log(response);
	var results = response.resultsPage;
	//loop through results to pull specific data from each object
	for (var i=0; i < results.length; i++){
		var concertResults = concertResults.attr("src", results[i].results.event[i].displayName);
	};
	console.log(concertResults);
})})


