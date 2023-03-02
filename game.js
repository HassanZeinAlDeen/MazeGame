function elementsOverlap(el1, el2) {
  const domRect1 = el1.getBoundingClientRect();
  const domRect2 = el2.getBoundingClientRect();

  return !(
    domRect1.top > domRect2.bottom ||
    domRect1.right < domRect2.left ||
    domRect1.bottom < domRect2.top ||
    domRect1.left > domRect2.right
  );
}

document.addEventListener("DOMContentLoaded", function (event) {
  var score = 0;
  var gameRunning = true;
  var graydivs = document.getElementsByClassName('boundary')
  document.addEventListener("click", function (event) {
    //score = 0;
    //document.getElementsByClassName('example')[0].innerHTML = score;
    document.getElementById('status').innerHTML = 'Begin by moving your mouse over the "S".';
    for (var i = 0; i < graydivs.length; i++) {
      graydivs[i].style.backgroundColor = "#eeeeee";
    }
    document.getElementById('start').style.marginLeft = "0px";
    document.getElementById('start').style.marginTop = "0px";
    document.onmousemove = function (e) { };
    gameRunning = true;
  });

  var Sbox = document.getElementById('start');
  var Ebox = document.getElementById('end');
  var firstTime = true;

  document.getElementById('start').addEventListener('mouseover', function () {
    document.onmousemove = function (e) {
      var overlap = false;
      var endlap = false;
      for (var i = 0; i < graydivs.length; i++) {
        if (elementsOverlap(Sbox, graydivs[i])) {
          overlap = true;
        }
      }
      if (overlap && gameRunning) {
        document.getElementById('status').innerHTML = "You Lose!";
        gameRunning = false;
        score -= 10;
        document.getElementsByClassName('boundary example')[0].innerHTML = score;
        for (var i = 0; i < graydivs.length; i++) {
          graydivs[i].style.backgroundColor = "red";
        }
      }
      for (var i = 0; i < graydivs.length; i++) {
        if (elementsOverlap(Sbox, Ebox)) {
          endlap = true;
        }
      }
      if (endlap && gameRunning) {
        document.getElementById('status').innerHTML = "You Won!";
        gameRunning = false;
        score += 5;
        document.getElementsByClassName('boundary example')[0].innerHTML = score;
      }
      //console.log(graydivs);


      //console.log("e",e);
      var x = e.clientX;
      var y = e.clientY;
      console.log("x", x);
      console.log("y", y);
      if (firstTime && gameRunning) {
        if (y >= 350) {
          document.getElementById('start').style.marginLeft = (x - 450) + "px";
          document.getElementById('start').style.marginTop = (y - 350) + "px";
          firstTime = false;
        }

      } else {
        if (gameRunning) {
          document.getElementById('start').style.marginLeft = (x - 450) + "px";
          document.getElementById('start').style.marginTop = (y - 350) + "px";
        }
      }



    }
  })



  // var gbox = document.getElementById('start')
  // var graydivs = document.getElementsByClassName('boundary')
  // graydivs.addEventListener('mouseover', function () {
  //   for (let i = 0; i < graydivs.length; i++) {
  //     graydivs[i].style.backgroundColor = 'red';
  //   }
  // })

  // gbox.addEventListener('click',function(){
  //   for(let i=0;i<graydivs.length;i++){
  //     graydivs[i].style.backgroundColor = 'gray';
  //   }
  // })




})