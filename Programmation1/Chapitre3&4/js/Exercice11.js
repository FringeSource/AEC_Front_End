//11. Afficher les nombres de 1 à 10 avec le carré et le cube de chacun de ces nombres.

var nb = 0;
var nbAuCarre;
var nbAuCube;

for(i = 0; i < 10; i++){
    nb++;
    nbAuCarre = Math.pow(nb, 2);
    nbAuCube = Math.pow(nb, 3);
    document.write("Nombre: " + nb + " Carré: " + nbAuCarre + " Cube: " + nbAuCube + "<br>");
}