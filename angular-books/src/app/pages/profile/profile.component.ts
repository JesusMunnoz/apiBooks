import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public miUser: User;

  constructor(){
    this.miUser = new User(0, "Perico", "Palotes", "prcPalts@gmail.com", "https://img.freepik.com/foto-gratis/perrito-joven-posando-alegre_155003-28765.jpg", "prcPalts");
  }

  enviar(newName: string, newLastName: string, newEmail: string, newPhoto: string){
    console.log(this.miUser.name);
    this.miUser.name = newName;
    console.log(this.miUser.name);

    console.log(this.miUser.last_name);
    this.miUser.last_name = newLastName;
    console.log(this.miUser.last_name);

    console.log(this.miUser.email);
    this.miUser.email = newEmail;
    console.log(this.miUser.email);

    console.log(this.miUser.photo);
    this.miUser.photo = newPhoto;
    console.log(this.miUser.photo);
  }

  ngOnInit(): void{

  }
}
