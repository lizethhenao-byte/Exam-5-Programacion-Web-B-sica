(function(){
  'use strict';

  angular.module('slotApp', [])
    .controller('SlotController', ['$timeout', function($timeout){

      var vm = this;

      // SOLO tus 3 símbolos
      vm.simbolos = [
        'img/cereza.png',
        'img/limon.png',
        'img/sandia.png'
      ];

      vm.carretes = [
        { img: vm.simbolos[0], alt: 'Cereza' },
        { img: vm.simbolos[1], alt: 'Limón' },
        { img: vm.simbolos[2], alt: 'Sandía' }
      ];

      vm.stats = { ganadas: 0, casi: 0, perdidas: 0 };
      vm.resultado = '';
      vm.colorResultado = '';
      vm.spinning = false;

      function nombreSimbolo(ruta) {
        var s = ruta.split('/').pop();
        var name = s.split('.')[0];
        return name.charAt(0).toUpperCase() + name.slice(1);
      }

      vm.girar = function() {
        if (vm.spinning) return;
        vm.spinning = true;
        vm.resultado = 'Girando...';
        vm.colorResultado = '';

        var delays = [800, 1100, 1400];

        var animInterval = 80;
        var animHandles = [];

        vm.carretes.forEach(function(_, idx){
          var handle = setInterval(function(){
            var rand = vm.simbolos[Math.floor(Math.random() * vm.simbolos.length)];
            vm.carretes[idx].img = rand;
            vm.carretes[idx].alt = nombreSimbolo(rand);
            $timeout(function(){}, 0);
          }, animInterval);
          animHandles.push(handle);
        });

        for (let i = 0; i < vm.carretes.length; i++) {
          (function(i){
            $timeout(function(){
              clearInterval(animHandles[i]);

              var final = vm.simbolos[Math.floor(Math.random() * vm.simbolos.length)];
              vm.carretes[i].img = final;
              vm.carretes[i].alt = nombreSimbolo(final);

              if (i === vm.carretes.length - 1) {
                $timeout(function(){
                  evaluarResultado();
                  vm.spinning = false;
                }, 100);
              }
            }, delays[i]);
          })(i);
        }
      };

      function evaluarResultado() {
        var a = vm.carretes[0].img;
        var b = vm.carretes[1].img;
        var c = vm.carretes[2].img;

        if (a === b && b === c) {
          vm.resultado = 'GANASTE 🍒🍒🍒';
          vm.colorResultado = 'success';
          vm.stats.ganadas++;
        }
        else if (a === b || a === c || b === c) {
          vm.resultado = 'CASI 😮';
          vm.colorResultado = 'warning';
          vm.stats.casi++;
        }
        else {
          vm.resultado = 'PERDISTE 💀';
          vm.colorResultado = 'error';
          vm.stats.perdidas++;
        }
      }

    }]);
})();
