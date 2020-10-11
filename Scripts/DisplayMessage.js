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

var listMessage = document.querySelector("#list- message");
var form = document.querySelector("#message-form");

// renderMessage
function renderMessage(doc) {
  let li = document.createElement("li");
  let email = document.createElement("span");
  let name = document.createElement("span");
  let message = document.createElement("span");
  let cross = document.createElement("div");

  li.setAttribute("data.id", doc.id);
  name.textContent = doc.data().Name;
  email.textContent = doc.data().Email;
  message.textContent = doc.data().Message;
  cross.textContent = "X";

  //   contact.reset();
}
