var pelicula={titulo:"xmen", genero:"accion",director:"marvel",duracion:150,
resumen:function(){
	var res="la duracion de la pelicula "+pelicula.titulo+" es: " + pelicula.duracion;
return res;
}
}
console.log(pelicula.resumen());