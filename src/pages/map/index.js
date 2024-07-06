const GEO_POINT = [37.64, 55.76];
const PLACE = [37.609218, 55.753559];

function initMap() {
  const map = new YMaps.Map(document.getElementById('map-container'));
  map.setCenter(new YMaps.GeoPoint(...GEO_POINT), 10);

  const placemark = new YMaps.Placemark(new YMaps.GeoPoint(...PLACE));

  placemark.name = 'Москва';
  placemark.description = 'Столица Российской Федерации';

  map.addOverlay(placemark);
}

const mapPage = { page: 'map', init: initMap };

export default mapPage;
