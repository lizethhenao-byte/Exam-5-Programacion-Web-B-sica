angular.module("slotApp", [])
.controller("SlotController", function ($scope, $timeout) {

    const simbolos = [
        "img/simbolos/cereza.jpg",
        "img/simbolos/limon.jpg",
        "img/simbolos/sandia.jpg"
    ];

    // Valores iniciales
    $scope.carretes = [
        { img: simbolos[0] },
        { img: simbolos[1] },
        { img: simbolos[2] }
    ];

    $scope.stats = {
        ganadas: 0,
        casi: 0,
        perdidas: 0
    };

    $scope.resultado = "";
    $scope.colorResultado = "";

    // FUNCIÓN DE GIRAR
    $scope.girar = function () {

        // Deshabilitar para evitar doble clic
        $scope.spinning = true;

        $timeout(() => {

            // Generar 3 símbolos aleatorios
            $scope.carretes = [
                { img: simbolos[Math.floor(Math.random() * simbolos.length)] },
                { img: simbolos[Math.floor(Math.random() * simbolos.length)] },
                { img: simbolos[Math.floor(Math.random() * simbolos.length)] }
            ];

            const c0 = $scope.carretes[0].img;
            const c1 = $scope.carretes[1].img;
            const c2 = $scope.carretes[2].img;

            // Evaluar resultado
            if (c0 === c1 && c1 === c2) {
                $scope.resultado = "GANASTE 🎉";
                $scope.colorResultado = "success";
                $scope.stats.ganadas++;

            } else if (c0 === c1 || c1 === c2 || c0 === c2) {
                $scope.resultado = "CASI 😅";
                $scope.colorResultado = "warning";
                $scope.stats.casi++;

            } else {
                $scope.resultado = "PERDISTE 💀";
                $scope.colorResultado = "error";
                $scope.stats.perdidas++;
            }

            $scope.spinning = false;

        }, 300); // pequeño retraso opcional
    };

});

