/* eslint-disable */
import "bootstrap";
import "./style.css";

//Creamos las variables con las diferentes opciones"
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domainNameList = document.querySelector("#domainNames");


// Creamos función para generar nombres aleatorios con las variables.
// Array vacio para que con los for se vayan añadiendo los diferentes nombres.
function domainNameGenerator() {
  let domainNames = [];

  // Buscas en cada variable una palabra y la añades a las diferentes combinaciones.
  for (let randomPronoun of pronoun) {
    for (let randomAdj of adj) {
      for (let randomNoun of noun) {
        let allCombinationofDomainNames = `${randomPronoun}${randomAdj}${randomNoun}.com`;
        domainNames.push(allCombinationofDomainNames);
      }
    }
  }
  return domainNames;
}

// Función que interactua el JS con HTML.
window.onload = function() {
  let domainNames = domainNameGenerator();
  domainNameList.innerHTML = "";
  for (let allCombinationofDomainNames of domainNames) {
    let listItemDomainName = document.createElement("li");
    listItemDomainName.textContent = allCombinationofDomainNames;
    // listItemDomainName.style.color = "#FF5733";
    domainNameList.appendChild(listItemDomainName); // Agregar el elemento a la lista
  }
};
