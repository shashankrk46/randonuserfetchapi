class UI{
    constructor(){
       this.profile=document.getElementById('profileDisplay');
    }

    sketch(user){
        console.log(user[0].name.first);
        this.profile.innerHTML=`
        <ul class="list-group">
        <li class="list-group-item">Firstname:${user[0].name.first} <br> Lastname:${user[0].name.last} </li>
        <li class="list-group-item">Age:${user[0].dob.age}</li>
        <li class="list-group-item">Location:${user[0].location.country}</li>
        <li class="list-group-item">Gender:${user[0].gender} </li>
        </ul>`;

        document.getElementById('imageDisplay').innerHTML=`
        <img src=${user[0].picture.large}>`;

    }
}