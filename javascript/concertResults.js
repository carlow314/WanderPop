//eventful API
//Concerts 			id=concertResults
//Artist 			id=artist
//Venue 			id=venue
//date&time 		id=rConDateTime
//SongKick URI Btn	id=rURI

var conInfo = [];

function getConcerts() {
	
	var destCity = $("#destCity").val();
	var departDate = $("#departDate").val();
	var returnDate = $("#returnDate").val();
	//eventful API to specify what date range and location to call with number of responses
	var queryURL = "https://api.eventful.com/json/events/search?keywords=music&location=" + destCity + "&app_key=zNJJLppf9t878VGw&date=" + departDate + "-" + returnDate + "&within=10&units=miles";
	console.log("EventFul URL: " + queryURL);

	//AJAX call - GET
	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){
		console.log(response);
		var responseObject = JSON.parse(response);
		var shortenCode = responseObject.events.event;
		console.log("shortenCode: ", shortenCode);
		var len = shortenCode.length;
		var htmlElements = "";
		//loop through results to pull specific data from each object
		for (var i=0; i < len; i++){
			var evtLoc = {
				"lat": 0,
				"lng": 0,
				"venNm": ""
			};
			evtLoc.lat = parseFloat(shortenCode[i].latitude);
			evtLoc.lng = parseFloat(shortenCode[i].longitude);
			evtLoc.venNm = shortenCode[i].venue_name;
			conInfo.push(evtLoc);
			htmlElements += "<div class='row'>" + 
							"  <p>Artist: " + shortenCode[i].title + "</p>" +
							"  <p>Venue: " + shortenCode[i].venue_name + "</p>" +
							"  <p>Date: " + shortenCode[i].start_time + "</p>" +
							"  <p>URL: " + shortenCode[i].url + "</p>" +
							"</div>"
		}
		console.log("conInfo: ", conInfo);
		$("#concertResults").html(htmlElements);
	}).fail(function(err) {
    	//console.log(err);
    	throw err;
    });;
}


