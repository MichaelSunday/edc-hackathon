'use strict';

angular.module('Edc', ['ksSwiper'])
  .controller('ShowController', ShowController);

  ShowController.$inject = ['$http', '$scope'];



function ShowController($http, $scope){
  var self = this;
  // self.all = null;
  // self.bruh = bruh;
  $scope.randomNumber = function() {
    return Math.floor((Math.random() * 100) + 1);
  }
  

  var bruh = function(){
    $http
      .get('http://insomniac.cleverapps.io/api/beta/events?key=B7b2GLuqZu8lnhkqbDZcdyv4qP9OGovboHAM3cYEgbINhCUI')
      .then(function(response){
        // var items = response.data.data;
        // self.items = performers; 
        // for (var i = 0; i < items.length; i++) {
        self.all = response.data.data[0].performers[3];
        console.log(response.data.data);
        // }
    });
  }

  bruh();

}




