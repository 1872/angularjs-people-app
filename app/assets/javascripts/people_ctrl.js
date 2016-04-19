/* global angular */
(function() {
  angular.module("app").controller("peopleCtrl", function($scope) {
    $scope.people = [
      {
        name: "Peter Jang",
        bio: "fdsafd safdjsa; fdsajfdslafdsla;f sdafdsaf",
        bioVisible: true
      },
      {
        name: "Jamie Gates",
        bio: "wepurwoiqpurew ureowpqureiowur weqruowqp rpwe",
        bioVisible: true
      },
      {
        name: "Jen Wu",
        bio: "vcnxzv.,mznn vzmv cmnzx.v cxnzm.vnczmv,.z cnzxc.,v ",
        bioVisible: true
      }
    ];

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
