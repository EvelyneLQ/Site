let N=Array(10);
let s=Array(5);let p=Array(5);
let etoiles=0;
let symbole;
document.addEventListener("DOMContentLoaded",() => initN());

function initN() {
    for (var i=0 ; i<10 ; i++) {
        N[i]=Math.floor(Math.random()*8+1);
    };
    for (var i=0 ; i<5; i++) {
        s[i]=N[2*i]+N[2*i+1];
        p[i]=N[2*i]*N[2*i+1];
    };
    affiche();
}

function affiche() {
    let niveau="";
    for (i=0;i<etoiles;i++){
        niveau=niveau.concat('&#x2605;');
    }
    document.body.insertAdjacentHTML('afterbegin',"<h3>"+niveau+"</h3>");
    document.body.insertAdjacentHTML('beforeend','<p>Complète :</p>');
    for (var i=0 ; i<5; i++) {
        document.body.insertAdjacentHTML('beforeend',"<p>"+N[2*i]+symbole+N[2*i+1]+"=<input id="+'"resultat'+i+'"></p>');
    };
    document.body.insertAdjacentHTML('beforeend',"<button onclick="+'"corrige()"'+">Valider</button>");
}

function corrige() {    
    let correction=true;
    for (var i=0;i<5; i++) {
        let t=document.getElementById("resultat"+i).value;
        if (symbole==" + "){
             correction=correction && (t==s[i]);
             if (t!=s[i]){
                 document.getElementById("resultat"+i).value="";
                };
            }
        else {
            correction=correction && (t==p[i]);
                if (t!=p[i]){
                    document.getElementById("resultat"+i).value="";
                };
            };
        };
    if (correction) {
        etoiles=etoiles+1;
        if (etoiles<5){
            document.body.textContent="";
            initN();
        } else {
            document.body.textContent="";
            document.body.insertAdjacentHTML('beforeend','<h3>&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</h3>');
            document.body.insertAdjacentHTML('beforeend',"<p>Bravo ! Veux-tu passer au niveau suivant ?");
        };
    } else {
        document.body.insertAdjacentHTML('beforeend',"<h3>Corrige, il y a des erreurs</h3>");
    };
};
