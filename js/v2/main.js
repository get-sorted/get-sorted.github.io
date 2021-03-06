// Generated by CoffeeScript 1.10.0
(function() {
  $(function() {
    var leavingOverlay, showReplayButton, video;
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
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
      $('#hero-video').bind("click", function() {
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
      $(video).bind("loadstart", function(e) {
        return $('.spinner').show();
      });
      $(video).bind("play", function(e) {
        return $('.spinner').fadeOut();
      });
      $(video).bind("playing", function(e) {
        return $('.spinner').fadeOut();
      });
      $(video).bind("waiting", function(e) {
        return $('.spinner').show();
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
    }
  });

}).call(this);
