(function(){
    'use strict';
    angular.module('ThumbnailGenerator')
        .directive('thumbnailCanvas', ['GlobalCanvas', 'CanvasEngine', 'ImageService',
            function(globalCanvas, canvasEngine, imageService){
            return {
                restrict: 'A',
                template: '<canvas id="gameCanvas" width="1280" height="720" style="border:1px solid #000000;"></canvas>',
                link: function(scope, element){
                    var canvas = element.find('canvas')[0];
                    globalCanvas.setCanvas(canvas);
                }
            };
        }])
})();