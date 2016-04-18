/* global angular */
(function() {
  angular.module("app").controller("peopleCtrl", function($scope) {
    $scope.message = "hello";
    window.$scope = $scope;
  });
})();
