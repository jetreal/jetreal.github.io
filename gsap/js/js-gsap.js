window.addEventListener("load", function() {

// preloader function
  setTimeout(function() {
    var preloader = document.querySelector(".wrapperLoader");
    preloader.style.opacity = "0";
    preloader.style.zIndex = "0";
  }, 250);

// get elements
  const mins = document.querySelector(".minutes");
  const nineClock = document.querySelector(".nine-clock");
  const clockIcon = document.querySelector(".icon-clock");
  const hours = document.querySelector(".hours");
  const foto1 = document.querySelector(".foto1");
  const foto2 = document.querySelector(".foto2");
  const foto3 = document.querySelector(".foto3");
  const foto4 = document.querySelector(".foto4");
  const foto5 = document.querySelector(".foto5");
  const box = document.querySelector(".wrapp-box");
  const downtexts = document.querySelectorAll(".wrapp-box__down-text > span");
  const toptext = document.querySelectorAll(".topText p > span");
  const bottomtext = document.querySelectorAll(".bottomText p > span");
  const bottomtextDiv = document.querySelectorAll(".bottomText");
  const toptextp = document.querySelectorAll(".topText p");
  const bgText = document.querySelector(".wrapp-box__down-text");
  const firstDisplayText = document.querySelectorAll(
    ".wrapp-box-display-text > span"
  );
  const secondDisplayText = document.querySelectorAll(".foto1 p > span");
  const thirdDisplayText = document.querySelectorAll(".foto2 p > span");
  const fourDisplayText = document.querySelectorAll(".foto3 p > span");

// option obj for photo
  const option1 = {
    x: 150,
    y: -200,
    autoAlpha: 0,
    scale: 1.07,
    rotation: 15
  };
  const option2 = {
    x: -200,
    y: -300,
    autoAlpha: 0,
    scale: 1.2,
    rotation: -15
  };
  const option3 = {
    x: -200,
    y: 300,
    autoAlpha: 0,
    scale: 1.1,
    rotation: 15
  };
  const option4 = {
    x: 200,
    y: 200,
    autoAlpha: 0,
    scale: 1.2,
    rotation: -10
  };
  const option5 = {
    x: 300,
    y: 100,
    autoAlpha: 0,
    rotation: 20,
    scale: 1.2
  };

  let minutes = 10; // number minutes
// the function of clock logic
  function progressMin() {
    var min = mins.innerHTML;

    switch (true) {
      case min <= 59 && min != "00":
        {
          mins.innerHTML = minutes++;
        }
        break;
      case min > 59:
        {
          mins.innerHTML = "00";
          hours.innerHTML = "9";
        }
        break;
      default:
        return;
    }
  }
// time line start
  const timeline = new TimelineMax();

  timeline
    .from(mins, 1.5, {
      delay: 1.5,
      onUpdate: progressMin
    })
    .from(clockIcon, 0.8, {
      autoAlpha: 0,
      ease: Bounce.easeOut
    });
// line bg appeare
  timeline.from(bgText, 0.6, { x: 600 });

// text on first phono
  downtexts.forEach(item => {
    let randX = Math.random() * (600 - 400) + 400;
    let randY = Math.random() * (-200 + -100) + 100;
    if (item.innerHTML == " ") {
      item.style.width = "1rem";
    }
    timeline.from(item, 0.03, {
      autoAlpha: 0,
      x: randY,
      y: randX,
      ease: Power3.easeOut
    });
  });

// line bg hide    first photo
  timeline.to(bgText, 0.6, { x: -600 }, "+=1");

// text on first the display
  firstDisplayText.forEach(item => {
    timeline.to(item, 0.03, {
      autoAlpha: 1,
      ease: Power3.easeOut
    });
  });

// first photo get down
  timeline.from(foto1, 1.4, option1);

// text on second the display
  secondDisplayText.forEach(item => {
    timeline.to(item, 0.03, {
      autoAlpha: 1,
      ease: Power3.easeOut
    });
  });

// second photo get down
  timeline.from(foto2, 1.4, option2);

// text on third the display
  thirdDisplayText.forEach(item => {
    timeline.to(item, 0.03, {
      autoAlpha: 1,
      ease: Power3.easeOut
    });
  });

// show middle text one     down position
  toptext.forEach(item => {
    if (item.innerHTML == " ") {
      item.style.width = "1rem";
    }
    timeline.from(item, 0.05, {
      autoAlpha: 0,
      scale: 1.1,
      left: -25,
      x: -25
    });
  });

// third photo get down
  timeline.from(foto3, 1.5, option3);

// text on fourth the display
  fourDisplayText.forEach(item => {
    timeline.to(item, 0.03, {
      autoAlpha: 1,
      ease: Power3.easeOut
    });
  });

// fourth photo get down
  timeline.from(foto4, 1.5, option4);

// dispay right frame 
  timeline.to(bottomtextDiv, 0.5, { autoAlpha: 1 });

// appeare text on right frame
  bottomtext.forEach(item => {
    if (item.innerHTML == " ") {
      item.style.width = "1rem";
    }
    timeline.from(item, 0.05, {
      autoAlpha: 0,
      scale: 1.3,
      left: -25,
      x: -25
    });
  });
// fiveth photo get down
  timeline
    .from(foto5, 1, option5)
    .to([toptextp, bottomtext], 1, { autoAlpha: 0 }, "+=1"); // hide middle texts

// hide right frame
  timeline.to(bottomtextDiv, 1.5, { autoAlpha: 0, ease: Bounce.easeOut });

// round photos and remove
  timeline
    .to(box, 2.5, { rotation: 1080, ease: Back.easeIn }, "-=2")
    .to(foto1, 1.2, { x: 3000, y: 3000 }, "-=1")
    .to(foto2, 1.2, { x: -3000, y: 3000 }, "-=1")
    .to(foto3, 1.2, { x: 3000, y: -3000 }, "-=1")
    .to(foto4, 1.2, { x: -3000, y: -3000 }, "-=1")
    .to(foto5, 1.2, { x: 2000, y: 2000 }, "-=1")
    .to(box, 1.4, { rotation: 2360 }, "-=1")
    .to(box, 1.2, { x: -3000, y: 0 }, "-=1")
// hide time of clock
    .to(nineClock, 0.8, {
      autoAlpha: 0,
      ease: Bounce.easeOut
    });

  
// get buttons
  const btn1 = document.querySelector(".pause-anim");
  btn1.addEventListener("click", pauseAnim);
    
  const btn2 = document.querySelector(".restart-anim");
  btn2.addEventListener("click", restartAnim);

  const btn3 = document.querySelector(".reverse-anim");
  btn3.addEventListener("click", reverseAnim);

  const btn4 = document.querySelector(".resume-anim");
  btn4.addEventListener("click", resumeAnim);

  const btn5 = document.querySelector(".play-anim");
  btn5.addEventListener("click", playAnim);

// functions for buttons
  function restartAnim() {
    minutes = 10;
    mins.innerHTML = 10;
    hours.innerHTML = "8";
    timeline.restart();
  }
  function pauseAnim() {
    timeline.pause();
  }
  function reverseAnim() {
    timeline.reverse();
  }
  function resumeAnim() {
    timeline.resume();
  }
  function playAnim() {
    timeline.play();
  }
});
