export default function initTime(time) {
  const timer = document.getElementById('timer');

  updateTimer(timer, time);
  const interval = setInterval(updateTimer, 1000, timer, time);
  timer.setAttribute('data-interval-id', interval);
  return () => clearInterval(interval);
}

function updateTimer(timer, time) {
  const seconds = Math.floor((new Date().getTime() - time) / 1000);
  timer.innerText = formatTime(seconds);
}

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  const result = [hours, minutes, seconds].map((v) => String(v).padStart(2, '0'));

  return result.join(':');
}
