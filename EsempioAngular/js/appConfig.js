angular.module("sampleApp").config(function ($stateProvider, $urlRouterProvider) {
	
	
	
    $urlRouterProvider.otherwise("/");

    $stateProvider
	    .state('/', {
	        url:'/',
	        templateUrl: 'html/list.html',
	        controller: 'ListCtrl'
	    }).state('list', {
	        url:'/list',
	        templateUrl: 'html/list.html',
	        controller: 'ListCtrl'
	    }).state('searchItem', {
	        url:'/searchItem/:querySearch',
	        templateUrl: 'html/search.html',
	        controller: 'SearchCtrl'
	    }).state('editList', {
	        url:'/editList',
	        templateUrl: 'html/editList.html',
	        controller: 'EditListCtrl'
        }).state('createItem', {
            url:'/createItem',
            templateUrl: 'html/newItem.html',
            controller: 'NewItemCtrl'
	    }).state('editItem', {
            url:'/editItem/:id/:nome',
            templateUrl: 'html/editItem.html',
            controller: 'EditItemCtrl'
         });
});
