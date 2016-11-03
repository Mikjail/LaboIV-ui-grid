angular
  .module('app')
 .factory("FactoryBanderas", function($http){
	// VARIABLES
	var o = {};	
	var url = "http://www.egos27.somee.com/api/bandera";
	o.nombreFactory = "Factory paises y banderas";
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
		return $http.get(traerUrl())	
		.then(function(data){
			console.log(data);
			return data.data.Paises;

		}, function(err){
			return err;
		})
	}



	function traerNombre(){

		return this.traerTodo()
		.then(function(data){
			return data.map(function(item){
				var obj = {};
				obj.Nombre = item.Nombre
				return obj;
			})
		})
	}

	function traerBanderas(){
		return this.traerTodo()
		.then(function(data){
			return data.map(function(item){
				var obj = {};
				obj.Bandera = item.Bandera
				obj.BanderaChica = item.BanderaChica
				return obj;
			})
		})
	}

	function traerPais(pais){
		return $http.get(traerUrl(pais))	
		.then(function(data){
			console.log(data);
			return data.data;

		}, function(err){
			return err;
		})
	}
})