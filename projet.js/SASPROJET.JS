const p = require('prompt-sync')()
const condidats = [];

function addcondidat (){
        let nom = p("entree le nom :");
        let prenom = p("entree le prenom :")
        let age = p("entree le age :")
        let cin = p("entree le cin :")
        let partie_Politique = p("entree le partie_Politique :")
        let vote = p("entree le vote :")
        condidats.push({
            nom: nom,
            prenom: prenom,
            age: age,
            cin: cin,
            partie_politique: partie_Politique,
            vote: vote,

        })
    }


console.log("1: Ajouter un nouveau candidat")
console.log("2:Afficher la liste des candidats ");
console.log("3: Voter pour un candidat");
console.log("4:Modifier les informations d'un candidat");
console.log("5: Supprimer un candidat");
console.log("6: Rechercher des candidats :");
console.log("7 : Statistiques de l'élection ");
let choix = Number(p("enter votre choix : "));

switch (choix) {
    case 1 :
        addcondidat()
}

console.log(condidats);