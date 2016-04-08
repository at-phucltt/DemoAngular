var wfeControllers = angular.module('wfeControllers', []);
wfeControllers.controller('PersonDetailCtrl', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http) {
    $http.get('data/people/' + $routeParams.codeName + '.json').success(function (data) {
      if (!data.image) {
        data.image = 'http://placehold.it/200?text=' + data.fullName;
      }
      $scope.person = data;
    });
  }
]);
wfeControllers.controller('HomeController', ['$scope', function($scope){

}]);
wfeControllers.controller('ContactController', ['$scope', function($scope){

}]);
wfeControllers.controller('AboutController', ['$scope', '$routeParams', '$http',  function ($scope, $routeParams, $http) {
    $http.get('data/people/phucltt.json').success(function (data) {
      if (!data.image) {
        data.image = 'http://placehold.it/200?text=' + data.fullName;
      }
      $scope.person = data;
    });
}]);
