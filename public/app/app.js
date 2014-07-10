/**
 * Created by intelligrape on 10/7/14.
 */
'use strict';

/* App Module */
var crosswordApp = angular.module('crosswordApp', ['ngRoute'])
    .config(['$routeProvider', '$httpProvider',
        function ($routeProvider, $httpProvider) {
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
            $routeProvider.
                when('/admin', {
                    templateUrl: '../admin.html',
                    controller: 'adminController'
                }).
                when('/user', {
                    templateUrl: '../users.html',
                    controller: 'usersController'
                }).
                otherwise({
                    redirectTo: '/user'
                });
        }])
    .controller('adminController', ['$scope','$http',
        function ($scope, $http) {
            "use strict";
            console.log(">>>Looking fo the users data...")
            $scope.users = [];
            $scope.formater = "dd-mm-yyyy";
            $http({method: 'GET', url: 'http://localhost:8080/api/users/'}).
                success(function (data, status, headers, config) {
                    $scope.users = data;
                }).
                error(function (data, status, headers, config) {

                });
        }]).controller('usersController', ['$scope', '$routeParams','$http',
        function ($scope, $routeParams, $http) {
            console.log(">>>Looking fo the users data...")
            $scope.users = [];
            $scope.formater = "dd-mm-yyyy";
            $http({method: 'GET', url: 'http://localhost:8080/api/users/'}).
                success(function (data, status, headers, config) {
                    $scope.users = data;
                }).
                error(function (data, status, headers, config) {

                });
        }]);