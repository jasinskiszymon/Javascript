class Ball {
    constructor(x,y) {
        x=1;
        y=1;
        this.x = x;
        this.y = y;
        this.speedX = null;
        this.speedY = null;
    }

    ballSpeed(ev) {

        const setspeedvalue= 15;
        
        if (ev.beta > null) {
            this.speedY = ev.beta / setspeedvalue;
        } else if (ev.beta < null) {
            this.speedY = ev.beta / setspeedvalue;
        }
        if (ev.alpha > null) {
            this.speedX = ev.alpha / setspeedvalue;
        } else if (ev.alpha < null) {
            this.speedX = ev.alpha / setspeedvalue;
        }
        if (ev.gamma > null) {
            this.speedX = ev.gamma / setspeedvalue;
        } else if (ev.gamma < null) {
            this.speedX = ev.gamma / setspeedvalue;
        }
    }
}
class Hole {
    constructor(y, x) {  
        x = Math.floor(Math.random() * 1500);
        y = Math.floor(Math.random() * 800);
        this.y = y;
        this.x = x;
        this.holeHtml = null;
    }

    renderHole() {
        this.holeHtml = document.createElement('div');
        this.holeHtml.classList.add('hole');
       
        this.holeHtml.style.top = this.y + 'px';
        this.holeHtml.style.left = this.x + 'px';

        document.body.appendChild(this.holeHtml);
    }
}

class Game {
    constructor() {
        this.ball = new Ball();
        this.holes = [];
        this.gameWidth = null;
        this.gameHeight = null;
        this.ballElement = document.querySelector('.ball');
        this.startTime = null;
        this.endTime = null;
        //this.timer = document.querySelector('.timer');
    }

    logicandmove() {
        window.addEventListener('deviceorientation', (ev) => this.ball.ballSpeed(ev));

        this.startTime = Date.now();
        this.gameHeight = window.innerHeight - 60;
        this.gameWidth = window.innerWidth - 60;
        const hole = new Hole();

        this.holes.push(hole);
        this.holes.forEach((hole) => hole.renderHole());
    }

    moveBall() {
        if (this.ball.x + this.ball.speedX < this.gameWidth && this.ball.x + this.ball.speedX > 0) {
            this.ball.x += this.ball.speedX;
            this.ballElement.style.left = this.ball.x + 'px';
        }
        if (
            this.ball.y + this.ball.speedY < this.gameHeight &&
            this.ball.y + this.ball.speedY > 0
        ) {
            this.ball.y += this.ball.speedY;
            this.ballElement.style.top = this.ball.y + 'px';
        }
        this.holes.forEach((hole) => {
            const a = hole.x + 25 - Math.floor(this.ball.x + 25);
            const b = hole.y + 25 - Math.floor(this.ball.y + 25);
            const c = Math.sqrt(a * a + b * b);

            if (25 > c) {
                this.endTime = Date.now();
                alert(`${(this.endTime - this.startTime) / 1000} sekund`);
                
            }
        });

        window.requestAnimationFrame(() => this.moveBall());
    }
}

const game = new Game();
game.logicandmove();
game.moveBall();
