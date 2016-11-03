angular
  .module('app')
  .controller('configuradoTPFactoryServiceCtrl', function($scope, data, ServicioBanderas, FactoryBanderas ,FactoryBanderasConService, i18nService, uiGridConstants) {
    

    console.info("FactoryBanderasConService",FactoryBanderasConService);
    console.info("FactoryBanderas",FactoryBanderas);
      console.info("ServicioBanderas",ServicioBanderas);
    ////////////////////////////////////////
    //         GRILLA DE BANDERAS         //
    ////////////////////////////////////////
    $scope.titulo = "Banderas del Mundo";
    // Objeto de configuracion de la grilla.
    $scope.gridOptionsBanderas = {};
    $scope.gridOptionsBanderas.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridOptionsBanderas.paginationPageSize = 25;
    $scope.gridOptionsBanderas.rowHeight = 66;
    $scope.gridOptionsBanderas.enableHorizontalScrollbar = 2;
    $scope.gridOptionsBanderas.columnDefs = columnDefsBanderas();
    // Activo la busqueda en todos los campos.
    $scope.gridOptionsBanderas.enableFiltering = true;

    //console.info("Servicio Banderas", banderas);

    // banderas.traerUnPais('argentina').then(function(rta){
    //   console.info("RESPUESTA BANDERAS",rta);
    //   $scope.gridOptionsBanderas.data = rta;
    // });

  /*  banderas.traerTodos().then(function(rta){
      console.info("RESPUESTA BANDERAS",rta);
      $scope.gridOptionsBanderas.data = rta;
    });

    banderas.traerSoloImagenes().then(function(rta){
      console.info("RESPUESTA IMAGENES",rta);
    });
    */

/*
    FactoryBanderas.traerTodo().then(function(rta){
      console.info("RESPUESTA BANDERAS",rta);
      $scope.gridOptionsBanderas.data = rta;
    });
*/

FactoryBanderasConService.traerTodo().then(function(rta){
     // console.info("RESPUESTA BANDERAS",rta);
      $scope.gridOptionsBanderas.data = rta;
    });



    function columnDefsBanderas () {
      return [
        { field: 'Nombre', name: 'nombre',minWidth: 90
        },
        { field: 'BanderaChica', name: 'banderachica',minWidth: 70,
          cellTemplate:"<img width=\"60px\" ng-src=\"{{grid.getCellValue(row, col)}}\" >"
          ,enableFiltering: false
        }
        // ,{ field: 'Bandera', name: 'banderaGrande',minWidth: 70, 
        //   cellTemplate:"<img width=\"60px\" ng-src=\"{{grid.getCellValue(row, col)}}\" lazy-src>"
        //   ,enableFiltering: false
        // }
      ];
    }

    ///////////////////////////////////////////////////
  })
