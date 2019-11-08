//12. Écrire un algorithme qui calcule la note finale d’un étudiant sur 100%. Cette note est dérivée des trois notes
//suivantes : note à l’examen de mi-session qui compte pour 30% de la note finale, note de l’examen de fin session qui
//compte pour 50% et la note de laboratoire qui compte pour 20%.

var ExMiSession;
var ExFinal;
var Laboratoires;
var NoteFinale;

//Prise de données des résultats de l'étudiant
ExMiSession = Number(prompt("Veuillez entrer votre note (sur 30) à l'examen de mi-session."));
ExFinal = Number(prompt("Veuillez entrer votre note (sur 50) à l'examen final."));
Laboratoires = Number(prompt("Veuillez entrer votre note (sur 20) à vos laboratoires."));

//Calcul de la note finale
NoteFinale = Number(ExMiSession + ExFinal + Laboratoires);

console.log("La note finale est de " + NoteFinale +"%");