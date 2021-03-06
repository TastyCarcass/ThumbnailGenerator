(function(){
    'use strict';
    angular.module('ThumbnailGenerator')
        .component('login', {
            templateUrl: './components/login/login.html',
            controllerAs: 'LoginCtrl',
            controller: ['Cognito', function (Cognito) {
                this.authenticate = Cognito.authenticateUser.bind(Cognito);
            }]
        });
})();