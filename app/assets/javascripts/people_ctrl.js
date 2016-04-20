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
      var newPerson = {
        name: inputPersonName,
        bio: inputPersonBio
      };
      $http.post('/api/v1/people.json', newPerson).then(function(response) {
        console.log(response);
        $scope.people.push(newPerson);
      }, function(errorResponse) {
        console.log(errorResponse);
        $scope.errors = errorResponse.data.errors;
      });
    };

    $scope.deletePerson = function(inputIndex) {
      $scope.people.splice(inputIndex, 1);
    };

    window.$scope = $scope;
  });
})();
