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
  $( "#go" ).click(function() {
    // Keri's validation code goes here!
    $( "#sectionA" ).hide();
    $( "#sectionB" ).show( 500 );
  });

  $( "#startOver" ).click(function() {
    $( "#sectionB" ).hide();
    $( "#sectionA" ).show( 500 );
  });

});