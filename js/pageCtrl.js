angular.module('trendingTrivia').controller('pageCtrl', function($scope){
    $scope.page = 0;
    $scope.nextPage = function(){
        $scope.page + 1
        console.log('next page', $scope.page)
    }
        


})
