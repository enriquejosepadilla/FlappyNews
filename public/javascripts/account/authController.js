/**
 * Created by lschubert on 10/24/15.
 */
app.controller('AuthCtrl', authController);

    authController.$inject = [
        '$scope',
        '$state',
        'auth'];

    function authController($scope, $state, auth){
        $scope.user = {};

        $scope.register = function(){
            auth.register($scope.user).error(function(error){
                $scope.error = error;
            }).then(function(){
                $state.go('home');
            });
        };

        $scope.logIn = function(){
            auth.logIn($scope.user).error(function(error){
                $scope.error = error;
            }).then(function(){
                $state.go('home');
            });
        };
    }

