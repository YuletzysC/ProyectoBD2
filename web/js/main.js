// Creación del módulo
var hotel = angular.module('hotel', ['ngRoute']);

// Configuración de las rutas
hotel.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/acerca', {
            templateUrl : 'pages/acerca.html',
            controller  : 'aboutController'
        })
        .when('/contacto', {
            templateUrl : 'pages/contacto.html',
            controller  : 'contactController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
// Esto es para quitar el ! que angular agrego por defecto
hotel.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

hotel.controller('mainController', function($scope,$http) {
    $http.get('recursos/cliente/').
        then(function(response) {
            $scope.clientes = response.data;
        });
});

hotel.controller('aboutController', function($scope,$http) {
     $scope.client = {};
        //Funcion que se ejecuta a darle Enviar en el HTML
        $scope.submitForm = function() {
        //Estructura del requerimiento guardar un cliente en la BD.
        var req = {
          method  : 'POST',
          url     : 'recursos/cliente/',
          data    : JSON.stringify({
              ciCliente       : $scope.client.ci,
              nombre          : $scope.client.name,
              apellido        : $scope.client.lastname,
              tlfCliente      : $scope.client.phone,
              direccionCliente: $scope.client.dir,
          }), //Estructura del JSON Cliente que debe enviarse al servidor.
          headers : {'Content-Type': 'application/json'} 
         };
         //Si todo esta bien entra aqui.
        $http(req).then(function(response) {
      
            
               alert("Datos Enviados con exito!!!");
               
            
            //Si algo malo paso entra aqui.
          },function(response){
               alert("Error: Verifique bien los datos :(");
          });
        };
});

hotel.controller('contactController', function($scope,$http) {
    
});