//Créez une classe JoueurHockey.
// nom
// nbButs
// nbPasses

class JoueurHockey{
    constructor(nom, nbButs, nbPasses){
        this.nom = nom;
        this.nbButs = nbButs;
        this.nbPasses = nbPasses;
    }

    Total(){
        return(this.nbButs + this.nbPasses);
    }
}

//Instanciez :
// Sydney Crosy 454 buts 787 passes
// Mario Lemieux 690 buts 1033 passes
// Jaromir Jagr 766 buts 1155 passes

let sydney = new JoueurHockey("Sydney Crosby", 454, 787);
let mario = new JoueurHockey("Mario Lemieux", 690, 1033);
let jaromir = new JoueurHockey("Jaromir Jagr", 766, 1155);


class Equipe{
    constructor(joueur1, joueur2, joueur3){
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
        this.joueur3 = joueur3;
    }
    AfficherAlignement(){
        return("L'équipe 1 est formée des joueurs " + this.joueur1.nom + ", " + this.joueur2.nom + " et " +this.joueur3.nom);
    }
    AfficherPointsTotaux(){
        return(this.joueur1.Total() + this.joueur2.Total() + this.joueur3.Total());
    }
}

let equipe1 = new Equipe(sydney, mario, jaromir);
let joueursEquipe1 = equipe1.AfficherAlignement();

document.write(joueursEquipe1 + "<br>");
document.write(equipe1.AfficherPointsTotaux() + " points pour l'équipe 1!");