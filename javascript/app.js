
$( function() {
    var availableTags = [
      { label: "Denver, CO", category: "DIA" },
      { label: "Austin, TX", category: "AUS" },
      { label: "New York City, NY", category: "JFK" },
      { label: "Los Angeles, LA", category: "LAX" },
      { label: "Atlanta, GA", category: "ATL" },
      { label: "Chicago, IL", category: "ORD" },
      { label: "Baltimore, MD", category: "BWI" },
      { label: "Boston, MA", category: "BOS" },
    ];
    $( "#originCity" ).autocomplete({
      source: availableTags
    });
  } );

$( function() {
    var availableTags = [
      { label: "Denver, CO", category: "DIA" },
      { label: "Austin, TX", category: "AUS" },
      { label: "New York City, NY", category: "JFK" },
      { label: "Los Angeles, LA", category: "LAX" },
      { label: "Atlanta, GA", category: "ATL" },
      { label: "Chicago, IL", category: "ORD" },
      { label: "Baltimore, MD", category: "BWI" },
      { label: "Boston, MA", category: "BOS" },
    ];
    $( "#destCity" ).autocomplete({
      source: availableTags
    });
  } );