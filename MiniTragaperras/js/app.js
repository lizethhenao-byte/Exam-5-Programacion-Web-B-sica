var app = angular.module("tragamonedasApp", []);

app.controller("tragamonedasCtrl", function($scope, $timeout) {

    // Símbolos
    $scope.simbolos = [
        "img/simbolos/cereza.jpg",
        "img/simbolos/limon.jpg",
        "img/simbolos/sandia.jpg"
    ];

    // Carretes iniciales
    $scope.reel1 = $scope.simbolos[0];
    $scope.reel2 = $scope.simbolos[1];
    $scope.reel3 = $scope.simbolos[2];

    // Contadores
    $scope.ganadas = 0;
    $scope.casi = 0;
    $scope.perdidas = 0;

    $scope.mensaje = "";
    $scope.colorMensaje = "white";

    // Función girar
    $scope.girar = function() {

        let r1 = Math.floor(Math.random() * $scope.simbolos.length);
        let r2 = Math.floor(Math.random() * $scope.simbolos.length);
        let r3 = Math.floor(Math.random() * $scope.simbolos.length);

        $scope.reel1 = $scope.simbolos[r1];
        $scope.reel2 = $scope.simbolos[r2];
        $scope.reel3 = $scope.simbolos[r3];

        if (r1 === r2 && r2 === r3) {
            $scope.mensaje = "🎉 GANASTE 🎉";
            $scope.colorMensaje = "lime";
            $scope.ganadas++;
        } else if (r1 === r2 || r1 === r3 || r2 === r3) {
            $scope.mensaje = "😬 CASI 😬";
            $scope.colorMensaje = "yellow";
            $scope.casi++;
        } else {
            $scope.mensaje = "❌ PERDISTE ❌";
            $scope.colorMensaje = "red";
            $scope.perdidas++;
        }
    };
});
