
const mainContent = document.querySelector('.main-content')
//realtime listener
db.collection('Comments').orderBy('Date').onSnapshot(snapshot => {
    let changes = snapshot.docChanges()
    changes.forEach(change => {
        if(change.type == 'added'){
            renderComment(change.doc)
        } else if(change.type == 'removed'){
             let li = mainContent.querySelector(`[data-id=${change.doc.id}]`)
             mainConten.removeChild(li)
        }
    })
})
 async function renderComment(doc){
    const articleTitle = await db.collection('Articles').doc(doc.data().id).get()
  articleTitle.forEach(doc =>{
      console.log(doc.data())
  })
    const blogId = doc.data().id
    console.log(blogId)
    const name = document.createElement('span')
    const comment =document.createElement('span')


}
