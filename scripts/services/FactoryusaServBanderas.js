angular
  .module('app')
.factory("PaisesFactory", function(Paises){
	// VARIABLES
	var o = {};	
	var url = "http://www.egos27.somee.com/api/bandera";
	o.nombreServicio = "Paises";
	// METODOS
	o.traerTodo = traerTodo;
	o.traerNombre = traerNombre;
	o.traerBanderas = traerBanderas;
	o.traerPais = traerPais;

	return o;
	// PRIVADO
	function traerUrl(param){
		
		if (!param)
			return url;
		
		return url + "/" + param;;
	}

	//PUBLICO
	function traerTodo(){
		return Paises.traerTodo();
	}


	function traerNombre(){

		return Paises.traerNombre();
	}

	function traerBanderas(){
		return Paises.traerBanderas();
	}

	function traerPais(pais){
		return Paises.traerPais(pais);
	}
})