class User {
    constructor (id_User, name, last_name, email, photo, password){
        this.id_User = id_User;
        this.name =name;
        this.last_name = last_name;
        this.email = email;
        this.photo = photo;
        this.password = password;
    }

}

module.exports = User;