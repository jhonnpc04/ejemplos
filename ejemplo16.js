function contadorA(cadena,letra){
	for (var i=0, contA= 0;i<cadena.length; i++) {
		if (cadena[i]==letra){
			contA++;
		}
	}
	return contA;
}
var cad = "Romero";
var letra = "m";
console.log("la cantidad de " + letra +" es: " + contadorA(cad,letra));
