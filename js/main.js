document
  .getElementById("news-upload-form")
  .addEventListener("submit", function (e) {
    const title = document.getElementById("article-title").value;
    const content = document.getElementById("article-content").value;
    const image = document.getElementById("article-image").files.length;

    if (!title || !content || image === 0) {
      e.preventDefault();
      alert("All fields must be filled out, including the image upload!");
    }
  });

document
  .getElementById("submit-comment")
  .addEventListener("click", function () {
    const name = document.getElementById("comment-name").value;
    const commentText = document.getElementById("comment-text").value;

    if (!name || !commentText) {
      alert("Please fill out both fields before submitting.");
      return;
    }

    // Create and display new comment (mock behavior for now)
    const commentList = document.querySelector(".comment-list");
    const newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.innerHTML = `<p class="author">${name}</p><p class="text">${commentText}</p>`;
    commentList.appendChild(newComment);

    // Clear the form
    document.getElementById("comment-name").value = "";
    document.getElementById("comment-text").value = "";
  });
