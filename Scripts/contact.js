
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  const auth = firebase.auth()
  var db = firebase.firestore()

const form = document.querySelector(".contact");
// saving data
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log('thanks')
  db.collection("Contact").add({
    Name: form.name.value,
    Email: form.email.value,
    Message: form.message.value,
  }).then(function (response){

 form.name.value = " ";
  form.email.value = " ";
  form.message.value = " ";
  }).catch(function(error){
    console.log(error)
  });


//   form.name.value = " ";
//   form.email.value = " ";
//   form.message.value = " ";
});

