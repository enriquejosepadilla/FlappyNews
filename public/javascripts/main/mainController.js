/**
 * Created by lschubert on 10/24/15.
 */
app.controller('MainCtrl', [
        '$scope',
        'posts',
        'auth',
        function($scope,posts,auth){
            $scope.test = 'Hello world!';
            $scope.posts = posts.posts;
            $scope.isLoggedIn = auth.isLoggedIn;

            $scope.addPost = function(){
                if(!$scope.title || $scope.title === '') { return; }
                posts.create({
                    title: $scope.title,
                    link: $scope.link,
                });
                $scope.title = '';
                $scope.link = '';
            };

            $scope.incrementUpvotes = function(post) {
                posts.upvote(post);
            };

        }]
)