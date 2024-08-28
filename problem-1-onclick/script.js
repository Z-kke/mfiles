function suggestionElementPreperation(
  suggestionElemClass,
  suggestionClickEvent,
) {
  const suggestionElem = document.getElementById("mf-suggestion-event");
  suggestionElem.onclick = suggestionClickEvent;
}

/* Example how this function is called:
suggestionElementPreparation( "mf-web-suggestionicon-text-mobile",
"webURLPreparation( true, false )" ); */
