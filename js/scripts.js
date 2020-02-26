console.log('OK');

function leftArrowPressed() {
    let element = document.getElementById("Spaceship");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
  }

  function rightArrowPressed() {
    let element = document.getElementById("Spaceship");
    element.style.left = parseInt(element.style.left) + 5 + 'px';
  }

  function upArrowPressed() {
    let element = document.getElementById("Spaceship");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
  }

  function downArrowPressed() {
    let element = document.getElementById("Spaceship");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
  }

  function moveSelection(evt) {
    switch (evt.keyCode) {
      case 37:
      leftArrowPressed();
      break;
      case 39:
      rightArrowPressed();
      break;
      case 38:
      upArrowPressed();
      break;
      case 40:
      downArrowPressed();
      break;
    }
  };

    function docReady()
    {
          
    window.addEventListener('keydown', moveSelection);
    }

gsap.from( '.box', {
  x: 0,
  y: 250,
  repeat: -1,
  repeatDelay: 1,
  duration: 2,
});

gsap.to( '.box', {
  x: 0,
  y: 20,
  repeat: -1,
  repeatDelay: 1,  
  duration: 2,
});

var tween = gsap.to( '#Alien', {
  x: 350,
  y: 0,
  repeatDelay: 1,
  repeat: -1, 
  yoyo: true, 
  duration: 3,
  paused: true,
});

document.getElementById("play").onclick = () => tween.play();
