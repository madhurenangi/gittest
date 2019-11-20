var app=angular.module("myapp",[]);
app.controller("myctrl",function($scope){
    $scope.x=10
    $scope.y=10
    $scope.result=$scope.$eval("x * y");
})