import { Component, OnInit } from '@angular/core';
//import { User } from 'src/app/models/user';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})

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

