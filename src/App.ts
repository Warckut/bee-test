import Header from "./components/Header/Header";
import ActivityPage from "./pages/ActivityPage";
import Four04 from "./pages/Four04";
import MapPage from "./pages/MapPage";
import TimePage from "./pages/TimePage";

const routes: Record<string, { linkLabel: string; component: any }> = {
  "/activity": {
    linkLabel: "Activity",
    component: ActivityPage,
  },
  "/map": {
    linkLabel: "Map",
    component: MapPage,
  },
  "/time": {
    linkLabel: "Time",
    component: TimePage,
  },
};

class Router {
  static container = document.getElementById("root")!;
  currentPage: string;

  constructor() {
    let { pathname } = window.location;
    if (pathname === "/") pathname = "/activity";

    window.history.pushState({}, "", pathname);
    this.currentPage = pathname;
  }

  navigate(routeName: string) {
    const pathname = "/" + routeName;
    window.history.pushState({}, "", pathname);
    this.currentPage = pathname;
    this.render();
  }

  render() {
    const header = new Header({
      currPage: this.currentPage.slice(1),
      onNavigate: this.navigate.bind(this),
    });

    if (!routes[this.currentPage]) {
      Router.container.innerHTML = "";
      const four04 = new Four04();
      Router.container.appendChild(four04.render());
      return;
    }

    const page = new routes[this.currentPage].component();

    Router.container.innerHTML = "";
    Router.container.appendChild(header.render());
    Router.container.appendChild(page.render());
  }
}

export default Router;
