//Javascript pour les pages de calcul, niveau 1 : apprentissage des tables
let N=Array(10);  //Contiendra dix entiers aléatoires, entre 1 et 9
let s=Array(5);  // Contiendra les sommes des entiers précédents, pris deux à deux
let p=Array(5);   // Contiendra les produits des entiers précédents, pris deux à deux
let symbole=Array(5);  //Identifiera les opérations choisies selon la page
// Le code 1 correspond à l'addition, 2 à la multiplication, 3 à la soustraction, 4 à la division
let etoiles=0;  //Contiendra le nombre d'étoiles gagnées par l'utilisateur au fur et à mesure de son travail

document.addEventListener("DOMContentLoaded",() => initN());

function initN() {
    document.body.insertAdjacentHTML('afterbegin','<header><a href="Exercices.html">Retour au choix général</a></header>');
    for (var i=0 ; i<10 ; i++) {
        N[i]=Math.floor(Math.random()*8+1); //Choix des dix entiers aléatoires
    };
    for (var i=0 ; i<5; i++) {
        s[i]=N[2*i]+N[2*i+1];  //Calcul des sommes
        p[i]=N[2*i]*N[2*i+1];  //Calcul des produits
    };
    affiche();
}

function affiche() {
    let niveau=""; //Chaîne de caractères qui contiendra le nombre d'étoiles courant
    for (i=0;i<etoiles;i++){
        niveau=niveau.concat('&#x2605;');
    }
    document.body.insertAdjacentHTML('afterbegin',"<h4>"+niveau+"</h4>"); //Affichage des étoiles

    document.body.insertAdjacentHTML('beforeend','<p>Complète :</p>');  //Affichage des calculs à faire
    //L'affichage varie selon l'opération en cours (+,*,- ou :) et se termine par un input pour le résultat
    //Les résultats utilisateurs sont repérés par les id "resultat0" ... "resultat4"
    for (var i=0 ; i<5; i++) {
        if (symbole[i]==1){
        document.body.insertAdjacentHTML('beforeend',"<p>"+N[2*i]+" + "+N[2*i+1]+"=<input id="+'"resultat'+i+'"></p>');}
        if (symbole[i]==2){
            document.body.insertAdjacentHTML('beforeend',"<p>"+N[2*i]+" * "+N[2*i+1]+"=<input id="+'"resultat'+i+'"></p>');}
        if (symbole[i]==3){
            document.body.insertAdjacentHTML('beforeend',"<p>"+s[i]+" - "+N[2*i+1]+"=<input id="+'"resultat'+i+'"></p>');}
        if (symbole[i]==4){
             document.body.insertAdjacentHTML('beforeend',"<p>"+p[i]+" : "+N[2*i+1]+"=<input id="+'"resultat'+i+'"></p>');}
    };
    //Pour finir, insertion du bouton de validation qui lance la fonction de correction
    document.body.insertAdjacentHTML('beforeend',"<button onclick="+'"corrige()"'+">Valider</button>");
}

function corrige() {    
    let correction=true; //Variable destinée à savoir si les cinq calculs sont tous justes
    for (var i=0;i<5; i++) {
        let t=document.getElementById("resultat"+i).value; //On récupère le résultat n°i de l'utilisateur
        //Dans les lignes suivantes, on teste la validité du calcul selon l'opérateur utilisé.
        //Si le résultat est faux, on vide la case d'input utilisateur correspondante.
        if (symbole[i]==1){
            correction=correction && (t==s[i]);
            if (t!=s[i]){document.getElementById("resultat"+i).value="";};
        };
        if (symbole[i]==2){
            correction=correction && (t==p[i]);
            if (t!=p[i]){document.getElementById("resultat"+i).value="";};
        };
        if (symbole[i]==3){
            correction=correction && (t==N[2*i]);
            if (t!=N[2*i]){document.getElementById("resultat"+i).value="";};
        };
        if (symbole[i]==4){
            correction=correction && (t==N[2*i]);
            if (t!=N[2*i]){document.getElementById("resultat"+i).value="";};
        };
    };
    //Une fois les cinq calculs corrigés, on rajoute une étoile à l'utilisateur s'il n'y a aucune faute,
    //et sinon, on lui demande de rectifier les erreurs.
    //Lorsque l'utilisateur a obtenu cinq étoiles, on lui propose de passer à autre chose
    if (correction) {
        etoiles=etoiles+1;
        if (etoiles<5){
            document.body.textContent="";
            initN();
        } else {
            document.body.textContent="";
            document.body.insertAdjacentHTML('beforeend','<h4>&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</h4>');
            document.body.insertAdjacentHTML('beforeend',"<p>Bravo ! Veux-tu passer à autre chose ?</p>");
            document.body.insertAdjacentHTML('beforeend','<h4><a href="Exercices.html">Retour au choix général</a></h4>')
        };
    } else {
        document.body.insertAdjacentHTML('beforeend',"<h4>Corrige, il y a des erreurs</h4>");
    };
};
