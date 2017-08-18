var topbar, containtogrid, menulink, yPos;
function yScroll(){
    topbar = document.getElementById('topbar');
    containtogrid = document.getElementById('containtogrid');
    menulink = document.getElementById('menulink');
    yPos = window.pageYOffset;
    if(yPos > 150){
        topbar.style.backgroundColor = "#484848";
        containtogrid.style.backgroundColor = "#484848";
        menulink.style.backgroundColor = "#484848";
    } else {
        topbar.style.backgroundColor = "#00A7B7";
        containtogrid.style.backgroundColor = "#00A7B7";
        menulink.style.backgroundColor = "#00A7B7";
    }
}
window.addEventListener("scroll", yScroll);