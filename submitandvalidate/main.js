var app = angular.module('minmax', [
  'jcs-autoValidate',
  'angular-ladda'
]);

app.run(function(defaultErrorMessageResolver){
  defaultErrorMessageResolver.getErrorMessages().then(function(errorMessage){
    errorMessage['tooYoung'] = 'You must be at least {0} years old to use this site';
    errorMessage['tooOld'] = 'You must be at least {0} years old to use this site';
    errorMessage['badUsername'] = 'Username can only contain numbers and letters and _';
  });
});

app.controller('MinMaxCtrl', function($scope, $http){
    $scope.formModel = {};
    $scope.submitting = false;

    $scope.onSubmit = function(){
        $scope.submitting = true;
        console.log("Hey I'm submitted!");
        console.log($scope.formModel);

      $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
      success(function(data) {
          console.log(":)")
          $scope.submitting = false;
      }).error(function(data) {
          console.log(":(")
          $scope.submitting = false;
      })
    };
});
