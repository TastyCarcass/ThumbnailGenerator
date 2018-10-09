(function() {
    'use strict';
    angular.module('ThumbnailGenerator')
        .controller('MainController', ['$scope', 'ScreenshotCreator', 'GlobalCanvas', 'CanvasEngine', 'ImageService', 'FileReader', 'GameSettings', 'UserSettings', 'Cognito',
            function($scope, screenshotCreator, globalCanvas, canvasEngine, imageService, fileReader, gameSettings, userSettings, Cognito) {
                $scope.gen = function(){
                    imageService.resetImages();
                    canvasEngine.addImages();
                    imageService.waitThenDraw();
                };
                $scope.fileReader = fileReader;
                $scope.showCanvas = false;
                $scope.createImage = screenshotCreator.createImage;
                $scope.getImage = screenshotCreator.getImage;
                $scope.gameSettings = gameSettings;
                $scope.userSettings = userSettings;
            }])
})();