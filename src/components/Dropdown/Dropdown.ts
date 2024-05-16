import timeImg from "../../assets/images/time.svg";
import "./_dropdown.scss";

interface DropdownProps {
  label: string;
  timeAgo: string;
  isOpenDefault: boolean;
  className?: string;
  child: any;
}

class Dropdown {
  container: HTMLElement;
  isOpen: boolean;
  child: { render: () => HTMLElement };
  label: string;
  timeAgo: string;

  constructor({
    label,
    timeAgo,
    child,
    isOpenDefault,
    className,
  }: DropdownProps) {
    this.isOpen = isOpenDefault;
    this.label = label;
    this.timeAgo = timeAgo;
    this.child = child;
    this.container = document.createElement("div");
    if (className) this.container.className = className;
  }

  render() {
    const menu = document.createElement("div");
    menu.className = "menu d-flex align-items-center px-4 p-3 bg-c_white";
    if (this.isOpen) {
      menu.className += " active";
    }
    menu.style.cursor = "pointer";
    menu.addEventListener("click", () => {
      this.isOpen = !this.isOpen;
      this.render();
    });
    menu.innerHTML = `
      <div class="me-auto fs-6"<span>${this.label}</span></div>
      <img src="${timeImg}" alt="time ago" class="me-2"/>
      <div class="me-4"><span>${this.timeAgo}</span></div>
    `;

    this.container.innerHTML = "";
    this.container.appendChild(menu);
    if (this.isOpen) {
      this.container.appendChild(this.child.render());
    }
    return this.container;
  }
}

export default Dropdown;
