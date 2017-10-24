console.log('hi')

    angular.module('trendingTrivia').component('questions', {
        templateUrl: 'question.html',
        controllerAs: 'questionsCtrl',

        controller: function(questionsSrvc, $scope){
            this.page = 0;
            $scope.questions = [];
           
            this.getLog = function(){
                console.log($scope.questions)
            }
console.log('bye')

            this.getQuestions = function(){
                questionsSrvc.getQuestions().then(function(response) {
                    console.log(response, 'response')
                    $scope.questions = response.data
                    
                })
            }
            console.log(this.questions)
            
        }

        
    })

    
