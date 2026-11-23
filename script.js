function addRecommendation() {
  // Obtener el mensaje de la nueva recomendación
  let recommendation = document.getElementById("new_recommendation");

  // Si el usuario escribió un texto válido, mostrar el popup y agregar la tarjeta
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("Nueva recomendación añadida");

    // Invocar showPopup(true) solo al enviar una nueva recomendación
    showPopup(true);

    // Crear un nuevo elemento 'recommendation' y agregarlo a la lista
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML =
      "<span>&#8220;</span>" +
      recommendation.value +
      "<span>&#8221;</span>";

    // Agregar el elemento al final de la lista de recomendaciones
    document.getElementById("all_recommendations").appendChild(element);

    // Limpiar el área de texto
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById("popup").style.visibility = "visible";
  } else {
    document.getElementById("popup").style.visibility = "hidden";
  }
}