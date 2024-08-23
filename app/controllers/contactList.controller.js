angular.module('agendaApp').controller('ContactController', [
    '$scope','ContactService',
    function($scope, ContactService){
        $scope.contactos = [];
        $scope.cargarContactos = function(){
            ContactService.getContact().then(function(response){
                $scope.contactos = response.data
            });
        }
        $scope.cargarContactos();
        
    }
])