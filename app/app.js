function clock() {
  var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes();
  second = time.getSeconds();
  document.querySelectorAll(".clock")[0].innerHTML =
    harold(hours) + ":" + harold(minutes);

  function harold(standIn) {
    if (standIn < 10) {
      standIn = "0" + standIn;
    }
    return standIn;
  }
}
setInterval(clock, 1000);
function clock2() {
  var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes();
  second = time.getSeconds();
  document.querySelectorAll(".clock2")[0].innerHTML =
    harold(hours) + ":" + harold(minutes) + ":" + harold(second);

  function harold(standIn) {
    if (standIn < 10) {
      standIn = "0" + standIn;
    }
    return standIn;
  }
}
setInterval(clock2, 1000);

let taskbar = document.getElementById("start-icon");
let startmenu = document.getElementsByClassName("startmenu")[0];

taskbar.addEventListener("click", () => {
  console.log("clicked");
  if (startmenu.style.bottom == "50px") {
    startmenu.style.bottom = "-680px";
  } else {
    startmenu.style.bottom = "50px";
  }
});
let slider = document.getElementById("myRange");
let output = document.getElementById("value");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

let volume = document.getElementById("volume");
let volumepop = document.getElementsByClassName("speaker")[0];

volume.addEventListener("click", () => {
  console.log("clicked");
  if (volumepop.style.bottom == "52px") {
    volumepop.style.bottom = "-110px";
  } else {
    volumepop.style.bottom = "52px";
  }
});
let a = 0;
function myFunction() {
  if (a == 0) {
    document.body.style.backgroundImage = "url('/images/wp2.jpg')";
    document.getElementById("tb").style =
      "background: rgba(23, 25, 37, 0.74);  backdrop-filter: blur(4px);";
    document.getElementById("spk").style =
      "background: rgba(23, 25, 37, 0.74);  backdrop-filter: blur(4px);";
    document.getElementById("time-pop").style =
      "background: rgba(23, 25, 37, 0.74);  backdrop-filter: blur(4px);";
    document.getElementById("value").style = "color:white;";
    document.getElementById("realtek").style = "color:white;";
    document.getElementById("upbtn").style = "filter: invert(100%);";
    document.getElementById("vlmbtn").style = "filter: invert(100%);";
    document.getElementById("up-arrow").style = "filter: invert(100%);";
    document.getElementById("network").style = "filter: invert(100%);";
    document.getElementById("volume").style = "filter: invert(100%);";
    document.getElementById("langs").style = "filter: invert(100%);";
    document.getElementById("clock").style = "filter: invert(100%);";
    document.getElementById("notifications").style = "filter: invert(100%);";
    document.getElementById("search").style = "filter: invert(100%);";
    document.getElementById("clck").style = "filter: invert(100%);";

    a = a + 1;
    console.log("click", a);
  } else if (a == 1) {
    document.body.style.backgroundImage = "url('/images/wp3.jpg')";
    document.getElementById("tb").style =
      " background: rgba(224, 224, 224, 0.253);  backdrop-filter: blur(4px);";
    a = a + 1;
    console.log("click", a);
  } else if (a == 2) {
    a = a - 2;
    location.reload();
    console.log(a);
  }
}
let time = document.getElementById("clock");
let timepop = document.getElementsByClassName("time")[0];

time.addEventListener("click", () => {
  console.log("clicked");
  if (timepop.style.bottom == "52px") {
    timepop.style.bottom = "-110px";
  } else {
    timepop.style.bottom = "52px";
  }
});
