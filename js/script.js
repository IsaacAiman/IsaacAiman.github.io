var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("http://www.santacruzdetenerife.es/opendata/dataset/f38a3086-8d4c-4c6a-943e-629056b66f01/resource/95a65af3-5f11-4041-a418-45afcc5e7686/download/agendacultural.json").then(function(response) {
        $scope.myData = response.data.docs;
    });
});
