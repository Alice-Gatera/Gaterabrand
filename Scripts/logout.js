  //Logout
  const logout = document.querySelector(".logout");
  logout.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('user logged out');
    auth.signOut().then(() => {
    //   console.log('user logged out');
      window.location.replace("../login.htm");
    })
  })
//Handle Account Status
firebase.auth().onAuthStateChanged(user => {
  if(!user) {
    window.location.href = '../login.html'; //If User is not logged in, redirect to login page
  }
})