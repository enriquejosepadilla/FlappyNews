/**
 * Created by lschubert on 10/24/15.
 */
app.controller('NavCtrl', navController);

navController.$inject = ['$scope', 'auth'];


    function navController($scope, auth){
        $scope.isLoggedIn = auth.isLoggedIn;
        $scope.currentUser = auth.currentUser;
        $scope.logOut = auth.logOut;
    }
;