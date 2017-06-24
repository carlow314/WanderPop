//songKick API
//Concerts 			id=concertResults
//Artist 			id=artist
//Venue 			id=venue
//date&time 		id=rConDateTime
//SongKick URI Btn	id=rURI

$(document).ready(function(){
//SongKick API to specify what date range and location to call with number of responses
var queryURL = ("http://api.songkick.com/api/3.0/events.json?apikey=Femn3w3D7Uf09G60&location=geo:" + latitude + "," + longitude + "&min_date=" + departDate + "&max_date=" + returnDate);

//AJAX call - GET
$.ajax({
	url: queryURL,
	method: "GET"
})

//What to run after data is received
.done(function(response){
	console.log(queryURL);
	console.log("Event Name: " + response.resultsPage.results.event.displayName);
	console.log("Artist: " + response.resultsPage.results.event.performance.artist.displayName);
});

})