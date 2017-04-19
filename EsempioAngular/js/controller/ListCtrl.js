//controller della home page con la lista degli item
angular.module("sampleApp").controller("ListCtrl",['$scope', '$state', '$http',  function ($scope, $state, $http) {

    
    function getItems () {
    	$scope.promessa = $http({method: 'GET',url:'./rest/test.php'}).
		then(function successCallback(response){
			console.log("Item scaricati correttamente");
			$scope.items = response.data;

			console.log($scope.items.length)
		},
		function errorCallback(response){alert("Errore nello scarico degli item")});
    };
    
    
    $scope.editItem = function (item) {
    		$state.transitionTo("editItem",{id: item.id_item, nome: item.nome});
    };

    function init () {
    	getItems();
    };

    init();
    
}]);
