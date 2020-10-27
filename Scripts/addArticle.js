// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const db = firebase.firestore();
const ref = firebase.storage().ref();
let imageLink;

//upload an image
const articleImage = document.querySelector("#article-image");
articleImage.addEventListener("change", () => {
  const file = articleImage.files[0];
  const name = file.name;

  const metadata = {
    contentType: file.type,
  };
  const upload = ref.child(name).put(file, metadata);
  upload
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .then((url) => {
      imageLink = url;
    });
});

const newArticle = document.querySelector(".new-article");
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
