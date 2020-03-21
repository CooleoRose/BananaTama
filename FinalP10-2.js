let body = document.querySelector('body');
let h1 = document.querySelector('h1');

let potAni = document.querySelector('.eye1');
let potAni2 = document.querySelector('.eye2');
let tropAni = document.querySelector('.sun');
let tropAni2 = document.querySelector('.heat');
let tropAni3 = document.querySelector('.eye1');
let tropAni3b = document.querySelector('.eye2');

let happyMode1 = document.querySelector('.mouth');
let sadMode1 = document.querySelector('.e1');
let sadMode1b = document.querySelector('.e2');

let growBut = document.querySelector('.b1');
let waxBut = document.querySelector('.b2');
let tropBut = document.querySelector('.b3');
let potBut = document.querySelector('.b4');

let growCol = document.querySelector('.c1');
let waxCol = document.querySelector('.c2');
let tropCol = document.querySelector('.c3');
let potCol = document.querySelector('.c4');

let gradInc = [growCol, waxCol, tropCol, potCol];

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
      happyMode1.classList.remove('happy-mouth');
      happyMode1.classList.add('sad-mouth');
      sadMode1.classList.add('brow-show');
      sadMode1b.classList.add('brow-show2');
    } else {
      happyMode1.classList.add('happy-mouth');
      happyMode1.classList.remove('sad-mouth');
      sadMode1.classList.remove('brow-show');
      sadMode1b.classList.remove('brow-show2');
    }
  }, 200);
}
checkMood();

function increaseGrow(n) {
  if (deadBanana == false) {
    if (timer[n]) {
      let growGen = Math.ceil(Math.random()*needNum[n]);
      levNum[n] = (levNum[n] -= growGen);
      if (n == 0) {
        console.log(levNum[0]);
        growCol.style.height = levNum[0]*1.5+'px';
        timer[0] = false;
        window.setTimeout(function() {timer[0] = true;}, 1000);
      } else if (n == 1){
        console.log(levNum[1]);
        waxCol.style.height = levNum[1]*1.5+'px';
        timer[1] = false;
        window.setTimeout(function() {timer[1] = true;}, 1000);
      } else if (n == 2) {
        console.log(levNum[2]);
        tropCol.style.height = levNum[2]*1.5+'px';
        tropAni.classList.toggle("sun-show");
        tropAni2.classList.toggle("banana-heat");
        tropAni3.classList.toggle("banana-back");
        tropAni3b.classList.toggle("banana-back");
        happyMode1.classList.toggle("banana-back");
        setTimeout(function(){
        tropAni.classList.toggle("sun-show");
        tropAni2.classList.toggle("banana-heat");
        tropAni3.classList.toggle("banana-back");
        tropAni3b.classList.toggle("banana-back");
        happyMode1.classList.toggle("banana-back");
      }, 1200);
        timer[2] = false;
        window.setTimeout(function() {timer[2] = true;}, 1000);
      } else if (n == 3){
        console.log(levNum[3]);
        potCol.style.height = levNum[3]*1.5+'px';
        potAni2.classList.toggle("pot-blink2");
        potAni.classList.toggle("pot-blink");
        setTimeout(function(){
        potAni.classList.toggle("pot-blink");
        potAni2.classList.toggle("pot-blink2");
        }, 800);
        timer[3] = false;
        window.setTimeout(function() {timer[3] = true;}, 1000);
      } else {}
    } else {}
  } else {}
}

function gradualIncrease(e) {
  setInterval(function(){
  levNum[e] += Math.random()*5;
  if (levNum[e] > 200) {
    levNum[e] = 200;
  } else if (levNum[e] < 0) {
    levNum[e] = 0;
  } else if (levNum[e] > 190){
    gradInc[e].style.backgroundColor = 'red';
  } else if (levNum[e] > 180){
    gradInc[e].style.backgroundColor = '#b50747';
  } else if (levNum[e] > 170){
    gradInc[e].style.backgroundColor = '#f07f07';
  } else {
    gradInc[e].style.backgroundColor = '#ea00ff';
  }
  gradInc[e].style.height = levNum[e]*1.5+"px";
}, 1000);
}

function gradualIncreaseTrigger() {
  setInterval(function(){
    let gicVar = Math.floor(Math.random()*4);
    if (gicVar == 0) {
      gradualIncrease(0);
    } else if (gicVar == 1) {
      gradualIncrease(1);
    } else if (gicVar == 2) {
      gradualIncrease(2);
    } else if (gicVar == 3) {
      gradualIncrease(3);
    } else {}
  }, 1000);
}

gradualIncreaseTrigger();

function deathCount() {
  setInterval(function(){
    if(levNum[0] == 200 && levNum[1] == 200 && levNum[2] == 200 && levNum[3] == 200) {
      h1.textContent = "Radiation! Ouch!";
      deadBanana = true;
    }
    }, 100);
  }

deathCount();

growBut.onclick = function() {increaseGrow(0)};
waxBut.onclick = function() {increaseGrow(1)};
tropBut.onclick = function() {increaseGrow(2)};
potBut.onclick = function() {increaseGrow(3)};
