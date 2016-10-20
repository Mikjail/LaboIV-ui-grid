angular
  .module('app')
  .controller('ConfTPCtrl', function($scope, data, i18nService, uiGridConstants) {
    $scope.titulo = "Configuracion Campos";
    // Objeto de configuracion de la grilla.
    $scope.gridOptions = {};
    $scope.gridOptions.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridOptions.paginationPageSize = 25;
    $scope.gridOptions.columnDefs = columnDefs();
    // Activo la busqueda en todos los campos.
    $scope.gridOptions.enableFiltering = true;
    // Configuracion del idioma.
    i18nService.setCurrentLang('es');

    data.data1000().then(function(rta){
      // Cargo los datos en la grilla.
      $scope.gridOptions.data = rta;
      console.info(rta);
    });

    console.log(uiGridConstants);

    $scope.localizar= function(fila)
    {


      console.info(fila);

    }


    function columnDefs () {
      return [
        { enableFiltering: false ,field: 'boton',  displayName: 'Localizar', cellTemplate: '<button  type="button" class="btn-small" ng-click="grid.appScope.localizar(row.entity)" >Localizar</button> '},
        { name: 'foto', displayName: 'Foto', cellTemplate:'<img width="25px" ng-src="{{grid.getCellValue(row, col)}}" lazy-src>'},
         { name: 'avatar', displayName: 'Avatar', cellTemplate:'<img width="25px" ng-src="{{grid.getCellValue(row, col)}}" lazy-src>'},
       

        { field: 'id', name: '#', width: 45},
        { field: 'nombre', name: 'Nombre'
          ,filter:{
            condition: uiGridConstants.filter.STARTS_WITH,
            placeholder: 'comienza con...'
          }
        },
        { field: 'apellido', name: 'apellido'
          ,enableFiltering: false
        },
        
      
        { field: 'sexo', name: 'sexo'
        // filtro de busqueda.
          ,filter: {
            // term: '1',
            type: uiGridConstants.filter.SELECT,
            selectOptions: [
              {value: 'male', label: 'Masculino'},
              {value: 'female', label: 'Femenino'}
            ]
          }
          //filtro de los datos
          ,cellFilter: 'sexoTP'
        },
          { field: 'sueldoPretendido', name: 'sueldo Pretendido'},
        { field: 'email', name: 'mail'},
         { field: 'amigos', name: 'amigos'},
          { field: 'aplicaciones', name: 'APP'},
        { field: 'fechaNacimiento', name: 'fechaNacimiento'
          ,type: 'date'
          ,cellFilter: "date: 'dd-MM-yyyy'"
        }

      ];
    }
  })
