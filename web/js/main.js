// Creación del módulo
var hotel = angular.module('hotel', ['ngRoute']);

// Configuración de las rutas
hotel.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/cAdd', {
            templateUrl : 'pages/cliente/agregarC.html',
            controller  : 'addClient'
        })
        .when('/eAdd', {
            templateUrl : 'pages/empleado/agregarE.html',
            controller  : 'addEmpleado'
        })
        .when('/mAdd', {
            templateUrl : 'pages/mobilario/agregarM.html',
            controller  : 'addMobilario'
        })
        .when('/hAdd', {
            templateUrl : 'pages/habitacion/agregarH.html',
            controller  : 'addHabitacion'
        })
        .when('/cSearch', {
            templateUrl : 'pages/cliente/consultarC.html',
            controller  : 'buscarCliente'
        })
        .when('/cDel', {
            templateUrl : 'pages/cliente/eliminarC.html',
            controller  : 'eliminarCliente'
        })
        .when('/cEdit', {
            templateUrl : 'pages/cliente/modificarC.html',
            controller  : 'modificarCliente'
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

hotel.controller('addClient', function($scope,$http) {
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

hotel.controller('addEmpleado', function($scope,$http) {
     $scope.empleado = {};
        //Funcion que se ejecuta a darle Enviar en el HTML
        $scope.agregarEmpleado = function() {
        //Estructura del requerimiento guardar un cliente en la BD.
        var req = {
          method  : 'POST',
          url     : 'recursos/empleado/',
          data    : JSON.stringify({
              ci              : $scope.empleado.ci,
              nombre          : $scope.empleado.name,
              apellido        : $scope.empleado.lastname,
              sueldo          : parseFloat($scope.empleado.sueldo),
              tlf             : $scope.empleado.phone,
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

hotel.controller('buscarCliente', function($scope,$http) {
    $scope.mostrar = false;
    $scope.submitForm = function() {

    var pet = 'recursos/cliente/' + $scope.ci;
    $http.get(pet).
        then(function(response) {
            $scope.cliente = response.data;
        },function(response){
            $scope.mostrar=true;
        });
    }
});

hotel.controller('eliminarCliente', function($scope,$http) {
    // Simple Put request example:
    $scope.mensaje = "";
    $scope.submitForm = function() {
    var url = 'recursos/cliente/' + $scope.ci;
    $http.delete(url).then(function (response) {
    // This function handles success
        $scope.mensaje = "Eliminado con exito.";
        }, function (response) {
    // this function handles error
        $scope.mensaje = "Cliente no registrado.";
        });
    }
});

hotel.controller('modificarCliente', function($scope,$http) {
    // Simple Put request example:
    $scope.nombre = "";
    $scope.cedula = "";
    $scope.apellido = "";
    $scope.tlfCliente = "";
    $scope.direccionCliente = "";
    $scope.mostrar = true;
    $scope.client = {};
    $scope.name = "";
    $scope.Bci = "";
    $scope.Buscar = function() {
    var pet = 'recursos/cliente/' + $scope.Bci;
    $http.get(pet).
        then(function(response) {
            $scope.clientes = response.data;
            // Cargar Datos en los inputs y Limpiar
            $scope.Bci = "";
            $scope.nombre = $scope.clientes.nombre;
            $scope.cedula = $scope.clientes.ciCliente;
            $scope.apellido = $scope.clientes.apellido;
            $scope.tlfCliente = $scope.clientes.tlfCliente;
            $scope.direccionCliente = $scope.clientes.direccionCliente;  
            $scope.ci = $scope.clientes.ciCliente;
            $scope.name = $scope.clientes.nombre;
            $scope.lastname = $scope.clientes.apellido;
            $scope.phone = $scope.clientes.tlfCliente;
            $scope.dir = $scope.clientes.direccionCliente;  
        },function(response){
            $scope.mostrar=false;
        });

    }

        //Funcion que se ejecuta a darle Enviar en el HTML
        $scope.submitForm = function() {
        //Estructura del requerimiento guardar un cliente en la BD.
        var data = JSON.stringify({
              ciCliente       : $scope.ci,
              nombre          : $scope.name,
              apellido        : $scope.lastname,
              tlfCliente      : $scope.phone,
              direccionCliente: $scope.dir,
          });
          console.log(data);
         //Si todo esta bien entra aqui.
        $http.put("recursos/cliente/" + $scope.ci,data).then(function(response) {


               alert("Datos Modificados");


            //Si algo malo paso entra aqui.
          },function(response){
               alert("Error: Verifique bien los datos :(");
          });
        };
});
