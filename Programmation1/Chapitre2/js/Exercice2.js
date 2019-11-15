//2.  Un marchand décide d’accorder une réduction de 15% à tout acheteur, si le montant total de ses achats est plus
// grand que 200.00$. Écrire un algorithme qui permet de calculer et d’afficher la réduction que chaque acheteur a
// droit, connaissant le montant total des achats.

var reponse;

var prix;

//Demander le prix de l'article
prix = Number(prompt("Vous êtes potentiellement éligible à une réduction. Veuillez svp entrer le montant de votre achat."));

if(prix > 200){
    reponse = prix * 0.15;
}
else{
    reponse = 0;
}

console.log("Vous avez droit à une réduction de " + reponse + "$.");
