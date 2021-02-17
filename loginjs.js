firebase.auth.Auth.Persistence.LOCAL;

  const signinbutton = document.getElementById("signinbutton");
  

  signinbutton.addEventListener("click",(e)=>{
    const email = document.getElementById('email').value;
    const password = document.querySelector('#password').value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
       
        const form=document.querySelector('.loginform');
        form.reset();
        console.log("user signed in");
           document.getElementById('error').innerHTML='';
               }).catch(err=> {
                   document.getElementById('error').innerHTML=err.message;
               })
  })

 auth.onAuthStateChanged(user=> {
    if(user){
     window.location.href='main-page.html';
    }
    else{
         window.location.href='login-page.html';
    }
}); 

const signout=document.getElementById('signoutbutton');
signout.addEventListener('click',e=>{
    e.preventDefault();
    auth.signOut().then(()=>{
        console.log('user sign out');
    }).catch(err=>{
        console.log(err.message);
    });
   
})