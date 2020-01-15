//16.Faire un programme qui boucle 10 fois. À toutes les itérations, votre programme génère un nombre aléatoire
// entre 0 et 1 et vous demande aussi de choisir un nombre entre 0 et 1. Si le nombre est identique, vous gagnez,
// perdez sinon. Vous affichez le pointage à la fin des 10 itérations.

var nbProgramme;
var nbUsager;
var ptsProgramme = 0;
var ptsUsager = 0;

for(var i = 0; i < 10; i++){
    nbProgramme = Math.floor(Math.random() * 2);
    nbUsager = Number(prompt("Veuillez choisir entre 1 ou 0 et le taper ici:"));

    if(nbUsager > 1 || nbUsager < 0){
        document.write("Nombre invalide. Veuillez choisir 0 ou 1 svp.");
    }

    else if(nbProgramme = nbUsager){
        ptsUsager++;
    }

    else{
        ptsProgramme++;
    }
}

document.write("Pointage: <br>");
document.write("Ordinateur = " + ptsProgramme + " points. <br>");
document.write("Vous: " + ptsUsager + " points.");