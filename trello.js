window.addEventListener("load", function(){
	var caja = document.getElementById("caja");
	var div1 = document.getElementById("div1");
	var placeholder = document.getElementById("placeholder");
	var boton = document.getElementById("boton");
	var texto = document.getElementById("texto");
	var icon = document.getElementById("icon");
	
	div1.classList.add("ocultar");
	caja.addEventListener("click", mostrar);
	function mostrar(){
		placeholder.classList.add("ocultar");
		div1.classList.remove("ocultar");
	};
	boton.addEventListener("click", imprimir);
	function imprimir(){
		boton.style.display="none";
        texto.style.display="none";
		valor = document.getElementById("texto").value;
		var contenedor = document.createElement("div");
		contenedor.innerHTML = valor;
		caja.insertBefore(contenedor,caja.childNodes[0]);
		var link = document.createElement("a"); 
		caja.insertBefore(link, caja.childNodes[1]);
		var txt = document.createTextNode("Añadir una tarjeta..."); 
		link.appendChild(txt);
		link.setAttribute("href","#");
		icon.classList.add("ocultar");
	};
});
