export default function initMap() {
  const timeout = setTimeout(() => {
    loadMap();
  }, 1000);

  return () => {
    clearTimeout(timeout);
  };А
}

function loadMap() {
  ymaps3.ready
    .then(() => {
      document.getElementById('slider').style.display = 'none';
      const LOCATION = {
        center: [37.623082, 55.75254],
        zoom: 9,
      };

      const { YMap, YMapDefaultSchemeLayer, YMapMarker, YMapDefaultFeaturesLayer } = ymaps3;
      const map = new YMap(document.getElementById('map-container'), {
        location: LOCATION,
      });

      map.addChild(new YMapDefaultFeaturesLayer());
      map.addChild(new YMapDefaultSchemeLayer({}));
      map.addChild(
        new YMapMarker(
          {
            coordinates: [37.623082, 55.75254],
          },
          marker()
        )
      );
    })
    .catch((err) => {
      console.error(err);
    });
}

const marker = () => {
  const element = document.createElement('div');
  element.style.width = '1px';
  element.style.height = '1px';
  element.style.position = 'relative';

  const img = document.createElement('img');
  img.src = './images/marker.svg';
  img.style.width = '30px';
  img.style.height = '30px';
  img.style.position = 'absolute';
  img.style.left = '-15px';
  img.style.top = '-30px';

  element.append(img);
  return element;
};
