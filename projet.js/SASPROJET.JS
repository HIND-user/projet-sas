const p = require('prompt-sync')()
const condidats = [];
let choix ;

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
        function liste_condidat (table){
    let nombre_de_condidat = Number(p("entrer le nombre de condidat :"))
    for(let i = nombre_de_condidat;i > 0;i--){
         addcondidat(condidats) 
    }
}

function max_vote_condidat (condidats){
            let maxvote = condidats.vote[0];
            let maxindix =0;
            for(i = 1 ; i < condidats.length ;i++){
                if(maxvote < condidats.vote[i]){
                    condidats.vote[i] = maxvote
                    maxindix = i;
                }
            }
             return maxindix;
             function maxvote2 (condidats){
                const newarr = [];
                for(let i in condidats.vote){
                    let maxvote = max_vote_condidat(condidats)
                    console.log(condidats.splice(maxvote,i),condidats.vote)
                }
                 return newarr;
             }
              

        } 


        function filtrage(table){
    let partie = p("entrer la partie politique :")
    for(i=0; i<condidats.length; i++){
        if( table.partie_Politique[i] === partie){
            console.log("nom : " +table[i].nom)
            console.log("prenom : " +table[i].prenom)
            console.log("age : " +table[i].age)
            console.log("cin : " +table[i].cin)
            console.log("partie_politique : " +table[i].partie_politique)
            console.log("nombre de vote : " +table[i].vote.length)

        }
    }
}


function Afficher_liste_condidat (){
      do {
        console.log(p("1:aficher la liste avec tout details :"))
        console.log(p("2:tries les condidats par nombre de vote :"))
        console.log(p("3:filtrer et afficher uniquement les condidats d'un partie politique specifique"))
        let affichier = Number(p("entrer le choix :"));
        switch(affichier){
          case 1 :
            liste_condidat(table)
            break;
            case 2 : 
                max_vote_condidat(table)
        console.log(max_vote_condidat);
        break;
                case 3 :
                    filtrage(table)
                    console.log(filtrage)
              break;
              default:
                break;

        }
     }while(affichier != 0)
    
    }





function voter_pour_un_condidat (table){
     let cin_electeur = p("entrer votre CIN :")
     for (let i = 0; i < table.length-1; i++) {
      for (let j = i+1; j < table[i].vote.length; j++) {
        if (cin_electeur == table[i].vote[j]) {
            console.log("impossible de voter (cin repeter")
            return
        }
      }         
    } 
    let bool = true
    let cin_candidat = p("entrer le cin de candidat que vous vouler le voter :")
    for (let i = 0; i < table.length; i++) {
        if (cin_candidat == table[i].cin) {
            table[i].vote.push(cin_electeur)
        }   
    }
    if( bool = false){
        console.log("impossible")
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
        liste_condidat (condidats)
    console.table(condidats)
   break;
   case 3 :
    Afficher_liste_condidat(condidats) 
        
    break;
    case 4 :
      voter_pour_un_condidat(condidats)
    break ;
    
    

       


}
}while(choix !==0);
     


      
