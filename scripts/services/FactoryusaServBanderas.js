angular
  .module('app')
.factory("FactoryBanderasConService", function(ServicioBanderas){
	// VARIABLES
	var objetoRetorno = {};	

	//var url = "http://www.egos27.somee.com/api/bandera"; // ahora 
	objetoRetorno.nombreServicio = "Factory paises y banderas con servicio";
	// METODOS
	objetoRetorno.traerTodo = traerTodo;
	objetoRetorno.traerNombre = traerNombre;
	objetoRetorno.traerBanderas = traerBanderas;
	objetoRetorno.traerPais = traerPais;

	return objetoRetorno;
	// PRIVADO : funcion sin uso en este caso
	/*function traerUrl(param){
		
		if (!param)
			return url;
		
		return url + "/" + param;;
	}*/ 

	//PUBLICO
	function traerTodo(){
		return ServicioBanderas.traerTodos();
	}


	function traerNombre(){
		return ServicioBanderas.traerNombre();
	}

	function traerBanderas(){
		return ServicioBanderas.traerBanderas();
	}

	function traerPais(pais){
		return ServicioBanderas.traerPais(pais);
	}
})