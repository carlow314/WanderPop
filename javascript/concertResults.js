//eventful API
//Concerts 			id=concertResults
//Artist 			id=artist
//Venue 			id=venue
//date&time 		id=rConDateTime
//SongKick URI Btn	id=rURI
var conInfo = [];

function getConcerts(goAgainFl) {

	var destCity;
	var departDate;
	var returnDate;

	if (goAgainFl === false)
	{
		destCity = $("#destCity").val();
		departDate = $("#departDate").val();
		returnDate = $("#returnDate").val();
	}
	else
	{
		destCity = $("#destCityB").val();
		departDate = $("#departDateB").val();
		returnDate = $("#returnDateB").val();
	}
	//eventful API to specify what date range and location to call with number of responses
	var queryBaseURL = "https://api.eventful.com/json/events/search?keywords=music&location=" + destCity + "&app_key=zNJJLppf9t878VGw&date=" + departDate + "-" + returnDate + "&within=10&units=miles";
	console.log("EventFul URL: " + queryBaseURL);
	var herokuURL = "https://cors-anywhere.herokuapp.com/";
	var queryURL = herokuURL + queryBaseURL;
	console.log("Query URL: " + queryURL);

	//AJAX call - GET
	$.ajax({
		url: queryURL,
		method: "GET"
	})
	//What to run after data is received
	.done(function(response){
		conInfo = [];
		var obj =
		{
			"lat": 0,
			"lng": 0,
			"venueName": ""
		};
		console.log(response);
		var responseObject = JSON.parse(response);
		if (responseObject.events != null) {
			var shortenCode = responseObject.events.event;
			console.log("shortenCode: ", shortenCode);
			var len = shortenCode.length;
			var htmlStr = "";
			//loop through results to pull specific data from each object
			for (var i = 0; i < len; i++) {
				var evtLoc = {
					"lat": 0,
					"lng": 0,
					"venNm": ""
				};
				evtLoc.lat = parseFloat(shortenCode[i].latitude);
				evtLoc.lng = parseFloat(shortenCode[i].longitude);
				evtLoc.venNm = shortenCode[i].venue_name;
				conInfo.push(evtLoc);
				htmlStr += "<tr>" +
	                  		" <td id='row" + (i+1) + "' data-name='" + shortenCode[i].title + "'>" + shortenCode[i].title + "</td>" +
	                  		" <td id='row" + (i+1) + "' data-name='" + shortenCode[i].venue_name + "'>" + shortenCode[i].venue_name + "</td>" +
	                  		" <td id='row" + (i+1) + "' data-name='" + shortenCode[i].start_time + "'>" + moment(shortenCode[i].start_time).format("MMMM Do YYYY, h:mm a") + "</td>" +
	                		" <td id='row" + (i+1) + "' data-name='" + shortenCode[i].url + "'><a href='" + shortenCode[i].url + "' target='_blank'>" + shortenCode[i].url + "</a></td>" +
	                  		"</tr>";
			}
			$("#concertResults").html(htmlStr);
			showMaps();
		}
		else {
			var htmlStr = "<p>No events during this time in this location!</p>";
			$("#modalMsg").html(htmlStr);
			$("#myModal").modal();
		}
	}).fail(function(err) {
    	//console.log(err);
    	throw err;
    });;
}
