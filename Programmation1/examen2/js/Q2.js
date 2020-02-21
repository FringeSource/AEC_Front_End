let nbLignes = 10;
let nbColonnes = 20;
let nb = 1000;

for(let i = 0; i < nbLignes; i++){
    for(let j = 0; j < nbColonnes; j++){
        document.write(nb + " ");
        nb -= 5;
    }
    document.write("<br>");
}