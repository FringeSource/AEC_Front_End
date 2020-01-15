//4. Créez un tableau nommé tab2Exp avec 16 cases entières. À l’aide d’une boucle et de Math.pow, insérez
// les bonnes valeurs dans le tableau.

var tab2Exp = [];
tab2Exp[0] = Math.pow(2, 0);
tab2Exp[1] = Math.pow(2, 1);
tab2Exp[2] = Math.pow(2, 2);
tab2Exp[3] = Math.pow(2, 3);
tab2Exp[4] = Math.pow(2, 4);
tab2Exp[5] = Math.pow(2, 5);
tab2Exp[6] = Math.pow(2, 6);
tab2Exp[7] = Math.pow(2, 7);
tab2Exp[8] = Math.pow(2, 8);
tab2Exp[9] = Math.pow(2, 9);
tab2Exp[10] = Math.pow(2, 10);
tab2Exp[11] = Math.pow(2, 11);
tab2Exp[12] = Math.pow(2, 12);
tab2Exp[13] = Math.pow(2, 13);
tab2Exp[14] = Math.pow(2, 14);
tab2Exp[15] = Math.pow(2, 15);

for(i = 0; i < tab2Exp.length; i++){
    document.write(tab2Exp[i] + "<br>");
}