import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})


export class FormRegisterComponent {
  public myRegister: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.buildForm();
  }

  private buildForm() {
    const minPassLength = 8;

    this.myRegister = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(minPassLength)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(minPassLength)]]
    });
  }

  onSubmit() {
    if (this.myRegister.valid) {
      const password = this.myRegister.value.password;
      const confirmPassword = this.myRegister.value.confirmPassword;

      if (password === confirmPassword) {
        const user = new User(
          0,
          this.myRegister.value.nombre,
          this.myRegister.value.apellido,
          this.myRegister.value.email,
          '', // Puede que quieras añadir un campo para la URL de la foto en el formulario
          password
        );

        this.userService.register(user).subscribe(
          (data: User) => {
            this.userService.setUser(data);
            console.log('registro bueno', data);
          },
          error => {
            console.error('registro error', error);
          }
        );
      } else {
        console.log('Passwords error');
      }
    } else {
      console.log('Registro malo');
    }
  }

  ngOnInit(): void {}
}

/*
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

  ngOnInit(): void {}

}
*/
