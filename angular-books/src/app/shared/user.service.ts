import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class UserService {
    private myApi: string = 'http://localhost:3000'; // URL de tu API REST
    public logueado: boolean = false;
    public user: User | null = null;
  
    constructor(private http: HttpClient) {}
  
    register(user: User): Observable<User> {
      return this.http.post<User>(`${this.myApi}/register`, user);
    }
  
    login(user: User): Observable<User> {
      return this.http.post<User>(`${this.myApi}/login`, user);
    }
  
    setUser(user: User): void {
      this.user = user;
      this.logueado = true;
    }
  
    logout(): void {
      this.user = null;
      this.logueado = false;
    }
}