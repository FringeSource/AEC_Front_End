//3.  Lire deux nombres, si les deux nombres sont plus grands que 9 écrire le mot « BONJOUR » et si tel n’est pas le cas
// écrire « BONSOIR ».

var reponse;

var nombre1;
var nombre2;

//Demander les 2 nombres
nombre1 = Number(prompt("Veuillez entrer le premier nombre."));
nombre2 = Number(prompt("Veuillez entrer le deuxième nombre."));

if(nombre1 > 9 && nombre2 > 9){
    reponse = "BONJOUR";
}
else{
    reponse = "BONSOIR";
}

console.log(reponse)