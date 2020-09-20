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
var Articles = document.querySelector('.articles')
function renderArticles(doc){
    var div = document.createElement('div');
    div.setAttribute('class','personalArticles');
    var span  = document.createElement('span');
    span.textContent = doc.data().Title
    var spanDate = document.createElement('span');
    var dateObj = doc.data().Date.toDate();
    var timeStamp =new Date(dateObj); 
    var month =  timeStamp.toLocaleString('en-GB',{month:"short"})
    var year = timeStamp.getFullYear()
   var date = timeStamp.toLocaleString('en-GB', {day:"2-digit"});
   var result = `${date}-${month}-${year}`
    spanDate.textContent = result;
    div.appendChild(span);
    div.appendChild(spanDate);
    var link = document.createElement('a');
    link.setAttribute('href',`../Htmls/article.html#/${doc.id}`);
    link.appendChild(div);
    Articles.insertAdjacentElement('beforeend',link);
}

db.collection('Articles').get().then(snapshot =>{
    snapshot.docs.forEach(doc=>{
        renderArticles(doc);
        
    })
})

