/**
 * Created by intelligrape on 10/7/14.
 */
//var crosswordController = angular.module('crosswordController', []);
//crosswordController.controller('adminController',['$scope', '$http',
//    function ($scope, $http) {
//        "use strict";
//        console.log(">>>Looking fo the users data...")
//        $scope.users = [];
//        $scope.formater = "dd-mm-yyyy";
//        $http({method: 'GET', url: 'http://localhost:3000/users/'}).
//            success(function (data, status, headers, config) {
//                $scope.users = data;
//            }).
//            error(function (data, status, headers, config) {
//
//            });
//    }]);
//crosswordController.controller('usersController', ['$scope', '$routeParams', '$http',
//    function ($scope, $routeParams, $http) {
//        console.log(">>>Looking fo the users data...")
//        $scope.users = [];
//        $scope.formater = "dd-mm-yyyy";
//        $http({method: 'GET', url: 'http://localhost:3000/users/'}).
//            success(function (data, status, headers, config) {
//                $scope.users = data;
//            }).
//            error(function (data, status, headers, config) {
//
//            });
//    }]);