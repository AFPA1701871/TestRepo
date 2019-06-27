function modifieDessert(e)
{/* commentaire*/
    e.target.textContent = prompt("quel dessert",e.target.textContent);
}
function ajoutDessert (){
    var nouvLi = document.createElement("li");
    nouvLi.textContent = prompt("quel dessert");
    nouvLi.addEventListener("click",  modifieDessert );
    document.getElementById("desserts").appendChild(nouvLi);
}
var ajoutBtnElt = document.querySelector("button");
// Ajout d'un gestionnaire pour l'événement click
ajoutBtnElt.addEventListener("click", ajoutDessert);


