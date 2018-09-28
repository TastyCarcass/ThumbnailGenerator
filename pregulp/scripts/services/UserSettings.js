(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('UserSettings', [function () {
            this.username = '';
            this.password = '';
            this.email = '';
            this.loggedIn = false;
        }])
})();