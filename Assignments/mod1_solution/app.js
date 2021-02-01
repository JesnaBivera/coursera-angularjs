(function () {
  'use strict';
  
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.food = '';
    $scope.message='';
    $scope.checkitem = function () {
      if ($scope.food == "") {
        $scope.message = "Please enter data first";
      }
      else {
        var items = countItem($scope.food);
        if(items == 0 || $scope.food == "") { 
          $scope.message = "Empty";

        }
        else if(items <= 3) { 
          $scope.message = "Enjoy!";
        }
        else{
          $scope.message = "Too much!";
        }
      }
    };
    
    function countItem(string) {
      var trimm = string.trim();
      var item = trimm.split(',');
      console.log(item)
      console.log(item.length)
      return item.length;
    }
    
  }
  
  })();
  