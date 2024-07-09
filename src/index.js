import activity from './pages/activity/index.js';
import map from './pages/map/index.js';
import time from './pages/time/index.js';

window.addEventListener('popstate', router);
document.addEventListener('DOMContentLoaded', init);

const BASEURL = '/bee-test';
const START_TIME = new Date().getTime();

const props = {
  'time': { startTime: START_TIME },
  'activity': {},
  'map': {},
}

const routes = {
  [`${BASEURL}/`]: activity,
  [`${BASEURL}/activity`]: activity,
  [`${BASEURL}/map`]: map,
  [`${BASEURL}/time`]: time,
};

async function router() {
  const page = routes[location.pathname];
  if (!page) {
    document.getElementById('contnet').innerHTML(`
      <h1 style="width: 100%; text-align: center;">404 Not found</h1>
    `);
    return;
  }

  changeActiveTab(page.name);

  const result = await fetch(`./src/pages/${page.name}/index.html`);
  const html = await result.text();
  document.getElementById('content').innerHTML = html;
  page.init(props[page.name]);
}

async function init() {
  const root = document.getElementById('root');
  const header = await fetchHeader();
  root.insertBefore(header, root.firstChild);
  router();

  document.getElementById('back').addEventListener('click', () => {
    history.back();
  });

  const navs = document.querySelectorAll('#nav a');
  navs.forEach((element) => {
    element.addEventListener('click', handleChangeTab);
  });
}

async function fetchHeader() {
  const header = document.createElement('div');

  const result = await fetch(`./src/header.html`);
  header.innerHTML = await result.text();
  return header;
}

function handleChangeTab(e) {
  e.preventDefault();
  const nextTab = e.currentTarget;
  const page = nextTab.getAttribute('href');
  history.pushState({}, '', BASEURL + page);
  router();
}

function changeActiveTab(page) {
  const activetab = document.querySelector('#nav a.active-tab');
  const nextTab = document.getElementById(page);

  activetab.classList.remove('active-tab');
  nextTab.classList.add('active-tab');
}
