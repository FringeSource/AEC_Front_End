class Activite{
    constructor(nomActivite, cout){
        this.nomActivite = nomActivite;
        this.cout = cout;
    }
}

class Voyage{
    constructor(destination, prixBilletAvion, tabActivites){
        this.destination = destination;
        this.prixBilletAvion = prixBilletAvion;
        this.tabActivites = tabActivites;
    }

    PrixDuVoyage(){
        let coutTotal = this.prixBilletAvion;
        for(let i = 0; i < tabActivites.length; i++){
            coutTotal += tabActivites[i].cout;
        }
        return coutTotal;
    }
}

class Personne{
    constructor(nomPersonne, voyage){
        this.nomPersonne = nomPersonne;
        this.voyage = voyage;
    }
}

let activite1 = new Activite("Golden Knights hockey", 125);
let activite2 = new Activite("Raiders football", 200);
let activite3 = new Activite("Tournoi de poker", 500);

let tabActivites = [activite1, activite2, activite3];

let voyage = new Voyage("Las Vegas", 400, tabActivites);

let client = new Personne("Shany Carle", voyage);

document.write("Voici les informations de votre réservation:<br><br>");
document.write("Destination: " + voyage.destination + "<br>");
document.write("Passager: " + client.nomPersonne + "<br>");
document.write("Prix du billet d'avion: " + voyage.prixBilletAvion + "$ <br>");
document.write("Vos activités:<br>");
document.write("- " + activite1.nomActivite + ". - Coût: " + activite1.cout + "$<br>");
document.write("- " + activite2.nomActivite + ". - Coût: " + activite2.cout + "$<br>");
document.write("- " + activite3.nomActivite + ". - Coût: " + activite3.cout + "$<br><br>");
document.write("Coût total: " + voyage.PrixDuVoyage() + "$");
