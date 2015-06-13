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
            $scope.header = "images/header" + i + ".jpg";

            var var_1 = $interval(function () {
                $scope.header = "images/header" + i + ".jpg";
                i++;
            }, 3000);
    });


    }]);
