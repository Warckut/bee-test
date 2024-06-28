export default function initTime(time) {
  updateTimer(time);
  const interval = setInterval(updateTimer, 1000, time);
  return () => clearInterval(interval);
}

function updateTimer(time) {
  const seconds = Math.floor((new Date().getTime() - time) / 1000);
  document.getElementById('timer').innerText = formatTime(seconds);
}

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const result = [];

  result.push(hrs < 10 ? '0' + hrs : hrs);
  result.push(mins < 10 ? '0' + mins : mins);
  result.push(secs < 10 ? '0' + secs : secs);

  return result.join(':');
}