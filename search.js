upload=document.getElementById("upload-game");
 signout=document.getElementById('signoutbutton');

    signout.addEventListener("click",e=>{
    auth.signOut();
})
    auth.onAuthStateChanged(user=> {
    if(!user){
     window.location.href='home-page.html';
    
    }else{
        

        database.collection('users').where('email','==', user.email).get().then((snapshot =>{
            snapshot.docs.forEach((doc)=>{
                if(doc.data().admin==true){
                    upload.style.display='block';
                    signout.style.marginLeft='-80px';
                    
                }
            })
        }))
    }
}); 

const searchbutton= document.getElementById('search');
const search= document.getElementById("searchbar");

row = document.getElementsByClassName('col-sm-4');




    function searchfun(){
        filter = document.getElementById('searchbar').value.toUpperCase();
        var j= 0;
        if(filter!=''){
        for( var i=0;i<row.length;i++){
        var  gamename= row[i].getElementsByTagName('h3')[0].innerText.toUpperCase();
    
            if(gamename){
            if(gamename.indexOf(filter) != -1 ){
                row[i].style.display='block';
                error.style.display='none';
                console.log(gamename.indexOf(filter));
                j++;
            }
            else{
                error = document.getElementById('error');
                row[i].style.display='none';
                console.log('error');
            }
            }
        }
    }
        else{
            for(var i=0;i<row.length;i++){
                row[i].style.display='none';
                error.style.display='none';
            }
        }
        if(j==0){
            error.style.display='block';
        }
    }







        
    
