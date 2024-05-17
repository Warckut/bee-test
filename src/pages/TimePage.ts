import Dropdown from "../components/Dropdown/Dropdown";

interface timePageProps {
  startTime: number;
}

class TimePage {
  container: HTMLElement;
  timer: HTMLElement;
  time: number;

  constructor({ startTime }: timePageProps) {
    this.container = document.createElement("main");
    this.timer = document.createElement("div");
    this.timer.style.height = "30px";
    this.time = startTime;
    this.start();
  }

  formatTime(seconds: number) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    const result = [];

    result.push(hrs < 10 ? "0" + hrs : hrs);
    result.push(mins < 10 ? "0" + mins : mins);
    result.push(secs < 10 ? "0" + secs : secs);

    return result.join(":");
  }

  start() {
    const seconds = Math.floor((new Date().getTime() - this.time) / 1000);
    this.renderTime(seconds);
    setInterval(() => {
      const seconds = Math.floor((new Date().getTime() - this.time) / 1000);
      this.renderTime(seconds);
    }, 1000);
  }

  renderTime(seconds: number) {
    const timeStr = this.formatTime(seconds);
    this.timer.innerHTML = timeStr;
  }

  render() {
    this.timer.className = "w-100 px-4 pb-4 bg-c_white";
    const dropdown = new Dropdown({
      label: "Timer",
      timeAgo: "",
      child: { render: () => this.timer },
      isOpenDefault: true,
      className: "container",
    });

    this.container.appendChild(dropdown.render());
    return this.container;
  }
}

export default TimePage;
