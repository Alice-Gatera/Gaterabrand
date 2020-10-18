

var messageList = document.querySelector("#messages-list");
const form = document.querySelector(".contact");
// create element and render message
function renderMessage(doc) {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let email = document.createElement("span");
  let message = document.createElement("span");
  // let cross = document.createElement("div");

  name.setAttribute("class", "infos");
  email.setAttribute("class", "email");
  message.setAttribute("class", "contactMessage");
  // cross.setAttribute("class", "delete");
  li.setAttribute("class", "list");

  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().Name;
  email.textContent = doc.data().Email;
  message.textContent = doc.data().Message;
  // cross.textContent = "x";

  // li.appendChild(cross);
  li.appendChild(name);
  li.appendChild(email);
  li.appendChild(message);
  messageList.appendChild(li);
}
//to get data
db.collection("Contact")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      // console.log(doc.data());
      renderMessage(doc);
    });
  });
// saving data
form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("Contact").add({
    Name: form.name.value,
    Email: form.email.value,
    Message: form.message.value,
  });
  form.name.value = " ";
  form.email.value = " ";
  form.message.value = " ";
});
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
