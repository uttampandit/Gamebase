firebase.auth.Auth.Persistence.LOCAL;

const signout= document.getElementById("signoutbutton");

signout.addEventListener("click",e=>{
    auth.signOut();
})

auth.onAuthStateChanged(user=> {
    if(!user){
     window.location.href='login-page.html';
    
    }
}); 
const user = auth.currentUser;
const email = user.email;
 
  console.log(email);
