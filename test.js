
// logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    window.location.href = "/Htmls/login.html"
    console.log("User has logged out");
  });
});

// const loggedOut= document.querySelectorAll('#logout');
// const loggedIn = document.querySelectorAll('#logged-in');

// auth.onAuthStateChanged((user)=>{
//   if(user){
//     setupUI(user) 
//     // console.log('user logged in ' +user.email)
//   }else{
//     setupUI()
//   }
// })
// const setupUI = (user) => {
//   if (user) {
//     // toggle user UI elements
//     loggedIn.forEach(item => item.style.display = 'block');
//     loggedOut.forEach(item => item.style.display = 'none');
//   } else {
//     // toggle user elements
//     loggedIn.forEach(item => item.style.display = 'none');
//     loggedOut.forEach(item => item.style.display = 'block');
//   }
// };
const auth = firebase.auth()
// const db = firebase.firestore()
const loginForm = document.querySelector('.userForm')
//login form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    //get user data
    const email = loginForm['email'].value
    const password = loginForm['password'].value

    auth.signInWithEmailAndPassword(email, password).then((cred) => 
    {
    auth.signInWithEmailAndPassword(email, password).then(() => {
        loginForm.reset()
        window.open("../Htmls/Admin/articleDashboard.html")
        window.location.href = "Htmls\Admin\articleDashboard.html"
    }).catch((e) => {
      e = e["code"]
      if(e == "auth/wrong-password"){
        document.querySelector(".error-message").style.display = "flex"
        loginForm["password"].value = ""
      }
    })
  })
})