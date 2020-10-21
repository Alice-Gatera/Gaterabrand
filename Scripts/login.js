
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
        // window.open("../Htmls/Admin/articleDashboard.html")
        window.location.href = "../Htmls/Admin/articleDashboard.html"
    }).catch((e) => {
      e = e["code"]
      if(e == "auth/wrong-password"){
        document.querySelector(".error-message").style.display = "flex"
        loginForm["password"].value = ""
      }
    })
  })
})
