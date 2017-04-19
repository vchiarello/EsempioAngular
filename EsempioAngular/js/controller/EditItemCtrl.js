//controller usato nell'edit degli item
angular.module("sampleApp").controller("EditItemCtrl", function ( $http, $scope, $state, $stateParams, $q) {




    $('.dateFormat').datepicker({
        format: "dd/mm/yyyy",
        weekStart: 1,
        todayBtn: true,
        language: "it",
        daysOfWeekHighlighted: "0,6",
        autoclose:true
    });
    
    function getItem (id,nome) {
	    $scope.promessa = $http({method: 'GET',url:'./rest/test.php?id='+id}).
		then(function successCallback(response){
			console.log("get Item " + id + ": and nome: " + nome);
			$scope.item = response.data;
	
		},
		function errorCallback(response){alert("Errore nello scarico degli item")});
    }
    
    function salva () {
	    $scope.promessa = $http({method: 'POST',url:'/rest/items', data: $scope.item}).
		then(function successCallback(response){
			alert("record salvato correttamente");
	        $state.transitionTo("list");
		},
		function errorCallback(response){alert("Errore nello scarico degli item")});
    }
    
    //metodo che preleva l'item dal database
	function init() {
       getItem($stateParams.id, $stateParams.nome)
    }

    $scope.cancel = function () {
    	$state.transitionTo("list");
    }
	
    $scope.save = function () {
    	salva();
    }
	
	init();
	
	
	$scope.validaNome = function(nome){
		if (nome == null || nome.length==0) 
			$scope.erroreNome="Nome campo obbligatorio"
	}
    
	$scope.validaTitolo = function(nome){
		if (nome == null || nome.length==0) 
			$scope.erroreTitolo="Titolo campo obbligatorio"
	}
    
	$scope.validaTesto = function(nome){
		if (nome == null || nome.length==0) 
			$scope.erroreTesto="Testo campo obbligatorio"
	}
    
});

