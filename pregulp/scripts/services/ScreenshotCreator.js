(function () {
    'use strict';

    angular.module('ThumbnailGenerator')
        .service('ScreenshotCreator', ['GlobalCanvas', function (globalCanvas) {
            var me = this;

            me.downloadPromt = function(image){
                var link = document.createElement('a'); //hacky lol
                link.download = 'testname.png';
                link.href = image;
                link.click();
            };

            me.createImage = function(){
                me.image = globalCanvas.getCanvas().toDataURL("image/png").replace("image/png", "image/octet-stream");
                me.downloadPromt(me.image);
            };
        }])
})();