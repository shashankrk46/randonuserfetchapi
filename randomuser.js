class RandomUser{
    // make http get request

    constructor(name,location){
        this.name=name;
        this.location=location;
    }

    async getRandon(user){
        const response=await fetch(`https://randomuser.me/api/?${user},name=${this.name}&location=${this.location}`);

        const profileData=await response.json();

        return profileData
    }
}

