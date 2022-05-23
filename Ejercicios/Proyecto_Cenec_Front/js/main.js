/*Función que me muestra el menú burguer*/
function showMenu() {
    let menu = document.getElementsByClassName('header__menumenu');
    let headerBurguerline = document.getElementsByClassName('header__burguerline');

    for (var i = 0; i < menu.length; i++){
        if (menu[i].classList.contains("hide")) {
            menu[i].classList.remove("hide");
        } else menu[i].classList.add("hide");
    }

    for (var i = 0; i < headerBurguerline.length; i++){
        if (headerBurguerline[i].classList.contains("black")) {
            headerBurguerline[i].classList.remove("black");
            headerBurguerline[i].classList.add("orange");
        } else {
            headerBurguerline[i].classList.add("black");
            headerBurguerline[i].classList.remove("orange");
        }
    }
}