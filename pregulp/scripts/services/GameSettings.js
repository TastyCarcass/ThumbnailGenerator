(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('GameSettings', [function () {
            var me = this;

            //locations
            me.charactersLocation = 'images/characterPortraits/';
            me.backgroundLocation = 'images/backgrounds/';
            me.borderLocation = 'images/borders/';
            me.gameLogoLocation = 'images/gameLogos/';

            //textSizes
            me.dateTextSize = 140;
            me.playerNameTextSize = 100;
            me.doublesPlayerNameTextSize = 80;
            me.gameTypeTextSize = 130;
            me.gameTypeSpace = 0;

            //positions
            me.singlesNamePositions = [[310, 100], [950, 100]];
            me.doublesNamePositions = [[310, 60], [310, 125], [950, 60], [950, 125]];
            me.datePos = [770, 700];
            me.gameTypePos = [640, 330];
            me.gameTypeSpace = 5;
            me.twoCharactersXOffset = 300;
            me.twoCharactersYOffset = 150;

            //data
            me.date = '11/11/1111';
            me.gameTypeText = ['WINNERS', 'FINALS'];

            //mode
            me.gameModes = ['singles', 'doubles'];
            me.selectedGameMode = 'singles';
            me.doublesMode = false;

            me.toggleDoublesMode = function(){
                me.doublesMode = !me.doublesMode;
            };

            me.selectedBackground = 'background';
            me.changeBackground = function (backgroundName) {
                me.selectedBackground = backgroundName;
            };

            me.selectedBorder = 'border';
            me.changeBorder = function (bannerName) {
                me.selectedBorder = bannerName;
            };

            me.selectedGameLogo = 'melee logo';
            me.changeGameLogo = function (logoName) {
                me.selectedLogo = logoName;
            };

            me.leetHacker = ['0', '1'];


            me.doublesCharacterList = ['FOX', 'FOX', 'FOX', 'FOX'];
            me.singlesCharacterList = [['fox', 'none', 'none'], ['fox', 'none', 'none']];

            me.changeSinglesCharacter = function (playerNumber, characterNumber, characterName) {
                me.singlesCharacterList[playerNumber][characterNumber] = characterName;
            };

            me.changeDoublesCharacter = function (playerNumber, characterName) {
                me.doublesCharacterList[playerNumber] = characterName;
            };

            me.getNumberOfCharacters = function (playerNumber) {
                var total = 0;
                for (var i = 0; i < me.singlesCharacterList[playerNumber].length; i++) {
                    if (me.singlesCharacterList[playerNumber][i] !== 'none') {
                        total++;
                    }
                }
                return total;
            };

            me.doublesPlayerNames = ['player1', 'player2', 'player3', 'player4'];
            me.singlesPlayerNames = ['player1', 'Player2'];
            me.addSinglesNameNewLine = function (playerNumber) {
                me.singlesPlayerNames[playerNumber] += '\n';
            };
        }])
})();