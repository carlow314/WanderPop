function populateModifySearch()
{
  var origin = $("#originCity").val();
  var destCity = $("#destCity").val();
  var departDate = $("#departDate").val();
  var returnDate = $("#returnDate").val();
  var passenger = $("#passNum").val();
  $("#originCityB").val(origin);
  $("#destCityB").val(destCity);
  $("#departDateB").val(departDate);
  $("#returnDateB").val(returnDate);
  $("#passNumB").val(passenger);

}

function displayFlightsConcerts(goAgainFl)
{
  var departDDT;
  var returnDDT;
  var originCity;
  var destCity;
  var noOfPeople;
  var departDate;
  var returnDate;

  if (goAgainFl === false)
  {
    originCity = $("#originCity").val();
    destCity = $("#destCity").val();
    noOfPeople = $("#passNum").val();
    departDate = $("#departDate").val();
    returnDate = $("#returnDate").val();
  }
  else
  {
    originCity = $("#originCityB").val();
    destCity = $("#destCityB").val();
    noOfPeople = $("#passNumB").val();
    departDate = $("#departDateB").val();
    returnDate = $("#returnDateB").val();
  }

  //console.log(returnDateDDT._i);
  var htmlStr = "";
  var displayErrorMsg = false;
  //Data Validation
  if (originCity === "") {
    //code for modal
    htmlStr += "<h4>. Please enter an Origin city</h4>";
    displayErrorMsg = true;
  }
  if (destCity === "") {
    //code for modal
    htmlStr += "<h4>. Please enter a Destination city<h4>";
    displayErrorMsg = true;
  }
  if (departDate === "") {
    //code for modal
    htmlStr += "<h4>. Please enter a Depart date</h4>";
    displayErrorMsg = true;
  }
  else {
    departDDT = moment(departDate).unix();
  }
  if (returnDate === "") {
    //code for modal
    htmlStr += "<h4>. Please enter a Return date</h4>";
    displayErrorMsg = true;
  }
  else {
    returnDDT = moment(returnDate).unix();
  }
  if (departDDT >= returnDDT)
  {
    htmlStr += "<h4>. Invalid Depart date</h4>";
    displayErrorMsg = true;
  }
  if (displayErrorMsg === true) {
    if (goAgainFl === false)
    {
      $("#errorMessage").html(htmlStr);
    }
    else
    {
      $("#errorMessageGoAgain").html(htmlStr);
    }
  }
  else {
    $( "#sectionA" ).hide();
    $( "#sectionB" ).show( 500 );
    getFlights(goAgainFl);
    getConcerts(goAgainFl);
  }
}

$( document ).ready(function() {

  $("#departDate").datepicker({ minDate: 0});
  $("#departDate").keypress(function (event) {
    event.preventDefault();
    $("#departDateMessage").css("visibility", "visible");
  });

  $( "#returnDate" ).datepicker({ minDate: 0});
  $("#returnDate").keypress(function (event){
    event.preventDefault();
    $("#returnDateMessage").css("visibility", "visible");
  });

  $( "#sectionB" ).hide();

  $( function() {
    var availableTags = [
      { label: "Denver, CO - DEN", category: "DEN" },
      { label: "Austin, TX - AUS", category: "AUS" },
      { label: "New York City, NY - JFK", category: "JFK" },
      { label: "Los Angeles, CA - LAX", category: "LAX" },
      { label: "Chicago, IL - ORD", category: "ORD" },
      { label: "Baltimore, MD - BWI", category: "BWI" },
      { label: "Boston, MA - BOS", category: "BOS" }
    ];
    $( "#originCity" ).autocomplete({
      source: availableTags
    });
  });

  $( function() {
    var availableTags = [
      { label: "Denver, CO - DEN", category: "DEN" },
      { label: "Austin, TX - AUS", category: "AUS" },
      { label: "New York City, NY - JFK", category: "JFK" },
      { label: "Los Angeles, CA - LAX ", category: "LAX" },
      { label: "Chicago, IL - ORD", category: "ORD" },
      { label: "Baltimore, MD - BWI", category: "BWI" },
      { label: "Boston, MA - BOS", category: "BOS" }
    ];
    $( "#destCity" ).autocomplete({
      source: availableTags
    });
  });

  $( function() {
    var availableTags = [
      { label: "Denver, CO - DEN", category: "DEN" },
      { label: "Austin, TX - AUS", category: "AUS" },
      { label: "New York City, NY - JFK", category: "JFK" },
      { label: "Los Angeles, CA - LAX", category: "LAX" },
      { label: "Chicago, IL - ORD", category: "ORD" },
      { label: "Baltimore, MD - BWI", category: "BWI" },
      { label: "Boston, MA - BOS", category: "BOS" }
    ];
    $( "#originCityB" ).autocomplete({
      source: availableTags
    });
  });

  $( function() {
    var availableTags = [
      { label: "Denver, CO - DEN", category: "DEN" },
      { label: "Austin, TX - AUS", category: "AUS" },
      { label: "New York City, NY - JFK", category: "JFK" },
      { label: "Los Angeles, CA - LAX", category: "LAX" },
      { label: "Chicago, IL - ORD", category: "ORD" },
      { label: "Baltimore, MD - BWI", category: "BWI" },
      { label: "Boston, MA - BOS", category: "BOS" }
    ];
    $( "#destCityB" ).autocomplete({
      source: availableTags
    });
  });


    $("#departDateB").datepicker({ minDate: 0});
    $("#departDateB").keypress(function (event) {
    event.preventDefault();
    $("#departDateMessage").css("visibility", "visible");
    });

    $( "#returnDateB" ).datepicker({ minDate: 0});
    $("#returnDateB").keypress(function (event){
    event.preventDefault();
    $("#returnDateMessage").css("visibility", "visible");
    });

  $( "#go" ).click(function() {
    populateModifySearch();
    displayFlightsConcerts(false)
  });
  $( "#goAgain" ).click(function() {
    event.preventDefault();
    $("#errorMessageGoAgain").empty();
    displayFlightsConcerts(true);
  });
  $( "#startOver" ).click(function() {
    $("#errorMessage").empty();
    $("#errorMessageGoAgain").empty();
    $( "#sectionB" ).hide();
    $( "#sectionA" ).show( 500 );
  });
});
