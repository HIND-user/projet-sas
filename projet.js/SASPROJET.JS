const p = require('prompt-sync')()
const condidats = [];
let choix

function addcondidat (table){
    let objet = {}
        let nom = p("entree le nom :");
        let prenom = p("entree le prenom :")
        let age = Number(p("entree le age :"))
        let cin = p("entree le cin :")
        let partie_Politique = p("entree le partie_Politique :")
        objet.nom = nom
        objet.prenom = prenom
        objet.age = age
        objet.cin = cin
        objet.partiepolitique = partie_Politique
        table.push(objet)
        console.log("candidat bein ajouter")
    }  
        function liste_condidat (){
    let nombre_de_condidat = Number(p("entrer le nombre de condidat :"))
    for(let i = nombre_de_condidat;i > 0;i--){
         addcondidat(condidats) 
    }
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
        addcondidat(condidats) 
        console.log(condidats)
        break;
    case 2 :
        liste_condidat ()
    console.table(condidats)
   break;
   case 3 : 
 


}
}while(choix !==0);
    


  






function Afficher_liste_condidat (){
      do {
        console.log(p("1:aficher la liste avec tout details :"))
        console.log(p("2:tries les condidats par nombre de vote :"))
        console.log(p("3:filtrer et afficher uniquement les condidats d'un partie politique specifique"))
        let affichier = Number(p("entrer le choix :"));
        switch(affichier){
          case 1 :
            liste_condidat()
            break;
            case 2 :


        }


      }while(affichier != 0)
}