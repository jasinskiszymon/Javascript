
document.body.addEventListener('keypress', onKeyPress);
document.querySelector('#playBtn').addEventListener('click', playChannel);
const channel = [];
const recordStart = Date.now();
function onKeyPress(ev) {
    let sound;
    let soundName;
    switch (ev.code) {
        case 'KeyA':
            soundName = 'boom';
            sound = document.querySelector('#boom');
            break;
        case 'KeyS':
            soundName = 'clap';
            sound = document.querySelector('#clap');
            break;
        case 'KeyD':
            soundName = 'hihat';
            sound = document.querySelector('#hihat');
            break;
        case 'KeyF':
            soundName = 'kick';
            sound = document.querySelector('#kick');
            break;
        case 'KeyG':
            soundName = 'tom';
            sound = document.querySelector('#tom');
            break;
        case 'KeyZ':
            soundName = 'openhat';
            sound = document.querySelector('#openhat');
            break;
        case 'KeyX':
            soundName = 'ride';
            sound = document.querySelector('#ride');
            break;
        case 'KeyC':
            soundName = 'snare';
            sound = document.querySelector('#snare');
            break; 
        case 'KeyV':
            soundName = 'tink';
            sound = document.querySelector('#tink');
            break;
    }
    if (sound) {
        const keyPressTime = Date.now() - recordStart;
        const recordedSound = {
            sound: soundName,
            time: keyPressTime
        };
        channel.push(recordedSound);
        sound.play();
    }
}
function playChannel() {
    for (let index = 0; index < channel.length; index++) {
        const soundObject = channel[index];
        setTimeout(
            () => {
                playSound(soundObject.sound);
            },
            soundObject.time
        );
    }

}
function playSound(soundName) {
    const sound = document.querySelector('#' + soundName);
    sound.play();
}