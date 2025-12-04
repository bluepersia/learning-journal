import postsData from "./data.js";

function init(el, length) {
  const posts = postsData.slice(0, length);

  el.innerHTML = posts
    .map(
      (post) =>
        `
         <li class="posts__item">
              <article class="post-card">
                <h3 class="post-card__title">${post.title}</h3>
                <p class="post-card__description">
                  ${post.description}
                </p>
                <time datetime="${post.datetime}" class="post-card__date"
                  >${post.date}</time
                >
                <img
                  src="${post.image}"
                  alt="${post.alt}"
                  class="post-card__image"
                />
                <a href="#" class="post-card__link">Read more</a>
              </article>
            </li>`
    )
    .join("\n");
}

export default init;
