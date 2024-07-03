import initActivity from './pages/activity/index.js';
import initMap from './pages/map/index.js';
import initTime from './pages/time/index.js';

window.addEventListener('popstate', router);
document.addEventListener('DOMContentLoaded', init);

const baseurl = '/bee-test';
const startTime = new Date().getTime();

const routes = {
  [`${baseurl}/activity`]: { page: 'activity', init: initActivity },
  [`${baseurl}/map`]: { page: 'map', init: initMap },
  [`${baseurl}/time`]: { page: 'time', init: () => initTime(startTime) },
};

async function router() {
  let view = routes[location.pathname];
  const result = await fetch(`./src/pages/${view.page}/index.html`);
  const html = await result.text();
  document.getElementById('content').innerHTML = html;
  view.init();
}

function init() {
  history.pushState({}, '', baseurl + '/activity');
  router();

  const navs = document.querySelectorAll('#nav a');
  navs.forEach((element) => {
    element.addEventListener('click', handleChangeTab);
  });
}

function handleChangeTab(e) {
  e.preventDefault();
  const activeTab = document.querySelector('#nav a.active-tab');
  const activePage = activeTab.getAttribute('href');
  const nextTab = e.currentTarget;

  if (activePage === '/time') {
    const interval = parseInt(document.getElementById('timer').dataset.intervalId);
    clearInterval(interval);
  }

  changeActiveTabe(activeTab, nextTab);

  const page = nextTab.getAttribute('href');
  history.pushState({}, '', baseurl + page);
  router();
}

function changeActiveTabe(prev, next) {
  prev.classList.remove('active-tab');
  next.classList.add('active-tab');
}
