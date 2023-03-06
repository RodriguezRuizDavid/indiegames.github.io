/*********************************/
/* JS del HTML de IndieGames     */
/* Autor: David Rodríguez Ruiz   */
/* Versión: 1.0                  */
/* 6 de Diciembre de 2022        */
/*********************************/

/******* JS QUE REGULA LA BARRA DE NAVEGACIÓN *************/
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
/**********************************************************/
