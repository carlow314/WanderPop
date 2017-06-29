var FlightRequest =
{
"request": {
"passengers": {
"adultCount": 1,
"childCount": 0
},
"slice": [
{
"origin": "DEN",
"destination": "BOS",
"date": "2017-09-19",
},
{
"origin": "BOS",
"destination": "DEN",
"date": "2017-09-28",
}
],
"solutions": 5
}
}



$.ajax({
     type: "POST",
     //Set up your request URL and API Key.
     url: "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyCHL5V7nPq-_YsWYvuOPgJP1wk09vhFu00",
     contentType: 'application/json', // Set Content-type: application/json
     dataType: 'json',
     // The query we want from Google QPX, This will be the variable we created in the beginning
     data: JSON.stringify(FlightRequest),
     success: function (response) {
       console.log(response);
       var flightOptions = response.trips.tripOption;
       var saleTotals = [];
       var roundtripData = [];
       for (var i = 0; i < flightOptions.length; i += 1) {
         var flightOption = flightOptions[i];
         saleTotals.push(flightOption.saleTotal);
         roundtripData.push(flightOption.slice);
         console.log(saleTotals);
       }

       var conciseRoundTripData = [];
       for (var i = 0; i < roundtripData.length; i +=1) {
        var currentRoundTrip = roundtripData[i];
        var outboundLeg = currentRoundTrip[0];
        var inboundLeg = currentRoundTrip[1];
        var outboundLegInfo = outboundLeg.segment[0].leg[0];
        var outboundLegDestination = outboundLegInfo.destination;
        var outboundLegOrigin = outboundLegInfo.origin;
        var inboundLegInfo = inboundLeg.segment[0].leg[0];
        var inboundLegDestination = inboundLegInfo.destination;
        var inboundLegOrigin = inboundLegInfo.origin;
        var outboundLegDeparture = outboundLegInfo.departureTime;
        var outboundLegArrival = outboundLegInfo.arrivalTime;
        var inboundLegDeparture = inboundLegInfo.departureTime;
        var inboundLegArrival = inboundLegInfo.arrivalTime;
        var conciseRoundTrip = {
          outboundLeg: {
            destination: outboundLegDestination,
            origin: outboundLegOrigin,
            arrival: outboundLegArrival,
            departure: outboundLegDeparture
          },
          inboundLeg: {
            destination: inboundLegDestination,
            origin: inboundLegOrigin,
            arrival: inboundLegArrival,
            departure: inboundLegDeparture
          }
        };
        conciseRoundTripData.push(conciseRoundTrip);
       }
       console.log(conciseRoundTripData);
//        var shortenSliceOne = data.trips.tripOption[0].slice[0].segment[0].leg[0];
//        var shortenSliceTwo = data.trips.tripOption[0].slice[1].segment[0].leg[0];
// var tripCost = data.trips.tripOption[0].saleTotal;
// var legOneDest = shortenSliceOne.destination;
// var legOneDepart = shortenSliceOne.origin;
// var legOneDepartTime = shortenSliceOne.departureTime;
// var legOneArrivalTime = shortenSliceOne.arrivalTime;
// var legTwoDest = shortenSliceTwo.destination;
// var legTwoDepart = shortenSliceTwo.origin;
// var legTwoDepartTime = shortenSliceTwo.departureTime;
// var legTwoArrivalTime = shortenSliceTwo.arrivalTime;
//
// console.log(data);
// console.log("Your total trip cost is:", tripCost);
// console.log("This is your destination of your first flight:",legOneDest);
// console.log("This is your origin of your first flight:",legOneDepart);
// console.log("Your first leg leaves at:",moment(legOneDepartTime).format("MMMM Do YYYY, h:mm a"));
// console.log("Your first leg arrives at:",moment(legOneArrivalTime).format("MMMM Do YYYY, h:mm a"));
// console.log("This is your destination of your second leg:",legTwoDest);
// console.log("This is your origin of your second leg:",legTwoDepart);
// console.log("Your second leg leaves at:",moment(legTwoDepartTime).format("MMMM Do YYYY, h:mm"));
// console.log("Your second leg arrives at:",moment(legTwoArrivalTime).format("MMMM Do YYYY, h:mm a"));
  }
});
