$( document ).ready(function() {

  $( "#sectionB" ).hide();

  $( function() {
      var availableTags = [
        { label: "Denver, CO - DEN", category: "DEN" },
        { label: "Austin, TX - AUS", category: "AUS" },
        { label: "New York City, NY - JFK", category: "JFK" },
        { label: "Los Angeles, CA - LAX", category: "LAX" },
        { label: "Atlanta, GA -ATL", category: "ATL" },
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
        { label: "Atlanta, GA - ATL", category: "ATL" },
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
        { label: "Atlanta, GA - ATL", category: "ATL" },
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
        { label: "Atlanta, GA -ATL", category: "ATL" },
        { label: "Chicago, IL -ORD", category: "ORD" },
        { label: "Baltimore, MD - BWI", category: "BWI" },
        { label: "Boston, MA -BOS", category: "BOS" },
      ];
      $( "#destCityB" ).autocomplete({
        source: availableTags
      });
    } );

  $( "#goAgain" ).click(function() {
    // Keri's validation code goes here!
    $( "#sectionA" ).hide();
    $( "#sectionB" ).show();
    getFlights();
    getConcerts();
  });

  $( "#go" ).click(function() {
    var currentDate = moment();
    var currDDT = moment.unix(currentDate);
    var originCity = $("#originCity").val();
    var destCity = $("#destCity").val();
    var noOfPeople = $("#passNum").val();
    var departDate = $("#departDate").val();
    var returnDate = $("#returnDate").val();
    var departDDT = moment.unix(departDate);
    var returnDDT = moment.unix(returnDate);
    var htmlStr = "<ul>";
    var displayErrorMsg = false;
    //Data Validation
    if (originCity === "") {
      //code for modal
      htmlStr += "<li>Please enter an Origin city.</li>";
      displayErrorMsg = true;
    }
    if (destCity === "") {
      //code for modal
      htmlStr += "<li>Please enter a Destination city.</li>";
      displayErrorMsg = true;
    }
    if (departDate === "") {
      //code for modal
      htmlStr += "<li>Please enter a Depart date.</li>";
      displayErrorMsg = true;
    }
    if (returnDate === "") {
      //code for modal
      htmlStr += "<li>Please enter a Return date.</li>";
      displayErrorMsg = true;
    }
    if (displayErrorMsg === true)
    {
      htmlStr += "</ul>";
      $("#errorMessage").html(htmlStr);
    }
    else {
      $( "#sectionA" ).hide();
      $( "#sectionB" ).show( 500 );
      getFlights();
      getConcerts();
    }
  });

  $( "#startOver" ).click(function() {
    $( "#sectionB" ).hide();
    $( "#sectionA" ).show( 500 );
  });

});
