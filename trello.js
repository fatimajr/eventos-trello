window.addEventListener("load", function(){
	var caja = document.getElementById("caja");
	var ocultar = document.getElementById("oculto");
	var placeholder = document.getElementById("placeholder");
	caja.addEventListener("mouseover", agregaColor);
	caja.addEventListener("mouseout", quitarColor);
	caja.addEventListener("click", mostrar);
	function agregaColor(){
		caja.classList.add("cambiocolor");
	};
	function quitarColor(){
		caja.classList.remove("cambiocolor");
	};
	// var cajaoculta = document.createElement("div").appendchild(caja);
	function mostrar(){
		placeholder.classList.add("ocultar");
		ocultar.classList.add("mostrar");
	};
});
