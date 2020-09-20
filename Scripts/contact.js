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
   var db= firebase.firestore()

   var contact = document.querySelector('.contact')
contact.addEventListener('submit',(e)=> {
e.preventDefault()
db.collection('Contact').add({
    Name: contact.name.value,
    Email:contact.email.value,
    Message:contact.message.value,
    Date : new Date()
})
contact.reset()
})