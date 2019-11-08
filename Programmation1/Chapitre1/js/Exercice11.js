var prixbase;
var frais;
var profit;
var TPS;
var TVQ;
var  soustotal;
var grandtotal;

//Prise de données concernant le prix de la voiture
prixbase = Number(prompt("Quel est le prix de base de votre nouvelle voiture?"));

//Calculs des frais, de la commission du concessionnaire, des taxes et du grand total
frais = Number(prixbase * 0.02);
profit = Number(prixbase * 0.12);
soustotal = Number(prixbase + frais + profit);
TPS = Number(soustotal * 0.05);
TVQ = Number(soustotal * 0.09975);
grandtotal = Number(soustotal + TPS + TVQ);

// Affichage des informations de la facture
console.log("Les frais pour la voiture neuve sont de " + frais + "$.");
console.log("Le montant de commission est de " + profit + "$.");
console.log("La TPS monte à " + TPS + "$.");
console.log("La TVQ monte à " + TVQ + "$.");
console.log("Le prix de vente total de la voiture est de " + grandtotal + "$.");