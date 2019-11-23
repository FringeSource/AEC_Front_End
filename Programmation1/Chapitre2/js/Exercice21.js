//Calculer et afficher l’impôt provincial à charger selon le revenu imposable :
// revenu > 0 et $7000.00 inclus : 16% du revenu imposable
// > 7000 et $14000.00 inclus : $1120 + 19.5% du reste
// >14000 et $23000.00 inclus : $2485 + 21.5% du reste
// >23000 et $50000.00 inclus : $4420 + 24.5% du reste
// >50000 et + $11035 + 26% du reste.

var revenu;
var impot;

//Demander le revenu imposable
revenu = Number(prompt("Quel est votre revenu imposable?"));

if(revenu > 0 && revenu <= 7000){
    impot = revenu * 0.16;
    document.write("Votre impôt provincial est de " + impot + "$.");
}

else if(revenu > 7000 && revenu <= 14000){
    impot = 0.195 * (revenu - 1120) + 1120;
    document.write("Votre impôt provincial est de " + impot + "$.");
}

else if(revenu > 14000 && revenu <= 23000){
    impot = 0.215 * (revenu - 2485) + 2485;
    document.write("Votre impôt provincial est de " + impot + "$.");
}

else if(revenu > 23000 && revenu <= 50000){
    impot = 0.245 * (revenu - 4420) + 4420;
    document.write("Votre impôt provincial est de " + impot + "$.");
}

else{
    impot = 0.26 * (revenu - 11035) + 11035;
    document.write("Votre impôt provincial est de " + impot + "$.");
}