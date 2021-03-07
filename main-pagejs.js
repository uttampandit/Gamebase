firebase.auth.Auth.Persistence.LOCAL;
const upload = document.querySelector('#upload');
const search= document.getElementById("searchbar");
const signout= document.getElementById("signoutbutton");
const home= document.getElementById('home');
const searchbutton= document.getElementById('search');

signout.addEventListener("click",e=>{
    auth.signOut();
})

auth.onAuthStateChanged(user=> {
    if(!user){
     window.location.href='home-page.html';
    
    
    }else{
        search.addEventListener('click', ()=>{
            search.style.width="800px";
        })

        database.collection('users').where('email','==', user.email).get().then((snapshot =>{
            snapshot.docs.forEach((doc)=>{
                if(doc.data().admin==true){
                    upload.style.display='block';
                    search.addEventListener('click', ()=>{
                        search.style.width="700px";
                    })
                   
                    search.style.left="320px";
                  
                    searchbutton.style.marginLeft="870px";
                }
            })
        }))
    }
}); 




 
  
