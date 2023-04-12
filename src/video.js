const playBtn = document.querySelector('.made-play');
const videoPlayer = document.querySelector('#made-video-player');
const madeVideo = document.querySelector('.made-video');

playBtn.addEventListener('click', () => {
  videoPlayer.style.display = 'block';
  videoPlayer.src += "?autoplay=1";
  playBtn.style.display = 'none';
  madeVideo.style.display = 'none';
});