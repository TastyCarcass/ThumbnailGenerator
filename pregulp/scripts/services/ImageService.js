(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('ImageService',['$interval', 'GlobalCanvas', 'Drawer', 'GameSettings',
            function($interval, globalCanvas, drawer, gameSettings){
            var me = this;

            var gameImage = function(name, src){
                this.name = name;
                this.image = new Image;
                this.loaded =  false;
                this.pos = [0,0];
                this.src = src;
            };

            me.getNumberOfImagesToLoad = function(){
                var total = 0;
                me.gameImages.forEach(function(value, index){
                    if(!value.image.complete){
                        total++;
                    }
                });
                if(total === 0){
                    me.stopWait();
                }
                return total;
            };

            me.timer = null;

            me.startWait = function (){
                me.timer = $interval(me.getNumberOfImagesToLoad, 2);
            };

            me.stopWait = function (){
                if (angular.isDefined(me.timer)){
                    $interval.cancel(me.timer);
                    drawer.draw(me.gameImages);
                }
            };

            me.waitThenDraw = function(){
                console.log(me.gameImages);
                me.timer= $interval(me.getNumberOfImagesToLoad, 2);
            };

            me.resetImages = function(){
                me.gameImages = [];
            };

            me.getImageByName = function(name){
                for (var i = 0; i < me.gameImages.length; i++){
                    if(me.gameImages[i].name = name){
                        return me.gameImages[i];
                    }
                }
                return 'error';
            };

            me.onAllLoaded = function(){
                console.log('allLoaded');
            };

            me.loadImage = function (name, imageSource) {
                var img = new gameImage(name, imageSource);
                img.image.onload = function(){
                    img.loaded = true;
                };
                img.image.src = imageSource;
                me.gameImages.push(img);
            };

            me.addImage = function(name, imageSource){
                me.loadImage(name, imageSource)
            };

            me.addCharacter = function(characterName, purpose){
                me.loadImage(purpose, gameSettings.charactersLocation + characterName + '.png');
            };
        }])
})();