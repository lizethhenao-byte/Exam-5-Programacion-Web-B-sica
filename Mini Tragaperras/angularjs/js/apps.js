var app = angular.module("slotApp", []);

app.controller("SlotController", function ($scope, $timeout) {

    // Rutas de tus imágenes de símbolos
    const simbolos = [
        "Imágenes/Símbolos/cereza.png",
        "Imágenes/Símbolos/limon.png",
        "Imágenes/Símbolos/sandia.png"
    ];

    let vm = this;

    vm.carretes = [
        { img: simbolos[0] },
        { img: simbolos[1] },
        { img: simbolos[2] }
    ];

    vm.stats = {
        ganadas: 0,
        casi: 0,
        perdidas: 0
    };

    vm.resultado = "";
    vm.colorResultado = "";

    vm.girar = function() {

        vm.resultado = "Girando...";
        vm.colorResultado = "";

        // Animación suave
        $timeout(function() {

            vm.carretes = vm.carretes.map(() => ({
                img: simbolos[Math.floor(Math.random() * simbolos.length)]
            }));

            evaluar();

        }, 400);
    };

    // Lógica del resultado
    function evaluar() {
        const a = vm.carretes[0].img;
        const b = vm.carretes[1].img;
        const c = vm.carretes[2].img;

        if (a === b && b === c) {
            vm.resultado = "GANASTE 🎉";
            vm.colorResultado = "success";
            vm.stats.ganadas++;
        }
        else if (a === b || a === c || b === c) {
            vm.resultado = "CASI 😮";
            vm.colorResultado = "warning";
            vm.stats.casi++;
        }
        else {
            vm.resultado = "PERDISTE 💀";
            vm.colorResultado = "error";
            vm.stats.perdidas++;
        }
    }

});
