document.addEventListener("DOMContentLoaded",() => init());
document.addEventListener("DOMContentLoaded",() => tdm());

//Initialise la page en chargeant le thème de base
//Mémorisée pour l'avenir, inactive pour l'instant
async function init() {
    const navigation=await fetch("../theme.html");
    const aecrire=await navigation.text();
    document.body.insertAdjacentHTML('afterbegin',aecrire);
};

//Crée une table des matières dans la barre de navigation
async function tdm() {
    var tdm2="<nav><em>Table des matières</em><br/>";
    var titres2 = document.getElementsByTagName("h2");
    for (var i = 0; i < titres2.length; i++) {
        var titrecourant=titres2[i].textContent;
        tdm2=tdm2.concat(titrecourant,"<br/>");
    };
    tdm2=tdm2.concat("</nav>");
    document.body.insertAdjacentHTML('afterbegin',tdm2);
};

