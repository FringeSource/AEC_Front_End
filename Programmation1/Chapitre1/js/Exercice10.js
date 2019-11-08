var date;
var article1;
var article2;
var article3;
var TPS;
var TVQ;
var total;
var grandtotal;

// Prise de données de la part du client
date = prompt("Veuillez entrer la date d'aujourd'hui svp.");
article1 = Number(prompt("Prix du premier article."));
article2 = Number(prompt("Prix du deuxième article."));
article3 = Number(prompt("Prix du troisième article."));

// Calcul des taxes et des totaux
total = Number(article1 + article2 + article3);
TPS = Number(total * 0.05);
TVQ = Number(total * 0.09975);
grandtotal = Number(total + TPS + TVQ);

console.log("Date: " + date + " TPS: " + TPS + "$" + " TVQ " + TVQ + "$" + " Grand total: " + grandtotal + "$");