function contadorA(cadena){
	var contA=0;
	var i=0;
	while(i<cadena.length){
		if (cadena[i].toLowerCase()==="a") {
			contA++;
		}
		i++;
	}
	return contA;
}
var cad = "Anastacia";
console.log("la cantidad de letras es: " + contadorA(cad));
