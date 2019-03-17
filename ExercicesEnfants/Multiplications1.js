var N=Array(10);
let s=Array(5);
document.addEventListener("DOMContentLoaded",() => initN());

function initN() {
    for (var i=0 ; i<10 ; i++) {
        N[i]=Math.floor(Math.random()*8+1);
    };
    for (var i=0 ; i<5; i++) {
        s[i]=N[2*i]*N[2*i+1];
    };
    affiche();
}

function affiche() {
    document.body.insertAdjacentHTML('beforeend','<p>Complète :</p>');
    for (var i=0 ; i<5; i++) {
        document.body.insertAdjacentHTML('beforeend',"<p>"+N[2*i]+" * "+N[2*i+1]+"=<input id="+'"somme'+i+'"></p>');
    };
    document.body.insertAdjacentHTML('beforeend',"<button onclick="+'"addition()"'+">Valider</button>");
}

function addition() {
    let correction=true;
    for (var i=0;i<5; i++) {
        let t=document.getElementById("somme"+i).value;
        correction=correction && (t==s[i]);
        if (t!=s[i]){
            document.getElementById("somme"+i).textContent="";
        }
    }
    if (correction) {
        alert("Bravo!");
        document.location.reload();
    } else {
        document.body.insertAdjacentHTML('beforeend',"<h3>Corrige, il y a des erreurs</h3>");
    }
}
