
 
  //Logout
  const logout = document.querySelector(".logout");
  logout.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      console.log('user logged out');
      window.location.replace("../login.htm");
    })
  })
//Handle Account Status
firebase.auth().onAuthStateChanged(user => {
  if(!user) {
    window.location.href = '../login.html'; //If User is not logged in, redirect to login page
  }
});




var Articles = document.querySelector(".articles");
function renderArticles(doc) {
  var img = document.createElement("img");
  img.setAttribute("src", doc.data().Image);
  var container = document.createElement("div");
  container.setAttribute("class", "articleImg");
  var div = document.createElement("div");
  div.setAttribute("class", "personalArticles");
  div.setAttribute("id", `${doc.id}`);
  //var span = document.createElement("span");
  //span.textContent = doc.data().Title;
  var spanDate = document.createElement("span");
  var dateObj = doc.data().Date.toDate();
  var timeStamp = new Date(dateObj);
  var month = timeStamp.toLocaleString("en-GB", { month: "short" });
  var year = timeStamp.getFullYear();
  var date = timeStamp.toLocaleString("en-GB", { day: "2-digit" });
  var result = `${date}-${month}-${year}`;
  var articleId = document.createElement("small");
  var id = document.createTextNode(doc.id);
  var blogId = div.getAttribute("id");
  var link = document.createElement("a");
  link.textContent = doc.data().Title;
  link.setAttribute("href", `../Htmls/singleArticle.html#/${blogId}`);

  spanDate.textContent = result;
  div.appendChild(img);
  div.appendChild(container);
  // link.appendChild(span);
  // div.appendChild(link);
  // articleId.appendChild(id);

 
  var buttonEdit = document.createElement("button");
  buttonEdit.setAttribute("class","modify")
  var buttonDelete = document.createElement("button");
buttonDelete.setAttribute('class',"modify")
  buttonEdit.innerHTML = `Edit`;

  buttonEdit.onclick = function () {
    window.location.href = `../editArticle.html?id=${doc.id}`;
    console.log("doc", doc.id);
    return false;
  };
  buttonDelete.innerHTML = `Delete`;

  var divActions = document.createElement("div")
  divActions.setAttribute('class','actionBlock')

  divActions.appendChild(buttonEdit)
  divActions.appendChild(buttonDelete)
  container.appendChild(link);
  container.appendChild(spanDate);
  container.appendChild(articleId);
container.appendChild(divActions);

  var link = document.createElement("a");
  link.setAttribute("class", "blogLinks");
  //   link.setAttribute("href", `../Htmls/article.html#/${doc.id}`);
  link.appendChild(div);
  Articles.insertAdjacentElement("beforeend", link);

  if (buttonDelete !== null) {
    buttonDelete.addEventListener("click", async () => {
      db.collection("Articles")
        .doc(blogId)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
          location.reload();
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    });
  }
}

db.collection("Articles")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderArticles(doc);
    });
  });


