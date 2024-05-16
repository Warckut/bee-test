import { PostModel } from "../../models/Post";
import postImage from "../../assets/images/post-image.png";
import viewedImage from "../../assets/images/viewed.svg";
import chatImage from "../../assets/images/chat.svg";
import "./_post.scss";

interface PostProps {
  postData: PostModel;
}

class Post {
  postData: PostModel;
  container: HTMLElement;
  constructor({ postData }: PostProps) {
    this.postData = postData;
    this.container = document.createElement("div");
  }

  render() {
    const { firstName, lastName } = this.postData.lastComment.author;
    this.container.className = "post p-4 pt-2 bg-c_white";
    this.container.innerHTML = `
      <img src=${postImage} alt="" class="w-100 mb-3"/>
      <div class="comment mb-2">
        <a href="#" class="d-block comment__author mb-3 text-decoration-none text-c_black">
          <span class="text-c_blue">${firstName} ${lastName}</span>
          commented:
        </a>
        <div class="border-2 border-start ps-2">
          <p class="mb-2">${this.postData.lastComment.text}</p>
          <span class="text-c_second_tx">– ${firstName}, ${this.postData.lastComment.time}</span>
        </div>
      </div>
      <div class="d-flex">
        <div class="m-2"><img src="${viewedImage}" alt="viewed" /> ${this.postData.viewed}</div>
        <div class="m-2"><img src="${chatImage}" alt="commented" /> ${this.postData.commented}</div>
      </div>
    `;
    return this.container;
  }
}

export default Post;
