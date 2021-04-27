class Gun{
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = "#37fd00";
        ctx.arc(this.x,this.y,30,0,Math.PI*2);
        ctx.fill();

        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "#fd0000";
        ctx.fillRect(this.x - 50,this.y - 10,50,20);
        ctx.rotate(this.angle);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        ctx.beginPath();
        ctx.fillStyle = "#ecfd01";
        ctx.arc(this.x,this.y,20,0,Math.PI*2);
        ctx.fill();
    }

    rotateGun(targetX,targetY){
        let dx = this.x - targetX;
        let dy = this.y - targetY;
        this.angle = Math.atan2(dy,dx);
        console.log(this.angle);
    }






}