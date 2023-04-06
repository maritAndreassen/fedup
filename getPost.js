const baseUrl = "https://fedup.maritstuderer.one/wp-json/wp/v2/posts";
const blogPosts = document.querySelector(".blogPost");

async function getPosts(url) {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();
    blogPosts.forEach((blogPost) => {
      createHTML(blogPost);
    });
  } catch (error) {
    console.log("An error has occured: ", error);
  }
}

getPosts(baseUrl);

function createHTML(blogPost) {
  blogPosts.innerHTML += `
<h2>${blogPost.title.rendered}</h2>
<p>${blogPost.content.rendered}</p>`;
}
