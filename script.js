/*document.getElementById("eldest-parent").innerText = "Diakses Melalui Eldest Parent";
document.getElementById("a-child").innerText = "Diakses Melalui a Child";
document.getElementById("eldest-parent").innerText = "Diakses Melalui Eldest Parent";*/

var eldest = document.getElementById("eldest-parent");
var achild = document.getElementById("a-child");

eldest.firstElementChild.innerHTML = 'Diakses Melalui Eldest Parent';
achild.previousElementSibling.innerHTML = 'Diakses Melalui a Child';
achild.nextElementSibling.innerHTML = 'Diakses Melalui a Child';
eldest.lastElementChild.innerHTML = 'Diakses Melalui a Child';