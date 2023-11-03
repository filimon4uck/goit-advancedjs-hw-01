import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const DATA_TIME_KEY = 'videoplayer-current-time';

const savedTime = Number(JSON.parse(localStorage.getItem(DATA_TIME_KEY))) ?? 0;

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(DATA_TIME_KEY, JSON.stringify(data.seconds));
  }, 1000)
);

player.setCurrentTime(savedTime);
