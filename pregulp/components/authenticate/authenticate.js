(function(){
    'use strict';
    angular.module('ThumbnailGenerator')
        .component('authenticate', {
            templateUrl: './components/authenticate/authenticate.html',
            controllerAs: 'AuthenticateCtrl',
            controller: ['Cognito', function (Cognito) {
                this.authenticate = Cognito.authenticateUser.bind(Cognito);
            }]
        });
})();