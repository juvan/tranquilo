'use strict';

/**
 * @ngdoc function
 * @name tranquilobirdersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tranquilobirdersApp
 */
angular.module('tranquilobirdersApp')
    .controller('MainCtrl', ['$scope', '$interval', function ($scope, $interval) {
        $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        var i = 1;
        $scope.header = "headerState1";

       $interval(function () {
            console.log("Interval");
            i++;
            if (i > 3) {
                i = 1
            };
            $scope.header = "headerState" +i;
        }, 9000);



    }]);
