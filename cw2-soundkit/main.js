let channel = [];
let channel2 =[];
let channel3 = [];
let channel4 = [];
let recordStart;
let recordStart2;
let recordStart3;
let recordStart4;
let Recording1 = false;
let Recording2 = false;
let Recording3 = false;
let Recording4 = false;
document.body.addEventListener('keypress', onKeyPress);
document.querySelector('#playBtn').addEventListener('click', playChannel1);
document.querySelector('#record').addEventListener('click', recordChannel);
document.querySelector('#playBtn2').addEventListener('click', playChannel2);
document.querySelector('#record2').addEventListener('click', record2Channel);
document.querySelector('#playBtn3').addEventListener('click', playChannel3);
document.querySelector('#record3').addEventListener('click', record3Channel);
document.querySelector('#playBtn4').addEventListener('click', playChannel4);
document.querySelector('#record4').addEventListener('click', record4Channel);
function onKeyPress(ev) {
    let sound;
    switch (ev.code) {
        case 'KeyA':
            sound = 'boom';
            break;
        case 'KeyS':
            sound = 'clap';
            break;
        case 'KeyD':
            sound = 'hihat';
           
            break;
        case 'KeyF':
            sound = 'kick';
           
            break;
        case 'KeyG':
            sound = 'tom';
          
            break;
        case 'KeyZ':
            sound = 'openhat';
           
            break;
        case 'KeyX':
            sound = 'ride';
            break;
        case 'KeyC':
            sound = 'snare';
            
            break; 
        case 'KeyV':
            sound = 'tink';
            
            break;
    }

    if (sound) {
        const keyPressTime = Date.now() - recordStart;
        const soundObject = {
            sound: sound,
            time1: keyPressTime
        };
        playSound(sound);
        if(Recording1 == true){
            channel.push(soundObject);

        }
}
    if (sound) {
    const keyPressTime = Date.now() - recordStart2;
    const soundObject2 = {
        sound: sound,
        time2: keyPressTime
    }
    playSound(sound)
    if(Recording2 == true){
    channel2.push(soundObject2);
    }
}

if (sound) {
    const keyPressTime = Date.now() - recordStart3;
    const soundObject3 = {
        sound: sound,
        time3: keyPressTime
    }
    playSound(sound)
    if(Recording3 == true){
    channel3.push(soundObject3);
    }
}
if (sound) {
    const keyPressTime = Date.now() - recordStart4;
    const soundObject4 = {
        sound: sound,
        time4: keyPressTime
    }
    playSound(sound)
    if(Recording4 == true){
    channel4.push(soundObject4);
    }
}
}
function recordChannel() {
    if(Recording1==false)
    {
        Recording1 = false;
    }
    else
    {
        Recording1 = true;
        channel = [];
        recordStart = Date.now();
    }
}
function record2Channel() {
    if(Recording2)
    {
        Recording2 = false;
    }
    else
    {
        Recording2 = true;
        channel2 = [];
        recordStart2 = Date.now();
    }
}
function record3Channel() {
    if(Recording3)
    {
        Recording3 = false;
    }
    else
    {
        Recording3 = true;
        channel3 = [];
        recordStart3 = Date.now();
    }
}
function record4Channel() {
    if(Recording4)
    {
        Recording4 = false;
    }
    else
    {
        Recording4 = true;
        channel4 = [];
        recordStart4 = Date.now();
    }
}
function playChannel1() {
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

function playChannel2() {
    for (let index = 0; index < channel2.length; index++) {
        const soundObject2 = channel2[index];
        setTimeout(
            () => {
                playSound(soundObject2.sound);
            },
            soundObject2.time2
        );
    }

}
function playChannel3() {
    for (let index = 0; index < channel3.length; index++) {
        const soundObject3 = channel3[index];
        setTimeout(
            () => {
                playSound(soundObject3.sound);
            },
            soundObject3.time3
        );
    }

}
function playChannel4() {
    for (let index = 0; index < channel4.length; index++) {
        const soundObject4 = channel4[index];
        setTimeout(
            () => {
                playSound(soundObject4.sound);
            },
            soundObject4.time4
        );
    }

}

function playSound(sound) {
    const soundplay = document.querySelector('#' + sound);
    soundplay.play();
}