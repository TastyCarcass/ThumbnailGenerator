(function(){
    'use strict';
    angular.module('ThumbnailGenerator')
        .component('signUp', {
            templateUrl: './components/signup/signup.html',
            controllerAs: 'SignUpCtrl',
            controller: ['Cognito', function (Cognito) {
                this.signUp = (username, password, email) => {
                    console.log('signing up');
                    var attributeList = [new AmazonCognitoIdentity.CognitoUserAttribute({
                        Name : 'email',
                        Value : email
                    })];

                    Cognito.pool.signUp(username, password, attributeList, null, function(err, result){
                        if (err) {
                            console.log(err, result);
                            return;
                        }

                        Cognito.user = result.user;
                        console.log('succ', result);
                    });
                }
            }]
        });
})();