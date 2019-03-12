document.addEventListener("DOMContentLoaded",() => init());

async function init() {
    const reponse = await fetch("../pagination.html");
    const texte= await reponse.text();
    document.body.innerHTML=texte;
}
