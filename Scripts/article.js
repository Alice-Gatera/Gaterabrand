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

var saveAddress = window.location.href;
saveAddress = saveAddress.split('/').reverse();
var id = saveAddress[0];



var articleTitle = document.querySelector('.article-title');
var content = document.querySelector('.content')
function renderBlog(doc){

var h2 = document.createElement("h2")
h2.textContent = doc.data().Title
articleTitle.appendChild(h2)
var p  = document.createElement("p")
p.textContent = doc.data().Content
content.appendChild(p)

 // to diplay an image on blog

 var uploadImage = document.querySelector('.upload-image')
 var img = document.createElement("img")
 img.setAttribute ('src', doc.data().Image)
 uploadImage.appendChild(img)
}



db.collection("Articles").doc(id).get().then(doc => {
    renderBlog(doc);

   })

var commentform = document.querySelector(".add-comment")
commentform.addEventListener("submit",(e) =>{
   e.preventDefault()
   db.collection("Comments").add({
       name: commentform.name.value,
       Comment:commentform.message.value,
       id: id,
       Date: new Date()
   })
 commentform.reset()
})
 var displaycomment = document.querySelector(".display-comment")
function renderComments(doc){
var indivudualcomments = document.createElement("div")
indivudualcomments.setAttribute("class","indivudual-comments")
var username = document.createElement("h4")
username.textContent = doc.data().name
var usercomment = document.createElement("p")
usercomment.textContent = doc.data().Comment
indivudualcomments.appendChild(username)
indivudualcomments.appendChild(usercomment)
displaycomment.appendChild(indivudualcomments)
}

db.collection("Comments").where("id","==",id).orderBy("Date").onSnapshot(snapshot => {
    var changes = snapshot.docChanges()
    changes.forEach(change=> {
        if(change.type == 'added'){
            renderComments(change.doc)
        } else if(change.type == 'removed'){
             let div = commentsSection.querySelector(`[data-id=${change.doc.id}]`)
             commentsSection.removeChild(div)
        }
    
    });
})
