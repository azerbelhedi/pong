let canvas = document.querySelector("#myCanvas") ;
let ctx = canvas.getContext("2d") ;

let x = canvas.width / 2 ;
let y = canvas.height / 2 ;
let radius = 5 ;

let dy = 0.5 ;
let dx = 1.5 ;

let player1X = canvas.width ;
let player1Y = canvas.height / 2 ;

let player2X =  0 ;
let player2Y = canvas.height / 2 ;

let player1dY = 0 ;
let player2dY = 0 ;

const drawBall = () => {
    ctx.beginPath() ;
    ctx.arc(x , y , radius , 0 , 6.28) ;
    ctx.fillStyle = "green" ;
    ctx.fill() ;
    ctx.closePath() ;
}

const testCollision = () => {
    dy += 0.1 ;
    dx += 0.1 ;
    if(y + radius <= canvas.height){
        dy = -dy ;
    }
    if(x + radius >= canvas.width && (y > player1Y) &&( y< player1Y + 50) ){
        dx = -dx ;
    } 
    if(y - radius >= 0){
        dy = -dy ;
    }
    if(x-radius <= 0 && (y > player2Y) &&( y< player2Y + 50)){
        dx = -dx ;
    }
}

const drawPlayer1 = () =>{
    ctx.beginPath() ;
    ctx.rect(player1X - 5 , player1Y , 5 , 50) ;
    ctx.fillStyle = "green" ;
    ctx.fill() ;
    ctx.closePath() ;
}

const drawPlayer2 = () =>{
    ctx.beginPath() ;
    ctx.rect(player2X , player2Y , 5 , 50) ;
    ctx.fillStyle = "green" ;
    ctx.fill() ;
    ctx.closePath() ;
}


const draw = () => {
    ctx.clearRect(0 , 0 , canvas.width , canvas.height) ;
    drawBall() ;
    y = y + dy ;
    x = x + dx ;
    testCollision() ;
    drawPlayer1() ;
    drawPlayer2() ;
    player1Y += player1dY ;
    player2Y += player2dY ;
}

setInterval(draw , 10) ;

const update = (e) => {
    //alert(e.key) ;
    if(e.key == "ArrowUp"){
        player1dY = -1 ;
    }
    if(e.key == "ArrowDown"){
        player1dY = 1 ;
    }
}

const update2 = (e) => {
    //alert(e.key) ;
    if(e.key == "ArrowUp"){
        player1dY = 0 ;
    }
    if(e.key == "ArrowDown"){
        player1dY = 0 ;
    }
}

///////////////////////


const update3 = (e) => {
    //alert(e.key) ;
    if(e.key == "a"){
        player2dY = -1 ;
    }
    if(e.key == "w"){
        player2dY = 1 ;
    }
}

const update4 = (e) => {
    //alert(e.key) ;
    if(e.key == "a"){
        player2dY = 0 ;
    }
    if(e.key == "w"){
        player2dY = 0 ;
    }
}





document.addEventListener('keydown' , update) ;
document.addEventListener('keyup' , update2) ;


document.addEventListener('keydown' , update3) ;
document.addEventListener('keyup' , update4) ;