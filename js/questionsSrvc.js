angular.module('trendingTrivia').service('questionsSrvc', function( $http ) {
        this.getQuestions = function(page) {
          return $http({
            method: 'GET',
            url: 'https://practiceapi.devmountain.com/api/trivia/questions/?page=' +page
          });
        };

        this.nextPage = function(){
            this.page + 1
        }
})