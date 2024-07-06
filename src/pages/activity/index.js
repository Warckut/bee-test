function initActivity() {
  const dropdowns = document.querySelectorAll('.menu');
  dropdowns.forEach((element) => {
    element.addEventListener('click', (e) => {
      const img = e.currentTarget.lastElementChild;
      const content = e.currentTarget.nextElementSibling;
      if (img.classList.contains('up')) {
        img.classList.remove('up');
        content.style.display = 'none';
      } else {
        img.classList.add('up');
        content.style.display = 'block';
      }
    });
  });
}

const activityPage = { page: 'activity', init: initActivity };

export default activityPage;
