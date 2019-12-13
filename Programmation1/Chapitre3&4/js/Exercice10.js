//10.Afficher le montant et la taxe de 9% pour les montants de $5.00 à $100.00 par tranche de $5.00.

for(var montant = 5; montant <= 100; montant+=5){
    var taxe = montant * 0.09;
    document.write(montant);
}
