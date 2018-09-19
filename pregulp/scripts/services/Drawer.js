(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('Drawer', ['GlobalCanvas', 'GameSettings', function (globalCanvas, gameSettings) {
            var me = this;

            var gameImages;

            var getImageByName = function (name) {
                for (var i = 0; i < gameImages.length; i++) {
                    if (gameImages[i].name.toUpperCase() === name.toUpperCase()) {
                        return gameImages[i];
                    }
                }
                console.log('failed', name);
                return 'does not exist';
            };

            var drawImage = function (imageObj) {
                console.log('imageObj', imageObj);
                globalCanvas.drawImage(imageObj.image, imageObj.pos[0], imageObj.pos[1]);
            };

            var drawFlippedImage = function (imageObj) {
                globalCanvas.drawFlippedImage(imageObj.image, imageObj.pos[0], imageObj.pos[1]);
            };

            var drawBackground = function () {
                drawImage(getImageByName('background'));
            };

            var drawBorder = function () {
                drawImage(getImageByName('border'));
            };

            var drawCharacter = function (playerNumber, characterNumber) {
                var addressString = 'player' + playerNumber + 'character' + characterNumber;
                if (playerNumber === 0) {
                    drawImage(getImageByName(addressString));
                }
                else if (playerNumber === 1) {
                    console.log('drawingFlipped');
                    drawFlippedImage(getImageByName(addressString));
                }
            };

            var drawPlayerCharacters = function (playerNumber) {
                if (gameSettings.getNumberOfCharacters(playerNumber) === 1) {
                    drawCharacter(playerNumber, 0);
                }
            };

            var drawLogo = function () {
                drawImage(getImageByName('logo'));
            };

            var writeSinglesNames = function () {
                for (var i = 0; i < gameSettings.singlesPlayerNames.length; i++) {
                    globalCanvas.writeText(gameSettings.singlesPlayerNames[i],
                        gameSettings.playerNameTextSize,
                        'center',
                        gameSettings.singlesNamePositions[i][0],
                        gameSettings.singlesNamePositions[i][1],
                        'black'
                    )
                }
            };

            var writeDoublesNames = function () {
                console.log('writing doubles');
                for (var i = 0; i < 2; i++) {
                    for (var j = 0; j < 2; j++) {
                        console.log('writing', gameSettings.doublesPlayerNames[(i * 2) + j]);
                        console.log('at',gameSettings.doublesPlayerNames[(i * 2) + j][0],
                            gameSettings.doublesPlayerNames[(i * 2) + j][1]);
                        globalCanvas.writeText(gameSettings.doublesPlayerNames[(i * 2) + j],
                            gameSettings.doublesPlayerNameTextSize,
                            'center',
                            gameSettings.doublesNamePositions[(i * 2) + j][0],
                            gameSettings.doublesNamePositions[(i * 2) + j][1],
                            'black'
                        )
                    }
                }
            };

            var writeDate = function () {
                globalCanvas.writeText(gameSettings.date,
                    gameSettings.dateTextSize,
                    'left',
                    gameSettings.datePos[0],
                    gameSettings.datePos[1],
                    'black'
                )
            };

            var writeGameType = function () {
                for (var i = 0; i < gameSettings.gameTypeText.length; i++) {
                    globalCanvas.writeStrokeText(gameSettings.gameTypeText[i],
                        gameSettings.gameTypeTextSize,
                        'center',
                        gameSettings.gameTypePos[0],
                        gameSettings.gameTypePos[1] + ((gameSettings.gameTypeTextSize * i) - 20 * i),
                        'black');
                    globalCanvas.writeText(gameSettings.gameTypeText[i],
                        gameSettings.gameTypeTextSize,
                        'center',
                        gameSettings.gameTypePos[0],
                        gameSettings.gameTypePos[1] + ((gameSettings.gameTypeTextSize * i) - 20 * i),
                        'white');
                }
            };

            var drawSinglesCharacters = function () {
                drawPlayerCharacters(0);
                drawPlayerCharacters(1);
            };

            var drawDoublesCharacters = function () {
                for (var i = 0; i < gameSettings.doublesCharacterList.length; i++) {
                    var addressString = 'player' + i;
                    console.log('test string', addressString);
                    var image = getImageByName(addressString);
                    console.log('image', image);
                    if (i % 2 === 0){
                        image.pos[0]-=(gameSettings.twoCharactersXOffset/2);
                        image.pos[1]-=(gameSettings.twoCharactersYOffset/2);
                    }
                    if (i % 2 === 1){
                        image.pos[0]+=(gameSettings.twoCharactersXOffset/2);
                    }
                    if (i <= 1) {
                        drawImage(image);
                    }
                    else if (i > 1) {
                        drawFlippedImage(image);
                    }
                }
            };

            me.draw = function (Images) {
                gameImages = Images;
                drawBackground();
                gameSettings.doublesMode ? drawDoublesCharacters() : drawSinglesCharacters();
                drawBorder();
                drawLogo();
                writeDate();
                gameSettings.doublesMode ? writeDoublesNames() : writeSinglesNames();
                writeGameType();
            };
        }])
})();