import initActivity from './pages/activity/index.js';
import initMap from './pages/map/index.js';
import initTime from './pages/time/index.js';

const baseurl = '/bee-test';

const routes = {
  [`${baseurl}/activity`]: { page: 'activity', init: initActivity },
  [`${baseurl}/map`]: { page: 'map', init: initMap },
  [`${baseurl}/time`]: { page: 'time', init: initTime },
};

routes[`${baseurl}/`] = routes[`${baseurl}/activity`];

async function router() {
  let view = routes[location.pathname];
  const result = await fetch(`./src/pages/${view.page}/index.html`);
  const html = await result.text();
  document.getElementById('content').innerHTML = html;
  view.init();
}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  router();

  const navs = document.querySelectorAll('nav .nav a');
  navs.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      navs.forEach((element) => {
        element.style.backgroundColor = '';
      });
      const target = e.currentTarget;
      target.style.backgroundColor = 'var(--color-bg)';
      const page = target.getAttribute('href');
      history.pushState({}, '', baseurl + page);
      router();
    });
  });
});
