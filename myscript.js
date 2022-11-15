alert("hello")
const main = document.querySelector(".main");
const ball = document.querySelector(".ball");




let leftright = Math.floor(Math.random() * 2);
let right = leftright ? true : false

let upDown = Math.floor(Math.random() * 2);
let up = upDown ? true : false
let velocity = 3;


let ballMove = setInterval(() => {
    let ballbounds = ball.getBoundingClientRect()
    let boarderbounds = main.getBoundingClientRect()
    let ballboundsleft = parseInt(ballbounds.left)
    let ballboundsright = parseInt(ballbounds.right)
    let ballboundstop = parseInt(ballbounds.top);
    let ballboundsbottom = parseInt(ballbounds.bottom);


    let balltop = Math.floor(parseInt(window.getComputedStyle(ball).getPropertyValue("top")))

    let ballleft = Math.floor(parseInt(window.getComputedStyle(ball).getPropertyValue("left")))

    if (right && up) {
        ball.style.top = balltop - velocity + "px";
        ball.style.left = ballleft + velocity + "px";
    }

    if (!right && up) {
        ball.style.top = balltop - velocity + "px";
        ball.style.left = ballleft - velocity + "px";
    }

    if (right && !up) {
        ball.style.top = balltop + velocity + "px";
        ball.style.left = ballleft + velocity + "px";
    }
    if (!right && !up) {
        ball.style.top = balltop + velocity + "px";
        ball.style.left = ballleft - velocity + "px";
    }

    if (ballboundstop <= boarderbounds.top) {
        leftright = Math.floor(Math.random() * 2)
        right = leftright ? true : false;
        up = false;
    }

    if (ballboundsbottom >= boarderbounds.bottom) {
        leftright = Math.floor(Math.random() * 2)
        right = leftright ? true : false;
        up = true;
    }

    if (ballboundsright >= boarderbounds.right) {
        right = false;
        upDown = Math.floor(Math.random() * 2);
        up = upDown ? true : false
    }

    if (ballboundsleft <= boarderbounds.left) {
        right = true;
        upDown = Math.floor(Math.random() * 2);
        up = upDown ? true : false
    }


}, 10)
