
var messageList = document.querySelector("#messages-list");

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