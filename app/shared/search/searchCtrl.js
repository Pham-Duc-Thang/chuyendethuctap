var app = angular.module('searchApp', []);

app.controller('searchCtrl', function($scope, $http) {
  $scope.results = [];
  $scope.searchQuery = '';

  $scope.search = function() {
    $http.get('/search?q=' + encodeURIComponent($scope.searchQuery))
      .then(function(response) {
        $scope.results = response.data;
      })
      .catch(function(err) {
        console.error('Error searching for products:', err);
      });
  };
});
