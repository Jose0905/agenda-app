angular.module('agendaApp').factory('ContactService', [
    '$http',
    function ($http) {
        var url = 'app/models/contacts.json';
        return {
            getContact: function(){
                return $http.get(url);
            }
        }
    


    }
]);