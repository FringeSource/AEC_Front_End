//18.Lire une note d’examen et afficher « Échec » si la note est inférieure à 60 et « Bravo » si la note est supérieure
// ou égale à 60.

var note;

//Demander la note
note = Number(prompt("Quelle est votre note d'examen?"));

if(note < 60){
    document.write("Échec.");
}

else if(note >= 60){
    document.write("Bravo!");
}

else{
    document.write("Erreur. Note invalide.");
}