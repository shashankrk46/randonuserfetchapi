const randonUser= new RandomUser();
const ui=new UI();
 
const searchProfile=document.getElementById('profileDisplay');

        document.getElementById('next').addEventListener('click',nextProfile);
        
        // next profile display
        function nextProfile(){
          randonUser.getRandon()
  .then(data=>{
    console.log(data.results);
    ui.sketch(data.results);
  })
  .catch(err=>console.log(err));
}

// document.addEventListener('DOMContentLoaded',getRandon);

// function getRandon(){
// randonUser.getRandon()
//   .then(results=>{
//     console.log(results);
//     ui.sketch(results);
//   })
//   .catch(err=>console.log(err));
// }