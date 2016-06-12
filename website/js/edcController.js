'use strict';

angular.module('Edc', ['ngResource'])
  .controller('EdcController', EdcController);

  EdcController.$inject = ['$http', '$scope'];

function EdcController($http, $scope){
  var self = this;
  self.all = [];
  self.artist = artist;
  $scope.randomNumber = function() {
    return Math.floor((Math.random() * 100) + 1);
  }

  var artist = function(){
    $http
      .get('http://insomniac.cleverapps.io/api/beta/events?key=B7b2GLuqZu8lnhkqbDZcdyv4qP9OGovboHAM3cYEgbINhCUI')
      .then(function(response){
        var items = response.data.data;
        // self.items = performers; 
        for (var i = 0; i < items.length; i++) {
          self.all = items[i].performers;
          console.log(items[i].performers[i]);
        }
    });
  }

  artist();

}




