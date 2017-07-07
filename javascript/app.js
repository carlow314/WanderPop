
function displayFlightsConcerts()
{
  var departDDT;
  var returnDDT;
  var originCity = $("#originCity").val();
  var destCity = $("#destCity").val();
  var noOfPeople = $("#passNum").val();
  var departDate = $("#departDate").val();
  var returnDate = $("#returnDate").val();

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
    $("#errorMessage").html(htmlStr);
  }
  else {
    $( "#sectionA" ).hide();
    $( "#sectionB" ).show( 500 );
    getFlights();
    getConcerts();
  }
}

function displayFlightsConcertsAgain()
{
  var departDDT;
  var returnDDT;
  var originCity = $("#originCityB").val();
  var destCity = $("#destCityB").val();
  var noOfPeople = $("#passNumB").val();
  var departDate = $("#departDateB").val();
  var returnDate = $("#returnDateB").val();
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
    $("#errorMessageGoAgain").html(htmlStr);
  }
  else {
    $( "#sectionA" ).hide();
    $( "#sectionB" ).show( 500 );
    getFlightsAgain();
    getConcertsAgain();
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
  });

  $( "#go" ).click(function() {
    displayFlightsConcerts()
  });
  $( "#goAgain" ).click(function() {
    event.preventDefault();
    displayFlightsConcertsAgain();
  });
  $( "#startOver" ).click(function() {
    $( "#sectionB" ).hide();
    $( "#sectionA" ).show( 500 );
  });
});
