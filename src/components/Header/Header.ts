import Link from "../Link";
import statistics from "../../assets/images/statistics.svg";
import invoices from "../../assets/images/invoices.svg";
import schedule from "../../assets/images/schedule.svg";
import "./_header.scss";

interface HeaderProps {
  currPage: string;
  onNavigate: (path: string) => void;
}

class Header {
  container: HTMLElement;
  links: Link[];
  constructor({ currPage, onNavigate }: HeaderProps) {
    this.container = document.createElement("header");
    this.links = ["activity", "map", "time"].map(
      (name: any) =>
        new Link({
          name,
          isActive: currPage === name,
          onClick: () => {
            onNavigate(name);
          },
        })
    );
  }

  renderPanel() {
    const panel = document.createElement("div");
    panel.className = "header border-bottom bg-c_white";
    panel.innerHTML = `
      <div class="container d-flex flex-wrap justify-content-center">
        <a href="#" class="header__back d-flex fs-5 align-items-center text-c_black mt-3 my-lg-0 me-md-auto link-body-emphasis fw-semibold text-decoration-none">
          User pages<span class="fw-normal ms-1">- Profile</span>
        </a>
        <ul class="nav col-12 col-lg-auto my-2 justify-content-center align-items-center my-md-0 text-small">
          <li>
            <a href="#" class="nav-link text-c_black">
              <img src="${statistics}" alt="statistics" class="bi d-block mx-auto"/>
              Statistics
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-c_black">
              <img src="${invoices}" alt="invoices" class="bi d-block mx-auto"/>
              Invoices
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-c_black">
              <img src="${schedule}" alt="schedule" class="bi d-block mx-auto"/>
              Schedule
            </a>
          </li>
        </ul>
      </div>
    `;
    this.container.appendChild(panel);
  }

  renderNavigation() {
    const nav = document.createElement("nav");
    nav.className = "bg-c_bg2";
    const ul = document.createElement("ul");
    ul.className =
      "nav container col-12 col-lg-auto justify-content-center justify-content-md-start text-small";
    ul.append(...this.links.map((link) => link.render()));
    nav.appendChild(ul);
    this.container.appendChild(nav);
  }

  render() {
    this.container.className = "border-bottom mb-4";
    this.renderPanel();
    this.renderNavigation();
    return this.container;
  }
}

export default Header;
