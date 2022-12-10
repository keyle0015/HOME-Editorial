changePage("/contents/home.html");

function changePage(page, style) {
    $(function () {
        $("#mainCont").load(page);
    });
    
    var head = document.head;
    var link = document.createElement("link");
    
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = style;
    
    head.appendChild(link);
    
    console.log("BOO")
}