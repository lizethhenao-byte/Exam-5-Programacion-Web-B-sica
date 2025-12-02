angular.module("slotApp", [])
.controller("SlotController", function ($scope, $timeout) {

    const simbolos = [
        "img/simbolos/cereza.jpg",
        "img/simbolos/limon.jpg",
        "img/simbolos/sandia.jpg"
    ];

    // Inicializar carretes
    $scope.carretes = [
        { img: simbolos[0] },
        { img: simbolos[1] },
        { img: simbolos[2] }
    ];

    // Estadísticas
    $scope.stats = {
        ganadas: 0,
        casi: 0,
        perdidas: 0
    };

    $scope.resultado = "";
    $scope.colorResultado = "";

    $scope.girar = function () {

        // animación/retraso
        $timeout(() => {

            // generar 3 símbolos aleatorios
            $scope.carretes = [
                { img: simbolos[Math.floor(Math.random() * simbolos.length)] },
                { img: simbolos[Math.floor(Math.random() * simbolos.length)] },
                { img: simbolos[Math.floor(Math.random() * simbolos.length)] }
            ];

            const c0 = $scope.carretes[0].img;
            const c1 = $scope.carretes[1].img;
            const c2 = $scope.carretes[2].img;

            // evaluar combinación
            if (c0 === c1 && c1 === c2) {
                $scope.resultado = "GANASTE 🎉";
                $scope.colorResultado = "success";
                $scope.stats.ganadas++;
            }
            else if (c0 === c1 || c1 === c2 || c0 === c2) {
                $scope.resultado = "CASI 😅";
                $scope.colorResultado = "warning";
                $scope.stats.casi++;
            }
            else {
                $scope.resultado = "PERDISTE 💀";
                $scope.colorResultado = "error";
                $scope.stats.perdidas++;
            }

        }, 300);
    };

});
