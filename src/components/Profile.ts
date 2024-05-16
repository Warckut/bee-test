import photo from "../assets/images/photo.png";
import telegram from "../assets/images/telegram.svg";
import hhru from "../assets/images/hhru.svg";
import twitter from "../assets/images/twitter.svg";

class Profile {
  container: HTMLElement;

  constructor() {
    this.container = document.createElement("div");
  }

  render() {
    this.container.className =
      "d-flex flex-column align-items-center p-4 bg-c_white";
    this.container.innerHTML = `
      <img src="${photo}" class="rounded-circle mb-3" style="width: 120px; height: 120px; object-fit: cover; border-radius: 200px;" alt="photo" />
      <h4 class="fs-6">Hanna Dorman</h4>
      <span class="mb-2 text-c_second_tx">UX/UI designer</span>
      <div class="d-flex">
        <a href="#" class="m-1">
          <img src="${telegram}" alt="telegram"/>
        </a>
        <a href="#" class="m-1">
          <img src="${hhru}" alt="hh.ru"/>
        </a>
        <a href="#" class="m-1">
          <img src="${twitter}" alt="twitter"/>
        </a>
      </div>
    `;
    return this.container;
  }
}

export default Profile;
