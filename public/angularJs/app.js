var myApp = angular.module("app", ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.caseInsensitiveMatch = true;
        $routeProvider
            .when("/", {
                templateUrl: "./home.html",
                controller: "homeController"
            })
            .when("/productDetail/:id",{
                templateUrl: "./productDetail.html",
                controller: "productDetailController"
            })
            .otherwise({
                redirectTo: "/"
            })
        $locationProvider.html5Mode(true)
    })
    .controller("homeController", function ($scope, $http) {
        $http({
            method: 'GET',
            url: '/api/product'
        }).then(function (res) {
            $scope.listProduct = res.data
            console.log($scope.listProduct);
        }, function () {
        })
    })
        .controller("productDetailController", function ($scope, $http,$routeParams) {
            console.log($routeParams.id)
        $http({
            method: 'GET',
            url: '/api/product/'+$routeParams.id
        }).then(function (res) {
            $scope.product = res.data[0]
        }, function () {
        })
    })

