function displayFlightsConcerts()
{ 
  var originCity = $("#originCity").val();
  var destCity = $("#destCity").val();
  var noOfPeople = $("#passNum").val();
  var departDate = $("#departDate").val();
  var returnDate = $("#returnDate").val();
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
  if (returnDate === "") {
    //code for modal
    htmlStr += "<h4>. Please enter a Return date</h4>";
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
  if (returnDate === "") {
    //code for modal
    htmlStr += "<h4>. Please enter a Return date</h4>";
    displayErrorMsg = true;
  }
  if (displayErrorMsg === true) {
    $("#errorMessage").html(htmlStr);
  }
  else {
    $( "#sectionA" ).hide();
    $( "#sectionB" ).show( 500 );
    getFlightsAgain();
    getConcertsAgain();
  }
}
$( document ).ready(function() {

  $( "#sectionB" ).hide();

  $( function() {
      var availableTags = [
        { label: "Denver, CO - DEN", category: "DEN" },
        { label: "Austin, TX - AUS", category: "AUS" },
        { label: "New York City, NY - JFK", category: "JFK" },
        { label: "Los Angeles, CA - LAX", category: "LAX" },
        { label: "Chicago, IL - ORD", category: "ORD" },
        { label: "Baltimore, MD - BWI", category: "BWI" },
        { label: "Boston, MA - BOS", category: "BOS" },
      ];
      $( "#originCity" ).autocomplete({
        source: availableTags
      });
    } );

  $( function() {
      var availableTags = [
        { label: "Denver, CO - DEN", category: "DEN" },
        { label: "Austin, TX - AUS", category: "AUS" },
        { label: "New York City, NY - JFK", category: "JFK" },
        { label: "Los Angeles, CA - LAX ", category: "LAX" },
        { label: "Chicago, IL - ORD", category: "ORD" },
        { label: "Baltimore, MD - BWI", category: "BWI" },
        { label: "Boston, MA - BOS", category: "BOS" },
      ];
      $( "#destCity" ).autocomplete({
        source: availableTags
      });
    } );

  $( function() {
      var availableTags = [
        { label: "Denver, CO - DEN", category: "DEN" },
        { label: "Austin, TX - AUS", category: "AUS" },
        { label: "New York City, NY - JFK", category: "JFK" },
        { label: "Los Angeles, CA - LAX", category: "LAX" },
        { label: "Chicago, IL - ORD", category: "ORD" },
        { label: "Baltimore, MD -BWI", category: "BWI" },
        { label: "Boston, MA - BOS", category: "BOS" },
      ];
      $( "#originCityB" ).autocomplete({
        source: availableTags
      });
    } );

  $( function() {
      var availableTags = [
        { label: "Denver, CO - DEN", category: "DEN" },
        { label: "Austin, TX - AUS", category: "AUS" },
        { label: "New York City, NY - JFK", category: "JFK" },
        { label: "Los Angeles, CA - LAX", category: "LAX" },
        { label: "Chicago, IL -ORD", category: "ORD" },
        { label: "Baltimore, MD - BWI", category: "BWI" },
        { label: "Boston, MA -BOS", category: "BOS" },
      ];
      $( "#destCityB" ).autocomplete({
        source: availableTags
      });
    } );

  $( "#goAgain" ).click(function() {
    displayFlightsConcertsAgain();
  });

  $( "#go" ).click(function() {
    displayFlightsConcerts()
  });

  $( "#startOver" ).click(function() {
    $( "#sectionB" ).hide();
    $( "#sectionA" ).show( 500 );
  });
});
