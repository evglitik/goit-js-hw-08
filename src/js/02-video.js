import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const PLAY_VIDEO_TIME = 'videoplayer-current-time';

player
  .setCurrentTime(localStorage.getItem(PLAY_VIDEO_TIME))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });;

player.on('timeupdate', throttle(handleTimePlay, 1000));

function handleTimePlay(data) {
  const timePlay = data.seconds;
  localStorage.setItem(PLAY_VIDEO_TIME, JSON.stringify(timePlay));
}
