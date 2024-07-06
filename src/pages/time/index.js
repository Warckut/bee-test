function initTime() {
  const timer = document.getElementById('timer');

  updateTimer(timer, START_TIME);
  const interval = setInterval(updateTimer, 1000, timer, START_TIME);

  window.addEventListener('popstate', () => {
    if (location.pathname !== `${window.BASEURL}/time`) {
      clearInterval(interval);
    }
  });
}

function updateTimer(timer, time) {
  const seconds = Math.floor((new Date().getTime() - time) / 1000);
  timer.innerText = formatTime(seconds);
}

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  return [hours, minutes, seconds].map((value) => String(value).padStart(2, '0')).join(':');
}

const timePage = {
  page: 'time',
  init: initTime,
};

export default timePage;
