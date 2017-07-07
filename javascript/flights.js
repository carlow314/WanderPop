//function to get airport code from city name for api
function getAirportCode(city)
{
  var index = city.indexOf("-");
  return city.substring(index+2, city.length);
}
//function to get carrier name by comparing it to the carrier code
function getAirlineName(carrierCode,carrierArray){
  var name;
  for (var i = 0; i < carrierArray.length; i += 1) {
 var code = carrierArray[i].code;
 if(carrierCode === code){
   name = carrierArray[i].name
 }
    }
    return name;
}
//API request function that will subsuqently display flight info in tables
function getFlights()
{
  //flight variables to pass into api request
  var originCity = $("#originCity").val();
  var destCity = $("#destCity").val();
  var noOfPeople = $("#passNum").val();
  var departDate = $("#departDate").val();
  var returnDate = $("#returnDate").val();
  var originAirportCode = getAirportCode(originCity);
  var destAirportCode = getAirportCode(destCity);
//JSON object with flight search criteria for API
  var FlightRequest =
  {
    "request": {
      "passengers": {
        "adultCount": noOfPeople,
        "childCount": 0
      },
      "slice": [{
        "origin": originAirportCode,
        "destination": destAirportCode,
        "date": moment(departDate).format('YYYY-MM-DD'),
        "maxStops": 0
      }, {
        "origin": destAirportCode,
        "destination": originAirportCode,
        "date": moment(returnDate).format('YYYY-MM-DD'),
        "maxStops": 0
      }],
      "solutions": 5
    }
  }
//API Call
  $.ajax({
    type: "POST",
    //Set up your request URL and API Key.
    url: "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyCAj_bbwv0RzjDJIQm5TfvpIslldrNdrIM",
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
        var outboundFlightNumber = outboundLeg.segment[0].flight.number;
        var inboundFlightNumber = inboundLeg.segment[0].flight.number;
        var outboundAirline = outboundLeg.segment[0].flight.carrier;
        var inboundAirline = inboundLeg.segment[0].flight.carrier;
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
        var outboundAirlineName = getAirlineName(outboundAirline,response.trips.data.carrier);
        var inboundAirlineName = getAirlineName(inboundAirline,response.trips.data.carrier);
        var conciseRoundTrip = {
          outboundLeg: {
            destination: outboundLegDestination,
            origin: outboundLegOrigin,
            arrival: outboundLegArrival,
            departure: outboundLegDeparture,
            flightNumber: outboundFlightNumber,
            airline: outboundAirlineName
          },
          inboundLeg: {
            destination: inboundLegDestination,
            origin: inboundLegOrigin,
            arrival: inboundLegArrival,
            departure: inboundLegDeparture,
            flightNumber: inboundFlightNumber,
            airline: inboundAirlineName
          }
        };
        conciseRoundTripData.push(conciseRoundTrip);
      }
      console.log(conciseRoundTripData);
;
      var htmlStr1 = "";
      var htmlStr2 = "";
      for (var i = 0; i < conciseRoundTripData.length; i++)
      {
        htmlStr1 += "<tr>" +
                      " <td id='row" + (i+1) + "' data-name='" + outboundAirlineName[i] + "'>" + conciseRoundTripData[i].outboundLeg.airline + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].outboundLeg.flightNumber + "'>" + conciseRoundTripData[i].outboundLeg.flightNumber + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].outboundLeg.origin + "'>" + conciseRoundTripData[i].outboundLeg.origin + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].outboundLeg.destination + "'>" + conciseRoundTripData[i].outboundLeg.destination + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].outboundLeg.departure + "'>" + moment(conciseRoundTripData[i].outboundLeg.departure).format("MMMM Do YYYY, h:mm a") + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].outboundLeg.arrival + "'>" + moment(conciseRoundTripData[i].outboundLeg.arrival).format("MMMM Do YYYY, h:mm a") + "</td>" +
                      //" <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].outboundLeg.departure + "'>" + conciseRoundTripData[i].outboundLeg.departure + "</td>" +
                      //" <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].outboundLeg.arrival + "'>" + conciseRoundTripData[i].outboundLeg.arrival + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + saleTotals[i] + "'>" + saleTotals[i] + "</td>" +
                    "</tr>";
        htmlStr2 += "<tr>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].inboundLeg.airline + "'>" + conciseRoundTripData[i].inboundLeg.airline + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].inboundLeg.flightNumber + "'>" + conciseRoundTripData[i].inboundLeg.flightNumber + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].inboundLeg.origin + "'>" + conciseRoundTripData[i].inboundLeg.origin + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].inboundLeg.destination + "'>" + conciseRoundTripData[i].inboundLeg.destination + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].inboundLeg.departure + "'>" + moment(conciseRoundTripData[i].inboundLeg.departure).format("MMMM Do YYYY, h:mm a") + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].inboundLeg.arrival + "'>" + moment(conciseRoundTripData[i].inboundLeg.arrival).format("MMMM Do YYYY, h:mm a") + "</td>" +
                      //" <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].inboundLeg.departure + "'>" + conciseRoundTripData[i].inboundLeg.departure + "</td>" +
                      //" <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].inboundLeg.arrival + "'>" + conciseRoundTripData[i].inboundLeg.arrival + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + saleTotals[i] + "'>" + saleTotals[i] + "</td>" +
                    "</tr>";
      }
      $("#inboundFlightResults").html(htmlStr1);
      $("#returnFlightResults").html(htmlStr2);
    } //end of success: function (response)
  });
};
//API request function that will subsuqently display flight info in tables.
//This is based on the modify search parameters
function getFlightsAgain()
{
  var originCity = $("#originCityB").val();
  var destCity = $("#destCityB").val();
  var noOfPeople = $("#passNumB").val();
  var departDate = $("#departDateB").val();
  var returnDate = $("#returnDateB").val();
  var originAirportCode = getAirportCode(originCity);
  var destAirportCode = getAirportCode(destCity);
  var FlightRequest =
  {
    "request": {
      "passengers": {
        "adultCount": noOfPeople,
        "childCount": 0
      },
      "slice": [{
        "origin": originAirportCode,
        "destination": destAirportCode,
        "date": moment(departDate).format('YYYY-MM-DD'),
      }, {
        "origin": destAirportCode,
        "destination": originAirportCode,
        "date": moment(returnDate).format('YYYY-MM-DD'),
      }],
      "solutions": 5
    }
  }

  $.ajax({
    type: "POST",
    //Set up your request URL and API Key.
    url: "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyCAj_bbwv0RzjDJIQm5TfvpIslldrNdrIM",
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
        var outboundFlightNumber = outboundLeg.segment[0].flight.number;
        var inboundFlightNumber = inboundLeg.segment[0].flight.number;
        var outboundAirline = outboundLeg.segment[0].flight.carrier;
        var inboundAirline = inboundLeg.segment[0].flight.carrier;
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
        var outboundAirlineName = getAirlineName(outboundAirline,response.trips.data.carrier);
        var inboundAirlineName = getAirlineName(inboundAirline,response.trips.data.carrier);
        var conciseRoundTrip = {
          outboundLeg: {
            destination: outboundLegDestination,
            origin: outboundLegOrigin,
            arrival: outboundLegArrival,
            departure: outboundLegDeparture,
            flightNumber: outboundFlightNumber,
            airline: outboundAirlineName
          },
          inboundLeg: {
            destination: inboundLegDestination,
            origin: inboundLegOrigin,
            arrival: inboundLegArrival,
            departure: inboundLegDeparture,
            flightNumber: inboundFlightNumber,
            airline: inboundAirlineName
          }
        };
        conciseRoundTripData.push(conciseRoundTrip);
      }
      console.log(conciseRoundTripData);

  // console.log("Your first leg leaves at:",moment(legOneDepartTime).format("MMMM Do YYYY, h:mm a"));
  // console.log("Your first leg arrives at:",moment(legOneArrivalTime).format("MMMM Do YYYY, h:mm a"));
  // console.log("Your second leg leaves at:",moment(legTwoDepartTime).format("MMMM Do YYYY, h:mm"));
  // console.log("Your second leg arrives at:",moment(legTwoArrivalTime).format("MMMM Do YYYY, h:mm a"));
      var htmlStr1 = "";
      var htmlStr2 = "";
      for (var i = 0; i < conciseRoundTripData.length; i++)
      {
        htmlStr1 += "<tr>" +
                      " <td id='row" + (i+1) + "' data-name='" + outboundAirlineName[i] + "'>" + conciseRoundTripData[i].outboundLeg.airline + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].outboundLeg.flightNumber + "'>" + conciseRoundTripData[i].outboundLeg.flightNumber + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].outboundLeg.origin + "'>" + conciseRoundTripData[i].outboundLeg.origin + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].outboundLeg.destination + "'>" + conciseRoundTripData[i].outboundLeg.destination + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].outboundLeg.departure + "'>" + moment(conciseRoundTripData[i].outboundLeg.departure).format("MMMM Do YYYY, h:mm a") + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].outboundLeg.arrival + "'>" + moment(conciseRoundTripData[i].outboundLeg.arrival).format("MMMM Do YYYY, h:mm a") + "</td>" +
                      //" <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].outboundLeg.departure + "'>" + conciseRoundTripData[i].outboundLeg.departure + "</td>" +
                      //" <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].outboundLeg.arrival + "'>" + conciseRoundTripData[i].outboundLeg.arrival + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + saleTotals[i] + "'>" + saleTotals[i] + "</td>" +
                    "</tr>";
        htmlStr2 += "<tr>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].inboundLeg.airline + "'>" + conciseRoundTripData[i].inboundLeg.airline + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].inboundLeg.flightNumber + "'>" + conciseRoundTripData[i].inboundLeg.flightNumber + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].inboundLeg.origin + "'>" + conciseRoundTripData[i].inboundLeg.origin + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].inboundLeg.destination + "'>" + conciseRoundTripData[i].inboundLeg.destination + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].inboundLeg.departure + "'>" + moment(conciseRoundTripData[i].inboundLeg.departure).format("MMMM Do YYYY, h:mm a") + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].inboundLeg.arrival + "'>" + moment(conciseRoundTripData[i].inboundLeg.arrival).format("MMMM Do YYYY, h:mm a") + "</td>" +
                      //" <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].inboundLeg.departure + "'>" + conciseRoundTripData[i].inboundLeg.departure + "</td>" +
                      //" <td id='row" + (i+1) + "' data-name='" + conciseRoundTripData[i].inboundLeg.arrival + "'>" + conciseRoundTripData[i].inboundLeg.arrival + "</td>" +
                      " <td id='row" + (i+1) + "' data-name='" + saleTotals[i] + "'>" + saleTotals[i] + "</td>" +
                    "</tr>";
      }
      $("#inboundFlightResults").html(htmlStr1);
      $("#returnFlightResults").html(htmlStr2);
    } //end of success: function (response)
  });
}
