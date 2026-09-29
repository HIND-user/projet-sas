const p = require('prompt-sync')()
const condidats=[
];

let choix ;

function addcondidat (table){
    let objet = {}
        let nom = p("entree le nom :");
        let prenom = p("entree le prenom :")
        let age = Number(p("entree le age :"))
        let cin = p("entree le cin :")
        for (let i = 0; i < table.length; i++) {
            if (cin == table[i].cin) {
                console.log("impossible")
                return
            }
            
        }
        let partie_Politique = p("entree le partie_Politique :")
        objet.nom = nom
        objet.prenom = prenom
        objet.age = age
        objet.cin = cin
        objet.partiepolitique = partie_Politique
        objet.vote =[]
        table.push(objet)
        console.log("candidat bein ajouter")
    }  
        function liste_condidat(table){
   console.log("----------------------------------")
   console.log("--------liste de candidates-------")
   console.log("----------------------------------")
   for (let i = 0; i < table.length; i++) {
    console.log(`Candidature : ${i+1}`)
    console.log("Cin : " + table[i].cin)
    console.log("Name : " + table[i].nom)
    console.log("prenom : " +table[i].prenom)
    console.log("Age : " +table[i].age)
    console.log("Partie Politique : " +table[i].partiepolitique)
    console.log("votes: " + table[i].vote.length)
    console.log("_____________________________________________")
    
   }
}
function tri_filtre(condidats) {
    console.log("1. pour tri le classement de candidats de plus vote : ")
    console.log("2. pour filtrer les candidates selon le partie politique : ")
    let trietflitre = Number(p("entrer votre chois :"))
    switch (trietflitre) {
        case 1:
            for (let i = 0; i < table.length - 1; i++) {
                for (let j = i + 1; j < table.length; j++) {
                    let max
                    if (table[i].vote.length < table[j].vote.length) {
                        max = table[i]
                        table[i]= table[j]
                        table[j] = maxj
                    }
               
                }
            }
        
            for(let i = 0; i < table.length ; i++) { 
                console.log("# candidature : " +(i+1))
                console.log("nom :" +table[i].nom)
                console.log("prenom :" +table[i].prenom)
                console.log("cin:" +table[i].cin)
                console.log("age :" +table[i].age)
                console.log("partie politique :" +table[i].partiepolitique)
                console.log("numero de vote : " + table[i].vote.length)
                console.log("______________________________")
            }
            break;
           
        case 2: 
            let pt = p("Enter partiepolitique : ")
            for(let i = 0; i<table.length;i++){
                    if(table[i].partiepolitique == pt){
                        console.log("nom : "+table[i].nom)
                        console.log("prenom : "+table[i].prenom)
                        console.log("cin: "+table[i].cin)
                        console.log("age : "+table[i].age)
                        console.log("partie politique :"+table[i].partiepolitique)
                        console.log("nombre de vote : " +table[i].vote.length)
                        console.log("******************************")
                    }
            }
            break;
        default :
            console.log(p("partie politique incorect entrer un autre partie politique :"))
    }  
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
      

function modifierinformationcondidat(table){
    
    console.log("1:pour modifier la partie politique : ")
    console.log("2:pour modifier l'age : ")
 let modifier = p("entrer votre choix : ")
    switch(modifier){
        case 1 :
         let cincin = p("entrer votre cin :")
         let modification_partie = p("entrer la modification :")
         for (let i = 0; i < table.length; i++) {
            if (cincin == table[i].cin) {
            table[i].partiepolitique == modification_partie
            }else{
                console.log("cin introuvable")
            }  
       } 
        break;
        case 2 :
            let cinn = p("entrer votre cin : ")
            let modification_age = p("entrer la modification : ")
            for (let i = 0; i < table.length; i++) {
                if(cinn == table[i].cin){
                    table[i].age == age
                }else{
                    console.log("cin introuvable")
                }
                
            }
    }
      
}
  

function Supprimeruncondidat(table){
       let Supprimercondidat=p("entrer votre cin")
       for(i = 0;i<table.length ;i++){
        if(Supprimercondidat == table[i].cin){
            table.splice(1,i)        }
 
       }
    }
   
function rechercheuncondidat(table){
       let nomcondidat =p("entrer le nom de condidats")
       for (let i = 0; i < table.length; i++ ){
        if(nomcondidat == table[i].nom){
            console.log("----------------------------------")
   console.log("--------liste de candidates-------")
   console.log("----------------------------------")
   for (let i = 0; i < table.length; i++) {
    console.log(`Candidature : ${i+1}`)
    console.log("Cin : " + table[i].cin)
    console.log("Name : " + table[i].nom)
    console.log("prenom : " +table[i].prenom)
    console.log("Age : " +table[i].age)
    console.log("Partie Politique : " +table[i].partiepolitique)
    console.log("_____________________________________________")
            


        }

    }
}

}
do {
console.log("____________liste de chois____________")
console.log("")
console.log("1: Ajouter un nouveau candidat")
console.log("2:Afficher la liste des candidats ");
console.log("3. tri et filtre :")
console.log("4: Voter pour un candidat");
console.log("5:Modifier les informations d'un candidat");
console.log("6: Supprimer un candidat");
console.log("7: Rechercher des candidats :");
console.log("8 : Statistiques de l'élection ");
choix = Number(p("enter votre choix : "));

switch (choix) { 
    case 1 :
    console.clear()    
    addcondidat(condidats) 
        break;
    case 2 :
        console.clear()
        liste_condidat(condidats)

        break;
   case 3 :
        console.clear()
        tri_filtre(condidats)
        break;
    case 4 :
        console.clear()
      voter_pour_un_condidat(condidats)
    break ;
    case 5 :
    modifierinformationcondidat(condidats)
    break;
    case 6 :
      Supprimeruncondidat(condidats)
      console.log("condidat supprimer")
      break;
      case 7 :
       rechercheuncondidat(condidats)
        break;
        case 8 :
            Statistiques()
            break
       


}
}while(choix != 0);

function Statistiques(){
console.log("1: pour affichier le nombre total de condidat :")
console.log("2: le nombre total de vote exist :")
    let statique = Number(p("entrer votre choix :"))
   switch(statique){
    case 1 :
        console.log(condidats.length)
      break;
     case 2 :
     let tota
     break;
   }
}