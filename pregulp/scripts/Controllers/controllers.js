(function() {
    'use strict';
    angular.module('ThumbnailGenerator')
        .controller('MainController', ['$scope', 'ScreenshotCreator', 'GlobalCanvas', 'CanvasEngine', 'ImageService', 'FileReader', 'GameSettings',
            function($scope, screenshotCreator, globalCanvas, canvasEngine, imageService, fileReader, gameSettings) {
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
            }])
})();