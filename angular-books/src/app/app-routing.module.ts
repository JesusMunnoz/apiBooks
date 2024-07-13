import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { BooksComponent } from './pages/books/books.component';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {UpdateBookComponent} from './pages/update-book/update-book.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './component/form-login/form-login.component';


const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "registro", component: RegisterComponent}, 
  {path: "books", component: BooksComponent},
  {path: "formReg", component: FormRegisterComponent},
  {path: "perfil", component: ProfileComponent}, 
  {path: "update", component: UpdateBookComponent},
  {path: "add", component: AddBookComponent},
  {path: "login", component: LoginComponent},
  {path: "formLog", component: FormLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
