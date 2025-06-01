
// Simule une liste de produits
const produits = [
    { id: 1, nom: "Chaise", prix: 10 },
    { id: 2, nom: "Table", prix: 25 },
    { id: 3, nom: "Lampe", prix: 5 }
];

function afficherProduits() {
    const container = document.getElementById('produits');
    if (!container) return;

    produits.forEach(p => {
        const el = document.createElement('div');
        el.innerHTML = `<strong>${p.nom}</strong> - ${p.prix}€ 
            <button onclick="ajouterAuPanier(${p.id})">Ajouter</button>`;
        container.appendChild(el);
    });
}

function ajouterAuPanier(id) {
    const panier = JSON.parse(localStorage.getItem('panier') || "[]");
    panier.push(id);
    localStorage.setItem('panier', JSON.stringify(panier));
    alert("Produit ajouté !");
}

function afficherPanier() {
    const panierIds = JSON.parse(localStorage.getItem('panier') || "[]");
    const panier = document.getElementById('panier');
    if (!panier) return;

    if (panierIds.length === 0) {
        panier.innerHTML = "Votre panier est vide.";
        return;
    }

    panier.innerHTML = panierIds.map(id => {
        const p = produits.find(prod => prod.id === id);
        return `<div>${p.nom} - ${p.prix}€</div>`;
    }).join("");
}

window.onload = () => {
    afficherProduits();
    afficherPanier();
};
