var Articles = document.querySelector(".articles");
function renderArticles(doc) {
  var img = document.createElement("img");
  img.setAttribute("src", doc.data().Image);
  var container = document.createElement("div");
  container.setAttribute("class", "articleImg");
  var div = document.createElement("div");
  div.setAttribute("class", "personalArticles");
  var span = document.createElement("span");
  span.textContent = doc.data().Title;
  var spanDate = document.createElement("span");
  var dateObj = doc.data().Date.toDate();
  var timeStamp = new Date(dateObj);
  var month = timeStamp.toLocaleString("en-GB", { month: "short" });
  var year = timeStamp.getFullYear();
  var date = timeStamp.toLocaleString("en-GB", { day: "2-digit" });
  var result = `${date}-${month}-${year}`;

  spanDate.textContent = result;
  div.appendChild(img);
  div.appendChild(container);

  var buttonEdit = document.createElement("button");
  buttonEdit.innerHTML = "Edit " + doc.data().Title;
  buttonEdit.onclick = function () {
    window.location.href = `../editArticle.html?id=${doc.id}`;
    console.log("doc", doc.id);
    return false;
  };
  container.appendChild(span);
  container.appendChild(spanDate);
  container.appendChild(buttonEdit);

  var link = document.createElement("a");
  link.setAttribute("class", "blogLinks");
  //   link.setAttribute("href", `../Htmls/article.html#/${doc.id}`);
  link.appendChild(div);
  Articles.insertAdjacentElement("beforeend", link);
}

db.collection("Articles")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderArticles(doc);
    });
  });
function deleteArticle() {}
