//controller della home page con la lista degli item
angular.module("sampleApp").controller("IndexCtrl", function ($scope, $state) {
	
	
	
	$scope.carrello=function(){
		alert("visualizza carello");
	}
	
	$scope.querySearch="";
	
	$scope.search = function(){
		if ($scope.querySearch != null && $scope.querySearch.trim().length>0)


		$state.transitionTo("searchItem",{querySearch: $scope.querySearch},{reload:true});
	}

});
