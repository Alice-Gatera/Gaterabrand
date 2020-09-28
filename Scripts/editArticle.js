var firebaseConfig = {
  apiKey: "AIzaSyB0JOybrzzCstQQhPhA0hyB8vTHa4lYxu4",
  authDomain: "gaterabrand.firebaseapp.com",
  databaseURL: "https://gaterabrand.firebaseio.com",
  projectId: "gaterabrand",
  storageBucket: "gaterabrand.appspot.com",
  messagingSenderId: "847513202370",
  appId: "1:847513202370:web:36e3c63b0ce5998fe3d55b",
  measurementId: "G-EPTP28G5XM",
};
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
var editArticle = document.querySelector(".article");
db.collection("Articles")
  .doc(blogId)
  .get()
  .then((res) => {
    console.log("Blog data for id", blogId, res.data());
    var blog = res.data();
    editArticle.title.value = blog.Title;
    editArticle.article.value = blog.Content;
    editArticle.submit.value = `Edit ${blog.Title.toUpperCase()}`;
  });
editArticle.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Clicked", editArticle.title.value, editArticle.article.value);
  db.collection("Articles")
    .doc(blogId)
    .update({
      Title: editArticle.title.value,
      Content: editArticle.article.value,
    })
    .then(() => {
      editArticle.reset();
      window.location.href = "./Admin/articleDashboard.html";
    });
});
