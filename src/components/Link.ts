import activity from "../assets/images/activity.svg";
import map from "../assets/images/map.svg";
import time from "../assets/images/time.svg";

const dispatch = {
  activity,
  map,
  time,
};

interface LinkProps {
  name: "activity" | "map" | "time";
  isActive: boolean;
  onClick: (e: any) => void;
}

class Link {
  container: HTMLLIElement;

  constructor({ name, isActive, onClick }: LinkProps) {
    this.container = document.createElement("li");
    const ancor = document.createElement("a");
    ancor.className = "nav-link text-c_black d-flex align-items-center";
    if (isActive) ancor.className += " bg-c_bg";

    ancor.innerHTML = `
      <img src="${dispatch[name]}" alt="${name}" class="me-2"/> 
      ${name[0].toLocaleUpperCase() + name.slice(1)}
    `;

    ancor.href = name;
    ancor.addEventListener("click", (e) => {
      e.preventDefault();
      onClick(e);
    });

    this.container.appendChild(ancor);
  }

  render() {
    return this.container;
  }
}

export default Link;
