import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public myRegister: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.buildForm();
  }

  private buildForm(){
    const minPassLength = 8;

    this.myRegister = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(minPassLength)]]
    });
  }

  onSubmit(){
    if(this.myRegister.valid){
      console.log('registro valido');
      console.log(this.myRegister.value);
    }else{
      console.log('registro invalido');
      
    }
  }

  ngOnInit(): void{
    
  }

}
