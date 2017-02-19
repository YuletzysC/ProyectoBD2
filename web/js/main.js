// Creación del módulo
var hotel = angular.module('hotel', ['ngRoute']);

// Configuración de las rutas
hotel.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/Cliente', {
            templateUrl : 'pages/cliente/cliente.html',
            controller  : 'clienteController'
        })
        .when('/Empleado', {
            templateUrl : 'pages/empleado/empleado.html',
            controller  : 'empleadoController'
        })
        .when('/Alquiler', {
            templateUrl : 'pages/alquiler/alquiler.html',
            controller  : 'alquilerController'
        })
        .when('/Mobiliario', {
            templateUrl : 'pages/mobiliario/mobiliario.html',
            controller  : 'mobiliarioController'
        })
        .when('/Habitacion', {
            templateUrl : 'pages/habitacion/habitacion.html',
            controller  : 'habitacionController'
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
        .when('/aAdd', {
            templateUrl : 'pages/alquiler/agregarA.html',
            controller  : 'addAlquiler'
        })
        .when('/cSearch', {
            templateUrl : 'pages/cliente/consultarC.html',
            controller  : 'buscarCliente'
        })
        .when('/eSearch', {
            templateUrl : 'pages/empleado/consultarE.html',
            controller  : 'buscarEmpleado'
        })
        .when('/hSearch', {
            templateUrl : 'pages/habitacion/consultarH.html',
            controller  : 'buscarHabitacion'
        })
        .when('/mSearch', {
            templateUrl : 'pages/mobilario/consultarM.html',
            controller  : 'buscarMobilario'
        })
        .when('/aSearch', {
            templateUrl : 'pages/alquiler/consultarA.html',
            controller  : 'buscarAlquiler'
        })
        .when('/cDel', {
            templateUrl : 'pages/cliente/eliminarC.html',
            controller  : 'eliminarCliente'
        })
        .when('/eDel', {
            templateUrl : 'pages/empleado/eliminarE.html',
            controller  : 'eliminarEmpleado'
        })
        .when('hDel', {
            templateUrl : 'pages/habitacion/eliminarH.html',
            controller  : 'eliminarHabitacion'
        })
        .when('/mDel', {
            templateUrl : 'pages/mobilario/eliminarM.html',
            controller  : 'eliminarMobiliario'
        })
        .when('/aDel', {
            templateUrl : 'pages/alquiler/eliminarA.html',
            controller  : 'eliminarAlquiler'
        })
        .when('/cEdit', {
            templateUrl : 'pages/cliente/modificarC.html',
            controller  : 'modificarCliente'
        })
        .when('/eEdit', {
            templateUrl : 'pages/empleado/modificarE.html',
            controller  : 'modificarEmpleado'
        })
        .when('/hEdit', {
            templateUrl : 'pages/habitacion/modificarH.html',
            controller  : 'modificarHabitacion'
        })
        .when('/mEdit', {
            templateUrl : 'pages/mobilario/modificarM.html',
            controller  : 'modificarMobilario'
        })
        .when('/aEdit', {
            templateUrl : 'pages/alquiler/modificarA.html',
            controller  : 'modificarAlquiler'
        })
        .when('/aEdit', {
            templateUrl : 'pages/alquiler/modificarA.html',
            controller  : 'modificarAlquiler'
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

hotel.controller('alquilerController', function($scope,$http) {
    $http.get('recursos/alquiler/').
        then(function(response) {
            $scope.alquileres = response.data;
        });
});

hotel.controller('habitacionController', function($scope,$http) {
    $http.get('recursos/habitacion/').
        then(function(response) {
            $scope.alquileres = response.data;
        });
});

hotel.controller('clienteController', function($scope,$http) {
    $http.get('recursos/cliente/').
        then(function(response) {
            $scope.clientes = response.data;
        });
});

hotel.controller('empleadoController', function($scope,$http) {
    $http.get('recursos/empleado/').
        then(function(response) {
            $scope.empleados = response.data;
        });
});

hotel.controller('mobiliarioController', function($scope,$http) {
    $http.get('recursos/mobiliarioController/').
        then(function(response) {
            $scope.mobiliarios = response.data;
        });
});

hotel.controller('addClient', function($scope,$http) {
     $scope.client = {};
        //Funcion que se ejecuta a darle Enviar en el HTML
        $scope.addClient = function() {
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
        $scope.addEmpleado = function() {
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
              tipoEmpleado    : $scope.empleado.tipo
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

hotel.controller('addHabitacion', function($scope,$http) {
    $scope.addHabitacion = function(){

    };
});

hotel.controller('addAlquiler', function($scope,$http) {
    $scope.alquiler = {};
    $scope.addAlquiler = function(){
      var req = {
        method  : 'POST',
        url     : 'recursos/alquiler/',
        data    : JSON.stringify({
            fechaHoraEntrada : $scope.alquiler.fi,
            fechaHoraSalida  : $scope.alquiler.fs,
            precioHabitacion : parseFloat($scope.alquiler.precio),
            ciCliente        : $scope.empleado.idCliente,
            nroHabitacion    : $scope.empleado.idHabitacion
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

hotel.controller('addMobilario', function($scope,$http) {
    $scope.addMobilario = function(){

    };
});


hotel.controller('buscarCliente', function($scope,$http) {
    $scope.mostrar = false;
    $scope.cById = function() {

    var pet = 'recursos/cliente/' + $scope.ci;
    $http.get(pet).
        then(function(response) {
            $scope.cliente = response.data;
        },function(response){
            $scope.mostrar=true;
        });
    }
});

hotel.controller('buscarEmpleado', function($scope,$http) {
    $scope.mostrar = false;
    $scope.eById = function() {

    var pet = 'recursos/empleado/' + $scope.ci;
    $http.get(pet).
        then(function(response) {
            $scope.empleado = response.data;
        },function(response){
            $scope.mostrar=true;
        });
    }
});

hotel.controller('buscarAlquiler', function($scope,$http) {
    $scope.aById = function() {

    };
});

hotel.controller('buscarMobilario', function($scope,$http) {
      $scope.mById = function() {

      };
});

hotel.controller('buscarHabitacion', function($scope,$http) {
      $scope.hById = function() {

      };
});

hotel.controller('eliminarCliente', function($scope,$http) {
    // Simple Put request example:
    $scope.mensaje = "";
    $scope.cDelById = function() {
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

hotel.controller('eliminarEmpleado', function($scope,$http) {
    // Simple Put request example:
    $scope.mensaje = "";
    $scope.cDelById = function() {
    var url = 'recursos/empleado/' + $scope.ci;
    $http.delete(url).then(function (response) {
    // This function handles success
        $scope.mensaje = "Eliminado con exito.";
        }, function (response) {
    // this function handles error
        $scope.mensaje = "Este Empleado no esta registrado.";
        });
    }
});

hotel.controller('eliminarAlquiler', function($scope,$http) {
    $scope.aDelById = function() {

    };
});

hotel.controller('eliminarHabitacion', function($scope,$http) {
    $scope.hDelById = function() {

    };
});

hotel.controller('eliminarMobiliario', function($scope,$http) {
    $scope.mDelById = function() {

    };
});

hotel.controller('modificarCliente', function($scope,$http) {
    $scope.nombre = "";
    $scope.tlfCliente = "";
    $scope.apellido = "";
    $scope.direccionCliente = "";
    $scope.mostrar = true;
    $scope.Bci = "";
    $scope.Buscar = function() {
    var pet = 'recursos/cliente/' + $scope.Bci;
    $http.get(pet).
        then(function(response) {
            $scope.clientes = response.data;
            // Cargar Datos en los inputs y Limpiar
            $scope.Bci = "";
            $scope.nombre = $scope.clientes.nombre;
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
        $scope.actualizarCliente = function() {
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
        $http.put("recursos/cliente/" + $scope.cedula,data)
        .then(function(response) {
               alert("Datos Modificados")
            //Si algo malo paso entra aqui.
          },function(response){
               alert("Error: Verifique bien los datos ");
          });
        };
});

hotel.controller('modificarEmpleado', function($scope,$http) {
    var cedulaOriginal = "";
    $scope.nombreEmpleado = "";
    $scope.cedulaEmpleado = "";
    $scope.apellidoEmpleado = "";
    $scope.tlfEmpleado = "";
    $scope.tipoEmpleado = "";
    $scope.sueldoEmpleado = "";
    $scope.mostrar = true;
    $scope.empleado = {};
    $scope.Bci = "";
    $scope.Buscar = function() {
    var pet = 'recursos/empleado/' + $scope.Eci;
    $http.get(pet).
        then(function(response) {
            $scope.empleado = response.data;
            // Cargar Datos en los inputs y Limpiar
            $scope.Eci = "";
            cedulaOriginal = $scope.empleado.ci;
            //VALORES EXTERNOS (FRONT).
            $scope.nombreEmpleado = $scope.empleado.nombre;
            $scope.cedulaEmpleado = $scope.empleado.ci;
            $scope.apellidoEmpleado = $scope.empleado.apellido;
            $scope.tlfEmpleado = $scope.empleado.tlf;
            $scope.tipoEmpleado = $scope.empleado.tipoEmpleado;
            $scope.sueldoEmpleado = $scope.empleado.sueldo;
            //VALOERES INTERNOS
            $scope.ci = $scope.empleado.ci;
            $scope.name = $scope.empleado.nombre;
            $scope.lastname = $scope.empleado.apellido;
            $scope.phone = $scope.empleado.tlf;
            $scope.tipo = $scope.empleado.tipoEmpleado;
            $scope.sueldo = $scope.empleado.sueldo;
        },function(response){
            $scope.mostrar=false;
        });

    }

        //Funcion que se ejecuta a darle Enviar en el HTML
        $scope.actualizarEmpleado = function() {
        //Estructura del requerimiento guardar un cliente en la BD.
        var data = JSON.stringify({
              ci              : $scope.ci,
              nombre          : $scope.name,
              apellido        : $scope.lastname,
              sueldo          : parseFloat($scope.sueldo),
              tlf             : $scope.phone,
              tipoEmpleado    : $scope.tipo
          });
          console.log(data);
         //Si todo esta bien entra aqui.
        $http.put("recursos/empleado/" + scope.ci,data).then(function(response) {


               alert("Datos Modificados");


            //Si algo malo paso entra aqui.
          },function(response){
               alert("Error: Verifique bien los datos");
          });
        };

});

hotel.controller("modificarMobilario",function($scope,$http){
    $scope.actualizarMobiliario = function(){

    };
});

hotel.controller("modificarAlquiler",function($scope,$http){
    $scope.actualizarAlquiler = function(){

    };
});

hotel.controller("modificarHabitacion",function($scope,$http){
    $scope.actualizarHabitacion = function(){

    };
});
