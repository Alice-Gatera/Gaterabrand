

var comment = document.querySelector('.commentDisplay')
function renderComment(doc){
  const commentBlock = document.createElement('div')
  commentBlock.setAttribute ('class','commentInfos')
  const blogId = document.createElement('span')
  blogId.textContent=doc.data().id
   const span  = document.createElement('span');
    span.textContent = doc.data().Title
 const personName = document.createElement('span');
    personName.textContent= doc.data().Name
 const commentContent = document.createElement('span')
    commentContent.textContent = doc.data().Comment
    
    commentBlock.appendChild(span);
   commentBlock.appendChild(blogId)
   commentBlock.appendChild(personName)
  commentBlock.appendChild(commentContent)
    comment.appendChild(commentBlock);
  
}

db.collection('Comments').get().then(snapshot =>{
    snapshot.docs.forEach(doc=>{
        renderComment(doc);
        
    })
})
  //Logout
  const logout = document.querySelector(".logout");
  logout.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      console.log('user logged out');
      window.location.replace("/index.html");
    })
  })
  //Handle Account Status
  firebase.auth().onAuthStateChanged(user => {
    if(!user) {
      window.location = '../login.html'; //If User is not logged in, redirect to login page
    }
  });

