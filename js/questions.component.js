console.log('hi')

    angular.module('trendingTrivia').component('questions', {
        templateUrl: 'question.html',
        controllerAs: 'questionsCtrl',

        controller: function(questionsSrvc, $scope){
            $scope.page = 0;
            $scope.questions = [];
            $scope.selected = '';
            $scope.filter = '';
           
            this.getLog = function(){
                console.log($scope.questions)
            }
console.log('bye')

            $scope.getQuestions = function(){
                questionsSrvc.getQuestions($scope.page).then(function(response) {
                    console.log(response, 'response')
                    $scope.questions = response.data
                    
                })
            }
            $scope.getQuestions()
            $scope.nextPage = function(){
                $scope.page += 1
                $scope.getQuestions($scope.page)
                console.log('page changed', $scope.page)
            }

            $scope.previousPage = function(){
                $scope.page -= 1
                $scope.getQuestions($scope.page)
                console.log('page changed', $scope.page)
            }

            // $scope.checkAnswer = function(questionId, chosenAnswer) {
            //     var question;
            //     for (var i = 0; i < $scope.questions.length; i++) {
            //       if ($scope.questions[i]._id == questionId) {
            //         question = $scope.questions[i];
                    
            //       }
            //     }
            //     question.chosenAnswer = chosenAnswer;
            //   }

              $scope.getByDifficulty = function(difficulty) {
                questionsSrvc.getByDifficulty(difficulty).then(function(response) {
                  $scope.questions = response.data;
                  
                })
              }

              $scope.getQuestions = function(){
                questionsSrvc.getQuestions($scope.page).then(function(response) {
                    console.log(response, 'response')
                    $scope.questions = response.data
                    
                })
            }
            console.log(this.questions)
            
        }

        
    })

    
