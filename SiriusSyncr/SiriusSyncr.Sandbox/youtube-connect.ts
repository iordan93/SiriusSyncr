﻿$(document).ready(() => {
    $("#video").hide();

    $.getScript("//www.youtube.com/iframe_api")
        .then(function () {
            var player = new YT.Player("video", {
                width: 640,
                height: 480
            });

            $("#submit").click(() => {
                var videoElement = $("#video");
                $("#video").show();

                var url: string = $("#youtube-link").val();
                var parsedVideoId = parseYouTubeUrl(url);
                if (parsedVideoId) {
                    player.loadVideoById(parsedVideoId);
                }
                else {
                    alert("Could not find video ID!");
                }
            });

            $("#startButton").click(function (e) {
                player.seekTo(0, true);
                player.playVideo();
            });

            $("#pauseButton").click(function (e) {
                player.pauseVideo();
            });

            $("#stopButton").click(function (e) {
                player.stopVideo();
            });
        });
});

function parseYouTubeUrl(url: string): string {
    var regExp: RegExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[1].length == 11) {
        return match[1];
    }

    return null;
}