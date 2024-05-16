import Dropdown from "../components/Dropdown/Dropdown";
import Post from "../components/Post/Post";
import Profile from "../components/Profile";
import { PostModel, posts } from "../models/Post";

class ActivityPage {
  container: HTMLElement;

  constructor() {
    this.container = document.createElement("main");
  }

  render() {
    this.container.className = "container mt-3 px-lg-0 pb-3 grid gap-6";
    const col1 = document.createElement("div");
    col1.className = "g-col-12 g-col-sm-7 g-col-lg-9 order-sm-1 order-2";

    posts.forEach((postData: PostModel, i) => {
      const post = new Post({ postData });
      const dropdown = new Dropdown({
        label: postData.heading,
        timeAgo: "56 minutes ago",
        child: post,
        isOpenDefault: i === 0,
        className: "mb-4",
      });
      col1.appendChild(dropdown.render());
    });

    const col2 = document.createElement("div");
    const profile = new Profile();
    col2.className = "g-col-12 g-col-sm-5 g-col-lg-3 order-sm-2 order-1";
    col2.appendChild(profile.render());

    this.container.innerHTML = "";
    this.container.appendChild(col1);
    this.container.appendChild(col2);

    return this.container;
  }
}

export default ActivityPage;
