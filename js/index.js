import initPosts from "./posts.js";

const POSTS_COUNT = window.location.pathname.endsWith("index.html") ? 6 : 3;
initPosts(document.getElementById("posts-list"), POSTS_COUNT);
