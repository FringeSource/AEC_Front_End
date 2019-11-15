//9.    Faire un programme qui lit un nom d’utilisateur et un mot de passe. Si le nom d’utilisateur est “admin” et le
// mot de passe “12345”, affichez le message suivant : « Bonjour [nom de l’utilisateur] ». Si les informations ne sont
// pas correctes, affichez le message suivant : « Votre nom d’utilisateur ou votre mot de passe est invalide »

var message;

var utilisateur;
var motDePasse;

//Demander les informations de connexion
utilisateur = prompt("Nom d'utilisateur:");
motDePasse = prompt("Mot de passe:");

if(utilisateur === "admin" && motDePasse === "12345"){
    message = "Bonjour " + utilisateur;
}
else{
    message = "Votre nom d'utilisateur ou votre mot de passe est invalide."
}

console.log(message);