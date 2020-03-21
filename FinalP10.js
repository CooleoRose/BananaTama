//I had already done arrays before I realised I could do objects. Sorry.
//Also, because I have 4 bars instead of three, can I pls get one of those enhancement marks at least?

let baseParts = [
  document.querySelector('html'),
  document.querySelector('body'),
  document.querySelector('main'),
  document.querySelector('h1')
];

let potAni = [
  document.querySelector('.eye1'),
  document.querySelector('.eye2')
];

let tropAni = [
  document.querySelector('.sun'),
  document.querySelector('.heat'),
];

let monkAni = [
  document.querySelector('.monkey'),
  document.querySelector('.mouth'),
];

let growAni = [
  document.querySelector('.banana-man'),
];

let moodMode = [
  document.querySelector('.mouth'),
  document.querySelector('.e1'),
  document.querySelector('.e2')
];

let butList = [
document.querySelector('.b1'),
document.querySelector('.b2'),
document.querySelector('.b3'),
document.querySelector('.b4')
];

let gradInc = [
document.querySelector('.c1'),
document.querySelector('.c2'),
document.querySelector('.c3'),
document.querySelector('.c4')
];

let timer = [true, true, true, true];

let levNum = [100, 100, 100, 100];

let needNum = [50, 50, 50, 50];

let deadBanana = false;

function needReq() {
  setInterval(function(){
    if (needNum[0] > 0) {
      needNum[0] = needNum[0] -= 1;
    } else {}
    if (needNum[1] > 0) {
      needNum[1] = needNum[1] -= 1;
    } else {}
    if (needNum[2] > 0) {
      needNum[2] = needNum[2] -= 2;
    } else {}
    if (needNum[3] > 0) {
      needNum[3] = needNum[3] -= 2;
    } else {}
  }, 30000);
}
needReq();

function checkMood() {
  setInterval(function(){
    if ((levNum[0]+levNum[1]+levNum[2]+levNum[3]) > 600) {
      moodMode[0].classList.remove('happy-mouth');
      moodMode[0].classList.add('sad-mouth');
      moodMode[1].classList.add('brow-show');
      moodMode[2].classList.add('brow-show2');
    } else {
      moodMode[0].classList.add('happy-mouth');
      moodMode[0].classList.remove('sad-mouth');
      moodMode[1].classList.remove('brow-show');
      moodMode[2].classList.remove('brow-show2');
    }
  }, 200);
}
checkMood();

function increaseBanana(n) {
  if (deadBanana == false) {
    if (timer[n]) {
      let growGen = Math.ceil(Math.random()*needNum[n]);
      levNum[n] = (levNum[n] -= growGen);
      if (n == 0) {
        console.log(levNum[0]);
        gradInc[0].style.height = levNum[0]*1.5+'px';
        growAni[0].classList.toggle("grow-scale");
        setTimeout(function(){
        growAni[0].classList.toggle("grow-scale");
      }, 1200);
        timer[0] = false;
        window.setTimeout(function() {timer[0] = true;}, 1000);
      } else if (n == 1){
        console.log(levNum[1]);
        gradInc[1].style.height = levNum[1]*1.5+'px';
        monkAni[0].classList.toggle("monkey-face");
        monkAni[1].classList.toggle("mouth-eat");
        potAni[0].classList.toggle("eye-enlarge");
        potAni[1].classList.toggle("eye-enlarge");
        if ((levNum[0]+levNum[1]+levNum[2]+levNum[3]) > 600) {
          moodMode[0].classList.remove('happy-mouth');
        } else {
          moodMode[0].classList.remove('sad-mouth');
        }
        setTimeout(function(){
        monkAni[0].classList.toggle("monkey-face");
        monkAni[1].classList.toggle("mouth-eat");
        potAni[0].classList.toggle("eye-enlarge");
        potAni[1].classList.toggle("eye-enlarge");
        if ((levNum[0]+levNum[1]+levNum[2]+levNum[3]) > 600) {
          moodMode[0].classList.add('happy-mouth');
        } else {
          moodMode[0].classList.add('sad-mouth');
        }
      }, 2000);
        timer[1] = false;
        window.setTimeout(function() {timer[1] = true;}, 1000);
      } else if (n == 2) {
        console.log(levNum[2]);
        gradInc[2].style.height = levNum[2]*1.5+'px';
        tropAni[0].classList.toggle("sun-show");
        tropAni[1].classList.toggle("banana-heat");
        potAni[0].classList.toggle("banana-back");
        potAni[1].classList.toggle("banana-back");
        moodMode[0].classList.toggle("banana-back");
        setTimeout(function(){
        tropAni[0].classList.toggle("sun-show");
        tropAni[1].classList.toggle("banana-heat");
        potAni[0].classList.toggle("banana-back");
        potAni[1].classList.toggle("banana-back");
        moodMode[0].classList.toggle("banana-back");
      }, 1200);
        timer[2] = false;
        window.setTimeout(function() {timer[2] = true;}, 1000);
      } else if (n == 3){
        console.log(levNum[3]);
        gradInc[3].style.height = levNum[3]*1.5+'px';
        potAni[1].classList.toggle("pot-blink2");
        potAni[0].classList.toggle("pot-blink");
        setTimeout(function(){
        potAni[0].classList.toggle("pot-blink");
        potAni[1].classList.toggle("pot-blink2");
        }, 800);
        timer[3] = false;
        window.setTimeout(function() {timer[3] = true;}, 1000);
      } else {}
    } else {}
  } else {}
}

// I researched it, and it is not possible to activate two javascript functions in parallel. I have left them as 4 seperate functions, so the can all go up at the same time. Sorry again.

function gradualIncrease() {
  setInterval(function(){
  levNum[0] += Math.random()+1;
  if (levNum[0] > 200) {
    levNum[0] = 200;
  } else if (levNum[0] < 0) {
    levNum[0] = 0;
  } else if (levNum[0] > 190){
    gradInc[0].style.backgroundColor = 'red';
  } else if (levNum[0] > 180){
    gradInc[0].style.backgroundColor = '#b50747';
  } else if (levNum[0] > 170){
    gradInc[0].style.backgroundColor = '#f07f07';
  } else {
    gradInc[0].style.backgroundColor = '#ea00ff';
  }
  gradInc[0].style.height = levNum[0]*1.5+"px";
}, 400);
}
gradualIncrease();

function gradualIncrease2() {
  setInterval(function(){
  levNum[1] += Math.random()+1;
  if (levNum[1] > 200) {
    levNum[1] = 200;
  } else if (levNum[1] < 0) {
    levNum[1] = 0;
  } else if (levNum[1] > 190){
    gradInc[1].style.backgroundColor = 'red';
  } else if (levNum[1] > 180){
    gradInc[1].style.backgroundColor = '#b50747';
  } else if (levNum[1] > 170){
    gradInc[1].style.backgroundColor = '#f07f07';
  } else {
    gradInc[1].style.backgroundColor = '#ea00ff';
  }
  gradInc[1].style.height = levNum[1]*1.5+"px";
}, 500);
}
gradualIncrease2();

function gradualIncrease3() {
  setInterval(function(){
  levNum[2] += Math.random()+1;
  if (levNum[2] > 200) {
    levNum[2] = 200;
  } else if (levNum[2] < 0) {
    levNum[2] = 0;
  } else if (levNum[2] > 190){
    gradInc[2].style.backgroundColor = 'red';
  } else if (levNum[2] > 180){
    gradInc[2].style.backgroundColor = '#b50747';
  } else if (levNum[2] > 170){
    gradInc[2].style.backgroundColor = '#f07f07';
  } else {
    gradInc[2].style.backgroundColor = '#ea00ff';
  }
  gradInc[2].style.height = levNum[2]*1.5+"px";
}, 600);
}
gradualIncrease3();

function gradualIncrease4() {
  setInterval(function(){
  levNum[3] += Math.random()+1;
  if (levNum[3] > 200) {
    levNum[3] = 200;
  } else if (levNum[3] < 0) {
    levNum[3] = 0;
  } else if (levNum[3] > 190){
    gradInc[3].style.backgroundColor = 'red';
  } else if (levNum[3] > 180){
    gradInc[3].style.backgroundColor = '#b50747';
  } else if (levNum[3] > 170){
    gradInc[3].style.backgroundColor = '#f07f07';
  } else {
    gradInc[3].style.backgroundColor = '#ea00ff';
  }
  gradInc[3].style.height = levNum[3]*1.5+"px";
}, 700);
}
gradualIncrease4();

function deathCount() {
  setInterval(function(){
    if(levNum[0] == 200 && levNum[1] == 200 && levNum[2] == 200 && levNum[3] == 200) {
      baseParts[3].textContent = "Radiation! Ouch!";
      deadBanana = true;
    }
    }, 100);
  }
deathCount();

butList[0].onclick = function() {increaseBanana(0);};
butList[1].onclick = function() {increaseBanana(1);};
butList[2].onclick = function() {increaseBanana(2);};
butList[3].onclick = function() {increaseBanana(3);};
