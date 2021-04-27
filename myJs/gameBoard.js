let cvs = document.getElementById('myCanvas');
ctx = cvs.getContext('2d');

let gun = new Gun(450, 260);
let eagle = new Eagle("picture/eagle.png");


function Mousemove(e) {
    let x = e.clientX;
    let y = e.clientY;
    gun.rotateGun(x, y);
}

function run() {
    eagle.run();
    eagle.moveRight();
    gun.draw();
    requestAnimationFrame(run);
}

run();


