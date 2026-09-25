const p = require('prompt-sync')()
const condidats = [];

function addcondidat (){
        let nom = p("entree le nom :");
        let prenom = p("entree le prenom :")
        let age = Number(p("entree le age :"))
        let cin = p("entree le cin :")
        let partie_Politique = p("entree le partie_Politique :")
        
        condidats.push({
            nom: nom,
            prenom: prenom,
            age: age,
            cin: cin,
            partie_politique: partie_Politique,
            vote:[]

        })
        console.log("candidat bein ajouter")
    }
do {
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
        break;
    case 2 :
    let nombre_de_condidat = Number(p("entrer le nombre de condidat :"))
    for(let i = 1;i <= nombre_de_condidat.length;i++){
         addcondidat() 
    }
   break;
   case 3 : 
   
}
}while(choix !==0);
