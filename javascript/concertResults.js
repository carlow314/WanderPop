//eventful API
//Concerts 			id=concertResults
//Artist 			id=artist
//Venue 			id=venue
//date&time 		id=rConDateTime
//SongKick URI Btn	id=rURI

var destCity = $("#destCity").val().trim();
var departDate = $("#departDate").val();
var returnDate = $("#returnDate").val();
var conInfo = [];

function getConcerts() {
	//eventful API to specify what date range and location to call with number of responses
	var queryURL = "https://api.eventful.com/json/events/search?keywords=music&location=" + destCity + "&date=" + departDate + "-" + returnDate + "&within=10&units=miles&app_key=JJLppf9tzN878VGw";
	console.log("EventFul URL: " + queryURL);

	//AJAX call - GET
	$.ajax({
		url: queryURL,
		method: "GET"
	})
	//What to run after data is received
	.done(function(response){
		var obj = 
		{
			"lat": 0,
			"lng": 0,
			"venueName": ""
		};
		console.log(response);
		var shortenCode = response.events.event;
		var len = shortenCode.length;
		var htmlElements = "";
		//loop through results to pull specific data from each object
		for (var i=0; i < len; i++){
			obj.lat = shortenCode[i].latitude;
			obj.lng = shortenCode[i].longitude;
			obj.venueName = shortenCode[i].venue_name;
			conInfo.push(obj);
			htmlElements += "<div class='row'>" + 
							"  <p>Artist: " + shortenCode[i].performers.name + "</p>" +
							"  <p>Venue: " + shortenCode[i].venue_name + "</p>" +
							"  <p>Date: " + shortenCode[i].start_time + "</p>" +
							"  <p>URL: " + shortenCode[i].url + "</p>" +
							"</div>"
		}
		$("#concertResults").html(htmlElements);
	});
}


