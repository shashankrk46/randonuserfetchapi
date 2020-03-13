const randonUser= new RandomUser();

const searchProfile=document.getElementById('searchProfile');

searchProfile.addEventListener('keyup',(e)=>{
    const userText=e.target.value;

    if(userText !==''){
      randonUser.getRandon(userText)
      .then(data=>{
          console.log(data)

      })
    }
})