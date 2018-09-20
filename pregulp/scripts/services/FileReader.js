(function () {
    'use strict';

    //todo: temporarily hardcoded

    const characterList = [
        'CAPTAIN FALCON',
        'DR MARIO',
        'FALCO',
        'FOX',
        'GANONDORF',
        'JIGGLYPUFF',
        'LUIGI',
        'MARTH',
        'PEACH',
        'PICHU',
        'PIKACHU',
        'ROY',
        'SAMUS',
        'SHEIK',
        'YLINK',
        'YOSHI'
    ];

    const backgroundList = [
        'BACKGROUND'
    ];

    const borderList = [
        'BORDER'
    ];

    const logoList = [
        'MELEE LOGO'
    ];

    angular.module('ThumbnailGenerator')
        .service('FileReader', ['GameSettings',
            function (gameSettings) {
                this.getCharacterList = function (){
                    return characterList;
                };

                this.getBackgroundList = function (){
                    return backgroundList;
                };

                this.getBorderList = function (){
                    return borderList;
                };

                this.getGameLogoList = function (){
                    return logoList;
                }


                //todo: dynamically read from files, do not hard code.
                // var fs = require('fs');

                // var removeExtension = function (list){
                //     for (var i = 0; i < list.length; i++){
                //         list[i] = list[i].replace(/\.[^/.]+$/, "");
                //     }
                //     return list;
                // };
                //
                // me.getCharacterList = function (){
                //     var characterList = fs.readdirSync(__dirname + '/' + gameSettings.charactersLocation);
                //     return removeExtension(characterList);
                // };
                //
                // me.getBackgroundList = function (){
                //     var backgroundList = fs.readdirSync(__dirname + '/' + gameSettings.backgroundLocation);
                //     return removeExtension(backgroundList);
                // };
                //
                // me.getBorderList = function (){
                //     var borderList = fs.readdirSync(__dirname + '/' + gameSettings.borderLocation);
                //     return removeExtension(borderList);
                // };
                //
                // me.getGameLogoList = function (){
                //     var gameLogoList = fs.readdirSync(__dirname + '/' + gameSettings.gameLogoLocation);
                //     return removeExtension(gameLogoList);
                // }
            }])
})();