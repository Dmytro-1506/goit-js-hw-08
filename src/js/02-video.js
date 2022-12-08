import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
    
    let currentTime = data.seconds;

    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));
}

let savedTime = localStorage.getItem("videoplayer-current-time");
    if (savedTime) {
        player.setCurrentTime(Number(savedTime));
    }

player.on('timeupdate', throttle(onPlay, 1000));

