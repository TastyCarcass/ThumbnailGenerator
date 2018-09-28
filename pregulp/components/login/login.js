(function(){
    'use strict';
    angular.module('ThumbnailGenerator')
        .component('login', {
            templateUrl: './components/login/login.html',
            controllerAs: 'LoginCtrl',
            controller: ['UserSettings', function (userSettings) {
                var userPool = new AmazonCognitoIdentity.CognitoUserPool({
                    UserPoolId : 'eu-west-1_lzT9XRSiA',
                    ClientId : '1u09nrvm4if6f371e9tptrhu2a'
                });

                var attributeList = [];

                this.login = () => {
                    var dataEmail = {
                        Name : 'email',
                        Value : userSettings.name
                    };

                    userPool.signUp('username', 'password', attributeList, null, function(err, result){
                        if (err) {
                            alert(err);
                            return;
                        }

                        cognitoUser = result.user;
                        console.log('user name is ' + cognitoUser.getUsername());
                    });
                }
            }]
        });
})();