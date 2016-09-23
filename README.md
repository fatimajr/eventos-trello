# Eventos Trello
### VERSIÓN 0.0.1
- Un elemento en el HTML con el mensaje "Añadir una lista", que al dar click muestre un input y un botón (formulario) para que el usuario ingrese el nombre de la lista.

```javascript
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
```
### VERSIÓN 0.0.2
- Mostrar en el HTML, el texto ingresado al dar click en el botón de "Guardar" del formulario (como si fuera título de la lista).
Debajo del título, mostrar el mensaje clickeable de "Añadir una tarjea".

```javascript
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
```
