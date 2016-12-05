(function(){
    'use strict';
    angular
            .module('app')
            .factory('PhonesService', PhoneService);
    
    PhoneService.$inject = ['$http', 'REQUEST'];
    
    function PhoneService($http, REQUEST){
        var url = REQUEST.Phones;
        var service = {
            'getPhones': getPhones,
            'findPhone': findPhone
        };
        return service;
        
        ////////
        
        function getPhones(){
            return $http.get(url)
                    .then(getPhonesComplete, getPhonesFailed);
            
            function getPhonesComplete(response){
                return response.data;
            }
            
            function getPhonesFailed(error){
                return [];
            }
        }
        
        function findPhone(id){
            return getPhones()
                    .then(function(data){
                        return findPhoneComplete(data);;
            });
            
            function findPhoneComplete(data) {
                var results = {};
                
                angular.forEach(data, function (value, key){
                    if (!results.length) {
                        if (value.hasOwnProperty('id') && value.id === id) {
                            results = angular.copy(value);
                        }
                    }
                }, results);
                return results;
            }
        }
    }
})();