// var FlightRequest =
// {
// "request": {
// "passengers": {
// "adultCount": 1,
// "childCount": 0
// },
// "slice": [
// {
// "origin": "DEN",
// "destination": "BOS",
// "date": "2017-09-19",
// },
// {
// "origin": "BOS",
// "destination": "DEN",
// "date": "2017-09-28",
// }
// ],
// "solutions": 5
// }
// }
//
//
//
// $.ajax({
//      type: "POST",
//      //Set up your request URL and API Key.
//      url: "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyCHL5V7nPq-_YsWYvuOPgJP1wk09vhFu00",
//      contentType: 'application/json', // Set Content-type: application/json
//      dataType: 'json',
//      // The query we want from Google QPX, This will be the variable we created in the beginning
//      data: JSON.stringify(FlightRequest),
//      success: function (data) {
// var tripCost = data.trips.tripOption[0].saleTotal;
// var legOneDest = data.trips.tripOption[0].slice[0].segment[0].leg[0].destination;
// var legOneDepart = data.trips.tripOption[0].slice[0].segment[0].leg[0].origin;
// var legOneDepartTime = data.trips.tripOption[0].slice[0].segment[0].leg[0].departureTime;
// var legOneArrivalTime = data.trips.tripOption[0].slice[0].segment[0].leg[0].arrivalTime;
// var legTwoDest = data.trips.tripOption[0].slice[1].segment[0].leg[0].destination;
// var legTwoDepart = data.trips.tripOption[0].slice[1].segment[0].leg[0].origin;
// var legTwoDepartTime = data.trips.tripOption[0].slice[1].segment[0].leg[0].departureTime;
// var legTwoArrivalTime = data.trips.tripOption[0].slice[1].segment[0].leg[0].arrivalTime;
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
//   };
//     });
