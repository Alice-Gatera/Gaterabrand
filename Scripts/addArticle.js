
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

var newArticle = document.querySelector(".new-article");
newArticle.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("Articles").add({
    Title: newArticle.title.value,
    Content: newArticle.article.value,
    Date: new Date(),
    Image: imageLink,
  });
  newArticle.reset();
});
