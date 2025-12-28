let recording = false;

function start() {
  recording = true;
  speak("Recording started");
}

function stop() {
  recording = false;
  speak("Recording stopped");
}

window.addEventListener("deviceorientation", e => {
  if (!recording) return;

  fetch("http://172.20.10.2:5000/add", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      yaw: e.alpha,
      pitch: e.beta,
      roll: e.gamma,
      time: Date.now()
    })
  });
});

function speak(text) {
  let msg = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(msg);
}
