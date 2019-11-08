var article;
var prix;
var cost;
var profit;

article = prompt("Quel article désirez-vous acheter?");
prix = Number(prompt("Quel est son prix?"));

cost = Number(prix * 0.66);
profit = prix - cost;

console.log("Votre article est acheté au prix de gros de " + cost + "$" + " et le profit réalisé par l'entreprise est " + profit + "$");