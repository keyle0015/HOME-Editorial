function abrirContNav(evt, contNombre) {
    var i, links;

    links = document.getElementsByClassName("navCont");
    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace("active", "");
    }
    abrirCont(evt, contNombre);

    evt.currentTarget.className += " active";
}

function abrirCont(evt, contNombre) {
    evt.preventDefault;
    
    var page;
    
    page = document.getElementsByClassName("opEnvio");
    for (i = 0; i < page.length; i++) {
        page[i].style.display = 'none';
    }
    document.getElementById(contNombre).style.display = "block";
}