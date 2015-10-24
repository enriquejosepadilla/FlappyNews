/**
 * Created by lschubert on 10/24/15.
 */
app.controller('PostsCtrl', postController);

postController.$inject = ['$scope', 'posts', 'post', 'auth'];

function postController($scope,  posts, post, auth){
    $scope.post = post;
    $scope.isLoggedIn = auth.isLoggedIn;
    console.log(auth.currentUser);
    $scope.addComment = function(){
        if($scope.body === '') { return; }
        posts.addComment(post._id, {

            body: $scope.body,
            author: 'testuser',
        }).success(function(comment) {
            $scope.post.comments.push(comment);
        });
        $scope.body = '';
    };

    $scope.incrementUpvotes = function(comment){
        posts.upvoteComment(post, comment);
    };
};


