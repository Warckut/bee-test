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

  result.push(addNonSignificantZero(hrs));
  result.push(addNonSignificantZero(mins));
  result.push(addNonSignificantZero(secs));

  return result.join(':');
}

function addNonSignificantZero(time) {
  return time < 10 ? '0' + time : time;
}
