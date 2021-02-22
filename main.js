function do_jump() {
  document.getElementsByClassName('player')[0].classList.add("do_jump")
  setTimeout(function(){
    document.getElementsByClassName('player')[0].classList.remove("do_jump")
  }, 400)
}
setInterval(checkCollision, 100)

function checkCollision() {
  let player = document.getElementsByClassName('player')[0];
  let dino = document.getElementsByClassName('dino')[0];

  if((dino.offsetLeft < player.offsetLeft + 30) && (player.offsetTop > 140) ) {
    document.getElementsByClassName('dino')[0].classList.remove("dino_movement");
    alert('Game Over');
  }

  let element = document.querySelector('body');
  element.onkeydown = function(e) {
    do_jump();
  }
}

function start() {
  document.getElementsByClassName('dino')[0].classList.add("dino_movement")
}
