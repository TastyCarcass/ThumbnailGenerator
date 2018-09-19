(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('CanvasEngine', ['ImageService', 'GameSettings',
            function (imageService, gameSettings) {
                var me = this;

                var addBackground = function () {
                    imageService.addImage('background', __dirname + '/' + gameSettings.backgroundLocation + gameSettings.selectedBackground + '.png');
                };

                var addBorder = function () {
                    imageService.addImage('border', __dirname + '/' + gameSettings.borderLocation + gameSettings.selectedBorder + '.png');
                };

                var addLogo = function () {
                    imageService.addImage('logo', __dirname + '/' + gameSettings.gameLogoLocation + gameSettings.selectedGameLogo + '.png');
                };

                var addDoublesCharacters = function () {
                    for (var i = 0; i < gameSettings.doublesCharacterList.length; i++) {
                        imageService.addCharacter(gameSettings.doublesCharacterList[i], 'player' + i);
                    }
                };

                var addCharacters = function () {
                    if (!gameSettings.doublesMode) {
                        for (var i = 0; i < gameSettings.singlesCharacterList.length; i++) {
                            for (var j = 0; j < gameSettings.getNumberOfCharacters(i); j++) {
                                imageService.addCharacter(gameSettings.singlesCharacterList[i][j], 'player' + i + 'character' + j);
                            }
                        }
                    }
                    else{
                        addDoublesCharacters();
                    }
                };

                me.addImages = function () {
                    addBackground();
                    addBorder();
                    addCharacters();
                    addLogo();
                };
            }])
})();