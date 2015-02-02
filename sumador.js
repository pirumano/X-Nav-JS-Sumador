function generar(){
	document.getElementById("res").innerHTML = "";
	var sumandos = document.getElementById("op");
	sumandos.innerHTML = Math.floor(Math.random()*100) + "+" + Math.floor(Math.random()*100);
}

function sumador(){
	var sumandos = document.getElementById("op").innerHTML;
	var digitos = sumandos.split("+");
	var resultado = parseInt(digitos[0]) + parseInt(digitos[1]);
	var res = document.getElementById("res");
	res.innerHTML = "= " + resultado + " ";
}