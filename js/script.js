function playVideo() {
    var video = document.getElementsByClassName("video-loader")[0];
    var playButton = document.getElementById("playButton");
    
    video.play();
    playButton.style.opacity = 0;
}