//15. Lire 2 valeurs dans un tableau. Inverser ces deux valeurs.

var tabNombres = [];
var nb1,nb2,temp;
for(var i=0;i<2;i++){
    tabNombres[i] = Number(prompt("Entrez un nombre:"));

}

document.write(tabNombres + "<br>");

nb1 = 0;
nb2 = 1;

temp = tabNombres[nb1];
tabNombres[nb1] = tabNombres[nb2];
tabNombres[nb2]= temp;
document.write(tabNombres);
