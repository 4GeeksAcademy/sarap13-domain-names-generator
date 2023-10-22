/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domainNameList = document.querySelector("#domainNames");

function domainNameGenerator() {
  let domainNames = [];

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
