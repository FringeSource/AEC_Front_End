class MonnaieVirtuelle{
    constructor(nomMonnaie, valeurEnUSD, actif){
        this.nomMonnaie = nomMonnaie;
        this.valeurEnUSD = valeurEnUSD;
        this.actif = actif;
        this.actifUSD = this.actif * this.valeurEnUSD;
    }
}

class Portefeuille{
    constructor(nomProprietaire, tableauMonnaies){
        this.nomProprietaire = nomProprietaire;
        this.tableauMonnaies = tableauMonnaies;
    }

    ValeurDuPortefeuille(){
        let valeurTotale = 0;
        for(let i = 0; i < tableauMonnaies.length; i++){
            valeurTotale += tableauMonnaies[i].actifUSD;
        }
        return valeurTotale;
    }
}

//3 monnaies différentes à instancier
let bitcoin = new MonnaieVirtuelle("Bitcoin", 9730, 6);
let ethereum = new MonnaieVirtuelle("Etherum", 194, 20);
let litecoin = new MonnaieVirtuelle("Litecoin", 58, 10);

// Création du tableau de monnaies
let tableauMonnaies = [bitcoin, ethereum, litecoin];

//Création du portefeuille de Shany
let portefeuilleShany = new Portefeuille("Shany Carle", tableauMonnaies);
let valeurDuPortefeuilleShany = portefeuilleShany.ValeurDuPortefeuille();

document.write("La valeur du portefeuille de " + portefeuilleShany.nomProprietaire + " est de " + valeurDuPortefeuilleShany + "$ US.");