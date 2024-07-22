import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})


export class FormLoginComponent implements OnInit {
  public myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.buildForm();
  }

  private buildForm() {
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(minPassLength)]]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const email = this.myForm.value.email;
      const password = this.myForm.value.password;

      const user = new User(0, '', '', email, '', password);
      this.userService.login(user).subscribe(
        (data: User) => {
          if (data) {
            this.userService.setUser(data);
            console.log('Login successful', data);
            this.router.navigateByUrl('/books');
          } else {
            console.log('Invalid email or password');
          }
        },
        error => {
          console.error('Login error', error);
          console.log('Invalid email or password');
        }
      );
    } else {
      console.log('Invalid form');
    }
  }

  ngOnInit(): void {}
}
/*
export class FormLoginComponent implements OnInit{
  
  public myForm: FormGroup;

  constructor (private formBuilder: FormBuilder){
    this.buildForm();
  }
  
  private buildForm(){
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['',[ Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(minPassLength)]]
    });
  }

  onSubmit(){
    if(this.myForm.valid){
      console.log('valido');
      console.log(this.myForm.value);
    }else{
      console.log('invalido');
      
    }
  }

  ngOnInit(): void{

  }
}
*/
