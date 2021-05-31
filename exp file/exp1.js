const voice2text = document.querySelector(".voice2text");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

let record = recorder.start();

$(document).ready(function () {
  setInterval(function () {
    let record = recorder.start();
    let audio = new Audio("beep.mp3");
    record;
    audio.play();
    audio.volume = 0.2;
  }, 6000);
  // Landing Page message
  const speech = new SpeechSynthesisUtterance();
  speech.text = "Boss, I'm Ready At your Service. Lets Crack some ideas today";
  speech.volume = 1;
  speech.rate = 0.9;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
});

// load.addEventListener("load", () => {
//   record;
// });

recorder.onresult = (e) => {
  const speech = new SpeechSynthesisUtterance();
  console.log(e);

  const resultIndex = e.resultIndex;
  const transcript = e.results[resultIndex][0].transcript;
  const message = transcript;
  console.log(`${transcript}`);
  var element = document.getElementById("container");

  element.appendChild(addHumanText(transcript));

  botVoice(transcript);
};

// setTimeout(function () {
//   window.location.reload();
// }, 7000);  now not required

function addHumanText(text) {
  const chatContainer = document.createElement("div"); //creating html in js
  chatContainer.classList.add("chat-container");

  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");

  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);

  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");

  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");

  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);

  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
  const speech = new SpeechSynthesisUtterance();
  let dn = document.querySelector("#container");

  speech.text = "Not coded for this input sir ";

  if (message.includes("hi")) {
    speech.text = " Hey Boss,Chat-Bot activated. What are we going to do Sir?";
  }
  if (message.includes("hai")) {
    speech.text =
      " Hey Boss,Chat-Bot activated. What are we going to do today Sir?";
  }
  if (message.includes("display chat")) {
    dn.style.display = "block";
    speech.text = "Chat display is open";
  } else {
    dn.style.display = "none";
  }
  if (message.includes("close chat")) {
    dn.style.display = "none";
    speech.text = "Chat display closed";
  }
  if (message.includes("date")) {
    speech.text = `Today is ${date}th  ${month} and its ${day}.`;
  }

  if (message.includes(`my name is `)) {
    var myArr = message;
    let userName = myArr.split(" ");
    speech.text = `Hey ${userName[3]}`;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  // window.speechSynthesis.speak(speech);

  var element = document.getElementById("container");
  element.appendChild(addBotText(speech.text));
}

// function myFunction() {
//  console.log("hello")
// }

let myDate = new Date();
let min = myDate.getMinutes();
let date = myDate.getDate();
let year = myDate.getFullYear();

const h = new Array();
h[0] = "12";
h[1] = "1";
h[2] = "2";
h[3] = "3";
h[4] = "4";
h[5] = "5";
h[6] = "6";
h[7] = "7";
h[8] = "8";
h[9] = "9";
h[10] = "10";
h[11] = "11";
h[12] = "12";
h[13] = "1"; // Success...... yooo
h[14] = "2";
h[15] = "3";
h[16] = "4";
h[17] = "5";
h[18] = "6";
h[19] = "7";
h[20] = "8";
h[21] = "9";
h[22] = "10";
h[23] = "11";
h[24] = "12";
let hrs = h[myDate.getHours()];

const m = new Array();
m[0] = "January";
m[1] = "February";
m[2] = "March";
m[3] = "April";
m[4] = "May";
m[5] = "June";
m[6] = "July"; // success..... - W3school -
m[7] = "August";
m[8] = "September";
m[9] = "October";
m[10] = "November";
m[11] = "December";
let month = m[myDate.getMonth()];

const d = new Array();
d[0] = "Sunday";
d[1] = "Monday"; // Success .... yoo                      but w3 school has some stuff- try - https://www.w3schools.com/jsref/jsref_todatestring.asp
d[2] = "Tuesday";
d[3] = "Wednesday";
d[4] = "Thursday";
d[5] = "Friday";
d[6] = "Saturday";
let day = d[myDate.getDay()];

