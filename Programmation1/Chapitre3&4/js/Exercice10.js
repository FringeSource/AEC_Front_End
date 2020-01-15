//10.Afficher le montant et la taxe de 9% pour les montants de $5.00 à $100.00 par tranche de $5.00.

var montant;

for(i = 5; i <= 100; i+=5){
    montant = i * 1.09;
    document.write("Montant = " + i + "$ avec taxes " + montant.toFixed(2) + "$<br>");
}
