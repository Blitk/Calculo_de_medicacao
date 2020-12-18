function calcular() {
	var result = 0;
	if (document.getElementById("calculo1").checked) {
	    var q = document.getElementById("qtd").value;
	    var t = document.getElementById("tempo").value;
	    result = q / t;
	    result = result + " mcgts / min"
	    
	}

	if (document.getElementById("calculo2").checked) {
	    var q = document.getElementById("qtd").value * 60;
	    var t = document.getElementById("tempo").value;
	    result = q / t;
	    result = result + " mcgts / min"
	    

	}

	if (document.getElementById("calculo3").checked) {
	    var q = document.getElementById("qtd").value;
	    var t = document.getElementById("tempo").value * 3;
	    result = q / t;
	    result = result + " gts / min"
	    

	}

	if (document.getElementById("calculo4").checked) {
	    var q = document.getElementById("qtd").value * 20;
	    var t = document.getElementById("tempo").value;
	    result = q / t;
	    result = result + " gts / min"
	    
	}
	document.getElementById("resultado").innerHTML = result;
}


function limpar(){
	document.getElementById("calculo1").checked = false;
	document.getElementById("calculo2").checked = false;
	document.getElementById("calculo3").checked = false;
	document.getElementById("calculo4").checked = false;
	document.getElementById("qtd").value = "";
	document.getElementById("tempo").value = "";
	document.getElementById("resultado").innerHTML = "";
}