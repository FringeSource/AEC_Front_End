//19.Lire le montant de vente et afficher le montant d’escompte correspondant sachant que le taux d’escompte est de
// 12% et n’est calculé que sur les montants supérieurs ou égaux à $500.00.

var montant;
var escompte;

//Demander le montant de vente
montant = Number(prompt("Entrez le montant de vente:"));

if(montant >= 500){
    escompte = montant * 0.12;
    document.write("Votre escompte est de " + escompte + "$!");
}
else{
    document.write("Malheureusement, l'escompte n'est accordé qu'aux ventes de 500$ et plus.");
}