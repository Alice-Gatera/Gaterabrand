
// //Logout
// const logout = document.querySelector(".logout");
// logout.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log('user logged out');
//   auth.signOut().then(() => {
//   //   console.log('user logged out');
//     window.location.replace("../login.htm");
//   })
// })
// //Handle Account Status
// firebase.auth().onAuthStateChanged(user => {
// if(!user) {
//   window.location.href = '../login.html'; //If User is not logged in, redirect to login page
// }
// });
var saveAddress = window.location.href;
saveAddress = saveAddress.split("/").reverse();
var id = saveAddress[0];

var articleTitle = document.querySelector(".article-title");
var content = document.querySelector(".content");
function renderBlog(doc) {
  var h2 = document.createElement("h2");
  h2.textContent = doc.data().Title;
  articleTitle.appendChild(h2);
  var p = document.createElement("p");
  p.textContent = doc.data().Content;
  content.appendChild(p);

  // to diplay an image on blog

  var uploadImage = document.querySelector(".upload-image");
  var img = document.createElement("img");
  img.setAttribute("src", doc.data().Image);
  uploadImage.appendChild(img);
}

db.collection("Articles")
  .doc(id)
  .get()
  .then((doc) => {
    renderBlog(doc);
  });
// add comment on article
var addComment = document.querySelector(".add-comment");
addComment.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("Comments").add({
    name: addComment.name.value,
    email:addComment.email.value,
    Comment: addComment.message.value,
    id: id,
    Date: new Date(),
  });
  addComment.reset();
});
var displaycomment = document.querySelector(".display-comment");

function renderComments(doc) {
  var indivudualcomments = document.createElement("div");
  indivudualcomments.setAttribute("class", "indivudual-comments");
  var username = document.createElement("h4");
  username.textContent = doc.data().name;
  var usercomment = document.createElement("p");
  usercomment.textContent = doc.data().Comment;
  var useremail =document.createElement('span')
  useremail.textContent=doc.data().email
  indivudualcomments.appendChild(username);
  indivudualcomments.appendChild(useremail)
  indivudualcomments.appendChild(usercomment);
  displaycomment.insertAdjacentElement("afterbegin", indivudualcomments);
}

db.collection("Comments")
  .where("id", "==", id)
  .orderBy("Date", "desc")
  .onSnapshot((snapshot) => {
    var changes = snapshot.docChanges();
    changes.forEach((change) => {
      if (change.type == "added") {
        renderComments(change.doc);
      } else if (change.type == "removed") {
        let div = commentsSection.querySelector(`[data-id=${change.doc.id}]`);
        commentsSection.removeChild(div);
      }
    });
  });
