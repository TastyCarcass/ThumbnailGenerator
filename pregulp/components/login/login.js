(function(){
    'use strict';
    angular.module('ThumbnailGenerator')
        .component('login', {
            templateUrl: './components/login/login.html',
            controllerAs: 'LoginCtrl',
            controller: ['UserSettings', function (userSettings) {
                var userPool = new AmazonCognitoIdentity.CognitoUserPool({
                    UserPoolId : 'eu-west-1_ClavJ1xvM',
                    ClientId : 'leu49fpjc3tfegchnqe2g57gl'
                });

                this.signup = (username, password, email) => {
                    var attributeList = [];
                    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({
                        Name : 'email',
                        Value : email
                    }));

                    userPool.signUp(username, password, attributeList, null, function(err, result){
                        if (err) {
                            console.log(err, result);
                            return;
                        }

                        var cognitoUser = result.user;
                    });
                }
            }]
        });
})();