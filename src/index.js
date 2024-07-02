import initActivity from './pages/activity/index.js';
import initMap from './pages/map/index.js';
import initTime from './pages/time/index.js';

let clear = () => {};

const baseurl = '/bee-test';

const routes = {
  '/': () => redirect('/activity'),
  '/activity': () => goTo('activity'),
  '/map': () => goTo('map'),
  '/time': () => goTo('time'),
};

routes[document.location.pathname]();
const startTime = new Date().getTime();

function redirect(to) {
  history.pushState({}, '', to);
  routes[to]();
}

function goTo(page) {
  var content = document.getElementById('content');
  requestPage(page)
    .then((html) => {
      console.log(page)
      clear();
      history.pushState({}, '', baseurl + page);
      content.innerHTML = html;
      clear = dispatch[page]();
    })
    .catch(console.error);
}

const dispatch = {
  'activity': () => initActivity(),
  'map': () => initMap(),
  'time': () => initTime(startTime),
};

function requestPage(page) {
  return new Promise((res, rej) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `./src/pages/${page}/index.html`);
    xhr.onload = () => res(xhr.responseText);
    xhr.onerror = rej;
    xhr.send();
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const navs = document.querySelectorAll('nav .nav a');
  navs.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      navs.forEach((element) => {
        element.style.backgroundColor = '';
      });
      e.currentTarget.style.backgroundColor = 'var(--color-bg)';
      const page = e.currentTarget.getAttribute('href').slice(1);
      goTo(page);
    });
  });
});
