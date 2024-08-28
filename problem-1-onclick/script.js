function suggestionElementPreparation(
  suggestionElemClass,
  suggestionClickEvent,
) {
  const suggestionElem = document.getElementById("mf-suggestion-event");

  // Define map of possible function calls
  const functionMap = {
    "webURLPreparation( true, false )": () => webURLPreparation(true, false),
    // Add other function calls used by this
  };

  if (typeof suggestionClickEvent === "string") {
    if (functionMap[suggestionClickEvent]) {
      suggestionElem.onclick = functionMap[suggestionClickEvent];
    } else {
      console.error(
        "Error: String of the function is not defined in the function map.",
      );
    }
  } else if (typeof suggestionClickEvent === "function") {
    suggestionElem.onclick = suggestionClickEvent;
  } else {
    console.error(
      "Error: suggestionClickEvent should be either string or a function.",
    );
  }
}

// Example how this function is called:
suggestionElementPreparation(
  "mf-web-suggestionicon-text-mobile",
  "webURLPreparation( true, false )",
);
