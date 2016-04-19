/* global angular */
(function() {
  angular.module("app").controller("peopleCtrl", function($scope, $http) {
    
    $scope.setup = function() {
      $http.get('/api/v1/people.json').then(function(response) {
        $scope.people = response.data;
      });
    };

    $scope.toggleBio = function(inputPerson) {
      inputPerson.bioVisible = !inputPerson.bioVisible;
    };

    $scope.addPerson = function(inputPersonName, inputPersonBio) {
      $scope.people.push({
        name: inputPersonName,
        bio: inputPersonBio,
        bioVisible: true
      });
    };

    $scope.deletePerson = function(inputIndex) {
      $scope.people.splice(inputIndex, 1);
    };

    window.$scope = $scope;
  });
})();
