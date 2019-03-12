async function init() {
    alert("zut");
    const navigation=await fetch("pagination.html");
    alert("rezut");
    const aecrire=await navigation.text();
    alert("rerezut");
    document.body.insertAdjacentHTML('afterbegin',aecrire);
}
