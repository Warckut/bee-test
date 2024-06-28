import initActivity from './pages/activity/index.js';
import initMap from './pages/map/index.js';
import initTime from './pages/time/index.js';

const startTime = new Date().getTime();

const dispatch = {
  activity: () => initActivity(),
  map: () => initMap(),
  time: () => initTime(startTime),
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
  let clear;

  const navs = document.querySelectorAll('nav .nav a');
  navs.forEach((element) => {
    element.addEventListener('click', (e) => {
      navs.forEach((element) => {
        element.style.backgroundColor = '';
      });
      e.currentTarget.style.backgroundColor = 'var(--color-bg)';

      const page = e.currentTarget.getAttribute('href').slice(1);
      var content = document.getElementById('content');

      requestPage(page)
        .then((html) => {
          clear();
          content.innerHTML = html;
          clear = dispatch[page]();
        })
        .catch(console.error);
    });

    requestPage('activity')
      .then((html) => {
        content.innerHTML = html;
        clear = dispatch['activity']();
      })
      .catch(console.error);
  });
});
