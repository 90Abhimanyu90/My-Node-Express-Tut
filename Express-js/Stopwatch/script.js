let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

const timeDisplay = document.getElementById("time");
const startPauseBtn = document.getElementById("startPause");
const lapBtn = document.getElementById("lap");
const resetBtn = document.getElementById("reset");
const lapsContainer = document.getElementById("laps");

function formatTime(ms) {
  const date = new Date(ms);
  const min = String(date.getUTCMinutes()).padStart(2, '0');
  const sec = String(date.getUTCSeconds()).padStart(2, '0');
  const msec = String(date.getUTCMilliseconds()).padStart(3, '0');
  return `${min}:${sec}.${msec}`;
}

function updateTime() {
  const current = Date.now();
  elapsedTime = current - startTime;
  timeDisplay.textContent = formatTime(elapsedTime);
}

startPauseBtn.addEventListener("click", () => {
  if (!running) {
    running = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
    startPauseBtn.textContent = "Pause";
  } else {
    running = false;
    clearInterval(timerInterval);
    startPauseBtn.textContent = "Start";
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  running = false;
  elapsedTime = 0;
  timeDisplay.textContent = "00:00:00.000";
  startPauseBtn.textContent = "Start";
  lapsContainer.innerHTML = "";
});

lapBtn.addEventListener("click", () => {
  if (!running) return;
  const lapTime = formatTime(elapsedTime);
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap ${lapsContainer.children.length + 1}: ${lapTime}`;
  lapsContainer.prepend(lapItem);
});
