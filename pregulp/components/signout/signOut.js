(function(){
    'use strict';
    angular.module('ThumbnailGenerator')
        .component('signOut', {
            templateUrl: './components/signout/signout.html',
            controllerAs: 'SignOutCtrl',
            controller: ['Cognito', function (Cognito) {
                this.signOut = Cognito.signOut.bind(Cognito);
            }]
        });
})();