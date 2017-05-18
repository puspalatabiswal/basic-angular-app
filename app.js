var app = angular.module("myApp" , ['ngRoute']);

app.config(["$locationProvider", function($locationProvider)
{
$locationProvider.hashPreix('')
	}])


app.config( ["$routProvider "function($routProvider){
$routProvider.when("/",{
	template: "this is home page" ,
	controller: "myController"
})
    .when("/register",{
       
	template: "this is registration page" ,
	controller: "myController2"
})

    .when("/login",{
       
	template: "this is login page" ,
	controller: "myController3"
})

}])
app.run([function(){
	console.log("this is un section");
}])

app.controller("myController",["$scope",function($scope)
{
	$scope.message="this is my home controller";
}])

app.controller("myController2",["$scope",function($scope)
{
	$scope.message="this is my registration  controller";
}])

app.controller("myController3",["$scope",function($scope)
{
	$scope.message="this is my  login controller";
}])