class UI{
    constructor(){
       this.profile=document.getElementById('profileDisplay');
    }

    sketch(user){
        console.log(user);
        this.profile.innerHTML=`
        <ul class="list-group">
        <li class="list-group-item">Name:${user.name} </li>
        <li class="list-group-item">Age:${user.Age}</li>
        <li class="list-group-item">Location:${user.Location}</li>
        <li class="list-group-item">Preference:${user.gender} looking for ${user.lookingfor}</li>
        </ul>`;

        document.getElementById('imageDisplay').innerHTML=`
        <img src=${user.image}">;
`
    }
}