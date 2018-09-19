(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('GlobalCanvas', [function(){
            var me = this;
            var canvas;
            var context;

            me.setCanvas = function(aCanvas) {
                canvas = aCanvas;
                context = aCanvas.getContext("2d");
            };

            me.getCanvasContext = function(){
                return context;
            };

            me.getCanvas = function(){
                return canvas;
            };

            me.drawImage = function(image, x, y){
                context.drawImage(image, x, y);
            };

            me.drawFlippedImage = function(image, x, y){
                context.save();
                context.translate(canvas.width, 0);
                context.scale(-1, 1);
                me.drawImage(image, x, y);
                context.restore();
            };

            me.writeText = function(textString, size, align, x, y, colour){
                context.font= size + "px BebasKai";
                context.textAlign = align;
                context.fillStyle = colour;
                context.fillText(textString,x,y);
            };

            me.writeStrokeText = function(textString, size, align, x, y, colour){
                context.font= size + "px BebasKai";
                context.textAlign = align;
                context.strokeStyle = colour;
                context.lineWidth = 5;
                context.shadowColor = "black";
                context.shadowOffsetX = 0;
                context.shadowOffsetY = -3;
                context.shadowBlur = 40;
                context.strokeText(textString,x,y);
                context.shadowBlur = 0;
            };

        }])
})();