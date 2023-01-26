
//Variables para el menu dropdown interactivo
const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

// Funcion toggle dropdown
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

// Abrir/cerrar se añade funcion stop propagation para evitar que se transmita la propiedad a las otras clases
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

// Cerrar cuando se clickea fuera del elemento
document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
}); 


//Botones de social media que llevan al home por obvias razones
const linkBtn = document.getElementById("twitter")
const linkBtn2 = document.getElementById("facebook")
const linkBtn3 = document.getElementById("instagram")

linkBtn.addEventListener("click", function(){
  location.href = "http://www.twitter.com";
})

linkBtn2.addEventListener("click", function(){
  location.href = "http://www.facebook.com";
})

linkBtn3.addEventListener("click", function(){
  location.href = "http://www.instagram.com";
})