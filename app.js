var app = angular.module("myApp" , []);
app.controller("myController",["$scope",function($scope)
{

	$scope.message="welcome to hyderabad";
	$scope.employeeList=[
{name:"pooja" , city:"bangalore" ,phoneno:8896325478},
{name:"rooja" , city:"ngalore" ,phoneno:8598325478},
{name:"looja" , city:"angalore" ,phoneno:8598325478},





	]
}]);