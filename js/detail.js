const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = parseInt(urlParams.get("id"));

const elArticleTitle = document.getElementById("articleTitle");
const elCategoryName = document.getElementById("categoryName");
const elPublishDate = document.getElementById("publishDate");
const elArticleContent = document.getElementById("articleContent");
const elArticleThumb = document.getElementById("articleThumb");

API.get(`articles/${id}`).then((res) => {
  const article = res.data.data;

  elCategoryName.innerText = article.category.name;
  elArticleTitle.innerText = article.title;
  elPublishDate.innerText = dayjs(article.publish_date).fromNow();
  elArticleContent.innerHTML = article.content;
  elArticleThumb.src = article.thumb;
});
