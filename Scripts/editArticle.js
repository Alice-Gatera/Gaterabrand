
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
var ref = firebase.storage().ref();
var imageLink;

//upload an image
var articleImage = document.querySelector("#article-image");
articleImage.addEventListener("change", () => {
  var file = articleImage.files[0];
  const name = file.name;

  const metadata = {
    contentType: file.type,
  };
  var upload = ref.child(name).put(file, metadata);
  upload
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .then((url) => {
      imageLink = url;
    });
});

var query = window.location.search.substring(1);
var vars = query.split("=");
var blogId = vars[1];
console.log("Blog id", blogId);
var editForm = document.querySelector(".article");
var deleteForm = document.querySelector(".article");
db.collection("Articles")
  .doc(blogId)
  .get()
  .then((res) => {
    console.log("Blog data for id", blogId, res.data());
    var blog = res.data();
    editForm.title.value = blog.Title;
    editForm.article.value = blog.Content;
    // editArticle.submit.value = `Edit`;
    // deleteArticle.submit.value = `Delete`;
  });
editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("Articles")
    .doc(blogId)
    .update({
      Title: editForm.title.value,
      Content: editForm.article.value,
    })
    .then(() => {
     editForm.reset();
      window.location.href = "./Admin/articleDashboard.html";
    }).catch((error)=>{
      console.log('============>',error);
    });
});

