console.log("Site Vide Maison chargé");
const produits = [
  { id: 1, nom: "Chaise ancienne", prix: 25 },
  { id: 2, nom: "Lampe vintage", prix: 40 }
];
if (document.getElementById("produits")) {
  document.getElementById("produits").innerHTML = produits.map(p => 
    `<div><h3>${p.nom}</h3><p>${p.prix}€</p></div>`).join("");
}
