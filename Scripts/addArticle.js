var firebaseConfig = {
    apiKey: "AIzaSyB0JOybrzzCstQQhPhA0hyB8vTHa4lYxu4",
    authDomain: "gaterabrand.firebaseapp.com",
    databaseURL: "https://gaterabrand.firebaseio.com",
    projectId: "gaterabrand",
    storageBucket: "gaterabrand.appspot.com",
    messagingSenderId: "847513202370",
    appId: "1:847513202370:web:36e3c63b0ce5998fe3d55b",
    measurementId: "G-EPTP28G5XM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
var db = firebase.firestore()
var ref = firebase.storage().ref()
var imageLink 

//upload an image
var articleImage = document.querySelector('#article-image');
articleImage.addEventListener('change',() =>{
    var file = articleImage.files[0]
    const name = file.name

    const metadata = {
        contentType : file.type
    }
     var upload = ref.child(name).put(file, metadata)
     upload.then( snapshot  => snapshot.ref.getDownloadURL())
     .then(url =>{
         imageLink  = url
       
     })
})

var newArticle = document.querySelector('.new-article');
newArticle.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection('Articles').add({
        Title: newArticle.title.value,
        Content: newArticle.article.value,
        Date: new Date(),
        Image:imageLink
    })
    newArticle.reset()
})
