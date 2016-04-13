// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    var leavingOverlay, showReplayButton, video;
    video = $('#hero-video')[0];
    leavingOverlay = false;
    showReplayButton = function(showReplay) {
      if (showReplay) {
        $('.play').removeClass("hide", 0, "easeInBack");
        return $('.resume').addClass("hide", 0, "easeInBack");
      } else {
        $('.play').addClass("hide", 0, "easeInBack");
        return $('.resume').removeClass("hide", 0, "easeInBack");
      }
    };
    $('.hero').bind("click", function() {
      if (!video.paused && !leavingOverlay) {
        video.pause();
        showReplayButton(false);
        return $('.overlay').fadeIn();
      } else {
        return leavingOverlay = false;
      }
    });
    $('.resume').bind("click", function(e) {
      e.preventDefault();
      if (video.paused) {
        video.play();
        $('.overlay').fadeOut();
        return leavingOverlay = true;
      }
    });
    $('.play').bind("click", function(e) {
      e.preventDefault();
      video.play();
      $('.overlay').fadeOut();
      return leavingOverlay = true;
    });
    $(video).bind("timeupdate", function(e) {
      var currentTime;
      currentTime = video.currentTime;
      if (currentTime > 39) {
        $('.overlay').fadeIn();
        return showReplayButton(true);
      }
    });
    return $(window).scroll(function(e) {
      var offsetTop;
      offsetTop = $(window).scrollTop();
      if (offsetTop > 500) {
        video.pause();
        showReplayButton(false);
        return $('.overlay').fadeIn();
      }
    });
  });

}).call(this);