document.addEventListener("DOMContentLoaded",() => init());

async function init() {
    const navigation=await fetch("../theme.html");
    const aecrire=await navigation.text();
    document.body.insertAdjacentHTML('afterbegin',aecrire);
}
