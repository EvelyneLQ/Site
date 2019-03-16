let N1; let N2; let sommeattendue; let produitattendu;
document.addEventListener("DOMContentLoaded",() => initN());

function initN() {
    N1=Math.floor(Math.random()*8+1);
    N2=Math.floor(Math.random()*8+1);
    document.getElementById("N1").textContent=N1;
    document.getElementById("N2").textContent=N2;
    document.getElementById("N1bis").textContent=N1;
    document.getElementById("N2bis").textContent=N2;
    sommeattendue=N1+N2;
    produitattendu=N1*N2;
}

function corrige() {
    const s=document.getElementById("somme").value;
    const p=document.getElementById("produit").value;
    if ((s==sommeattendue) && (p==produitattendu)) {
        alert("Bravo !");
    } else {
        alert("Raté!");
    }
}
