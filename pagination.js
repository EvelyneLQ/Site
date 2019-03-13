async function init() {
    var myHeaders = new Headers();
    var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'navigate',
               cache: 'default' };
    const navigation=await fetch("theme.html",myInit);
    const aecrire=await navigation.text();
    document.body.insertAdjacentHTML('afterbegin',aecrire);
}
