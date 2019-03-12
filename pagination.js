async function init() {
    alert("zut");
    const navigation=await fetch("theme.html");
    alert("rezut");
    const aecrire=await navigation.text();
    alert("rerezut");
    document.body.insertAdjacentHTML('afterbegin',aecrire);
}
