class ActivityPage {
  container: HTMLElement;

  constructor() {
    this.container = document.createElement("main");
  }

  render() {
    const h1 = document.createElement("h1");
    h1.innerText = "Activity Page";
    this.container.innerHTML = "";
    this.container.appendChild(h1);
    return this.container;
  }
}

export default ActivityPage;
