if (bool = null) {
    var bool = true;
}

function changeImage() {
    bool = !bool;
    if (bool) {
      Transitions.fade("#tradescreen_phone_mask", "assets/twitter.png", "Social Media Images", ".4")
    } else {
      Transitions.fade("#tradescreen_phone_mask", "assets/facebook.png", "Social Media Images", ".4")
    }
}

setInterval(changeImage, 5000);
