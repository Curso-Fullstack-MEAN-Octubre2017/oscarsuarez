// 'use strict';
//
// angular.module("customeDatepicker", [])
//     .directive('customeDatepicker', function () {
//
//         return {
//             restrict: 'A',
//             require: 'ngModel',
//             link: function spanishDatepicker(scope, ngModel, attrs) {
//                 $('.datepicker').pickadate({
//                     selectMonths: true,
//                     selectYears: 50, // open combo with 50 years
//
//                     //Datepicker translate to spanish
//                     labelMonthNext: 'Mes siguiente',
//                     labelMonthPrev: 'Mes anterior',
//                     labelMonthSelect: 'Selecciona un mes',
//                     labelYearSelect: 'Selecciona un año',
//                     monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
//                     monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
//                     weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
//                     weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
//                     weekdaysLetter: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
//                     today: 'Hoy',
//                     clear: 'Limpiar',
//                     close: 'Cerrar',
//                     format: 'dd/mmm/yyyy',
//                     closeOnSelect: true // Close upon selecting a date,
//                 });
//

                    /* Se deberia poner 'petBirthDate' como value de ng-model y llamar a la directiva con el atributo customDatePicker
                     * Dejo la directiva comentada que no funciona...
                     * Tambien esta comentada la inyeccion de la directiva en app.module
                     * esta comentado en index.html el script customdatepicker.js
                     * /

//                 scope.$watch('petBirthDate', function (dateValue) {
//                     scope.pet.birthDate = $filter('date')(dateValue, 'yyyy/MM/dd');
//                 });
//
//                 scope.$watch('pet.birthDate', function (dateValue) {
//                     scope.petBirthDate = $filter('date')(dateValue, 'yyyy/MM/dd');
//                 });
//             }
//         }
//     });