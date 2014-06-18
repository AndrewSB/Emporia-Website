var canvas, ctx;
var aImages = [];
var iCurSlide = 0;
var iCnt = 0;
var iSmTimer = 0;
var iContr = 0;
var iEfIter = 50;

$(function(){
    // creating canvas objects
    canvas = document.getElementById('slideshow');
    ctx = canvas.getContext('2d');

    // collect all images
    $('.slides').children().each(function(i){
        var oImg = new Image();
        oImg.src = this.src;
        aImages.push(oImg);
    });

    // draw first image
    ctx.drawImage(aImages[iCurSlide], 0, 0);

    var iTimer = setInterval(changeSlideTimer, 5000); // set inner timer
});

function changeSlideTimer() {
    iCurSlide++;
    if (iCurSlide == $(aImages).length) {
        iCurSlide = 0;
    }

    clearInterval(iSmTimer);
    iSmTimer = setInterval(drawSwEffect, 40); // extra one timer
}

// draw switching effect
function drawSwEffect() {
    iCnt++;

    if (iCnt <= iEfIter / 2) {
        iContr += 0.004;

        // change brightness and contrast
        Pixastic.process(canvas, 'brightness',
            {
                'brightness': 2,
                'contrast': 0.0 + iContr,
                'leaveDOM': true
            },
            function(img) {
                ctx.drawImage(img, 0, 0);
            }
        );
    }

    if (iCnt > iEfIter / 2) {
        // change brightness
        Pixastic.process(canvas, 'brightness',
            {
                'brightness': -2,
                'contrast': 0,
                'leaveDOM': true
            },
            function(img) {
                ctx.drawImage(img, 0, 0);
            }
        );
    }

    if (iCnt == iEfIter / 2) { // switch actual image
        iContr = 0;
        ctx.drawImage(aImages[iCurSlide], 0, 0);

        Pixastic.process(canvas, 'brightness',
            {
                'brightness': iEfIter,
                'contrast': 0,
                'leaveDOM': true
            },
            function(img) {
                ctx.drawImage(img, 0, 0);
            }
        );
    } else if (iCnt == iEfIter) { // end of cycle, clear extra sub timer
        clearInterval(iSmTimer);
        iCnt = 0;
        iContr = 0;
    }
}