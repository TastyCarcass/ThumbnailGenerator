(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('FileReader', ['GameSettings',
            function (gameSettings) {
                var me = this;
                var fs = require('fs');

                var removeExtension = function (list){
                    for (var i = 0; i < list.length; i++){
                        list[i] = list[i].replace(/\.[^/.]+$/, "");
                    }
                    return list;
                };

                me.getCharacterList = function (){
                    var characterList = fs.readdirSync(__dirname + '/' + gameSettings.charactersLocation);
                    return removeExtension(characterList);
                };

                me.getBackgroundList = function (){
                    var backgroundList = fs.readdirSync(__dirname + '/' + gameSettings.backgroundLocation);
                    return removeExtension(backgroundList);
                };

                me.getBorderList = function (){
                    var borderList = fs.readdirSync(__dirname + '/' + gameSettings.borderLocation);
                    return removeExtension(borderList);
                };

                me.getGameLogoList = function (){
                    var gameLogoList = fs.readdirSync(__dirname + '/' + gameSettings.gameLogoLocation);
                    return removeExtension(gameLogoList);
                }
            }])
})();