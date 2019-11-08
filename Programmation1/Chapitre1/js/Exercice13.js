//13. Lire les quatre éléments d’information suivants :
//le nom de l’étudiant,
//la note de laboratoire, (compte pour 20%)
//la note de l’examen de mi-session  (compte pour 30%)
//la note de l’examen de fin de session. (compte pour 50%)
//Toutes les notes lues sont sur 100.
//Affiche le nom suivi des trois notes lues qui ont été ramenées sur le pourcentage demandé ci-dessus, et de la note
//finale. Le tout sur des lignes différentes accompagné de messages clairs.

var nom;
var laboratoire;
var ExMiSession;
var ExFinSession;
var laboratoireFinal;
var ExMiSessionFinal;
var ExFinSessionFinal;
var NoteFinale;

//Prise de données de l'étudiant (nom et résultats)
nom = prompt("Quel est votre nom?");
laboratoire = Number(prompt("Quel est votre résultat de laboratoire sur 100?"));
ExMiSession = Number(prompt("Quel est votre résultat à l'examen de mi-session sur 100?"));
ExFinSession = Number(prompt("Quel est votre résultat à l'examen de fin de session sur 100?"));

//Calculs pour la pondération des notes et de la note finale
laboratoireFinal = Number(laboratoire * 0.2);
ExMiSessionFinal = Number(ExMiSession * 0.3);
ExFinSessionFinal = Number(ExFinSession * 0.5);
NoteFinale = Number(laboratoireFinal + ExMiSessionFinal + ExFinSessionFinal);

//Affichage des résultats finaux
console.log("Nom de l'étudiant: " + nom);
console.log("Note pondérée obtenue au laboratoire: " + laboratoireFinal + "/20 .");
console.log("Note pondérée obtenue à l'examen de mi-session: " + ExMiSessionFinal + "/30 .");
console.log("Note pondérée obtenue à l'examen de fin de session: " + ExFinSessionFinal + "/50 ." );
console.log("La note finale est donc de " + NoteFinale + "% .");