import Dropdown from "../components/Dropdown/Dropdown";
import type { YMapLocationRequest } from "ymaps3";

class MapPage {
  container: HTMLElement;
  mapContainer: HTMLElement;
  isLoading: boolean;

  constructor() {
    this.container = document.createElement("main");
    this.mapContainer = document.createElement("div");
    this.mapContainer.id = "map-container";
    this.isLoading = true;
    setTimeout(() => this.init(), 500);
  }

  init() {
    ymaps3.ready
      .then(() => {
        const LOCATION: YMapLocationRequest = {
          center: [37.623082, 55.75254],
          zoom: 9,
        };
        this.mapContainer.innerHTML = ``;
        const { YMap, YMapDefaultSchemeLayer } = ymaps3;
        const map = new YMap(document.getElementById("map-container")!, {
          location: LOCATION,
        });
        this.isLoading = false;
        map.addChild(new YMapDefaultSchemeLayer({}));
      })
      .catch(() => {
        this.isLoading = false;
      });
  }

  render() {
    this.mapContainer.className = "w-100 px-4 pb-4 bg-c_white";
    this.mapContainer.style.height = "500px";
    this.mapContainer.innerHTML = `
      <div class="w-100 h-100 d-flex align-items-center justify-content-center">
        <div class="spinner-border mx-auto" style="width: 4rem; height: 4rem;" role="status">
      </div> 
    `;
    const dropdown = new Dropdown({
      label: "Basic map",
      timeAgo: "",
      child: { render: () => this.mapContainer },
      isOpenDefault: true,
      className: "container",
    });

    return this.container.appendChild(dropdown.render());
  }
}

export default MapPage;
