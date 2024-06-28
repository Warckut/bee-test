export default function initActivity() {
  const dropdowns = document.querySelectorAll('.menu');
  dropdowns.forEach((element) => {
    element.addEventListener('click', (e) => {
      const img = e.currentTarget.lastElementChild;
      const rotate = Number(img.style.transform.match(/\d+/) ?? 0);

      img.style.transform = `rotate(${rotate > 0 ? 0 : 180}deg)`;
      e.currentTarget.nextElementSibling.style.display = rotate > 0 ? 'none' : 'block';
    });
  });

  return () => {};
}
