//haciendo el scrolling en el nav

var myNav = document.getElementById('header');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 100 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};




//validar telefono
var phone = document.getElementById("phone");
phone.onclick = function(){
	var span = document.getElementById("inputnuevo");
	var inputFirstName = document.createElement("input");
	inputFirstName.setAttribute("id", "firstName");
	inputFirstName.setAttribute("placeholder", "First Name");
}

var boton = document.getElementById("boton-rosado");
boton.onclick = function(){
	function phone(){
		var phone = document.getElementById("phone").value;
		
		if( !(/^\d{9}$/.test(phone)) ) { 
 			alert("Porfavor ingresa un numero valido(de nueve digitos)");
		} else{
			alert("Gracias por suscribirte")
		}
	}
	phone();
}

// Intento de scroll al hacer click en telefono


var espacio = document.getElementById("group");

var titulo = document.createElement("input-number");
 var tituloTexto = document.createTextNode