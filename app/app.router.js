angular.module('agendaApp')
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    
    .when('/contactList', {
        templateUrl:'app/views/contactList.template.html',
        controller: 'ContactController'
    })

    .when('/createContact', {
        templateUrl:'app/views/createContact.template.html',
        controller: ''
    })

    .otherwise({
        redirectTo: '/contactList'
    });
}]);