//8.Lire les noms et notes d’examen d’une classe de 5 élèves. Afficher ceux (noms et notes)
// qui ont une note supérieure à la moyenne.

var noteMoyenne;
var tabNoms = [];
var tabNotes = [];

for(i = 0; i < 5; i++){
    tabNoms[i] = prompt("Quel est votre nom?");
    tabNotes[i] = Number(prompt("Quelle note avez-vous obtenu?"));
}

noteMoyenne = (tabNotes[0] + tabNotes[1] + tabNotes[2] + tabNotes[3] + tabNotes[4]) / 5

for(i = 0; i < 5; i++) {
    if (tabNotes[i] > noteMoyenne){
        document.write(tabNoms[i] + " a obtenu une note supérieure à la moyenne avec une note de " + tabNotes[i] + "<br>");
    }
}