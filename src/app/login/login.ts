import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import {ChangeDetectorRef } from '@angular/core';
import { Route } from '@angular/router';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  image: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule, 
    CommonModule, 
    MatCardModule, 
    MatInputModule,
    MatButtonModule, 
    MatIconModule, 
    MatFormFieldModule,
    MatDividerModule,
    HttpClientModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  user = {
    email: '',
    password: "",
  };
  
  currentUser: User | null = null;
  isLoading = false;
  errorMessage = '';
  showUserNotFoundError = false;
  isFlipped = false;

  private readonly API_URL = 'https://68743fcedd06792b9c937143.mockapi.io/api/users';

  constructor(
    private router: Router,
    private http: HttpClient,
    private cdRef: ChangeDetectorRef 
  ) {}

  login() {
  this.isLoading = true;
  this.errorMessage = '';
  this.showUserNotFoundError = false;

  this.http.get<User[]>(`${this.API_URL}?email=${this.user.email}`)
    .pipe(
      map(users => {
        if (users.length === 0) {
          this.showUserNotFoundError = true;
          throw new Error('No se ha encontrado un usuario con este email');
        }
        
        const user = users[0];
        if (user.password !== this.user.password) {
          throw new Error('Contraseña incorrecta');
        }
        
        return user;
      }),
      catchError(error => {
        this.isLoading = false;
        if (!this.showUserNotFoundError) {
          this.errorMessage = error.message || 'Error en el inicio de sesión';
        }
        console.error('Error en login:', error);
        return of(null);
      })
    )
    .subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response) {
          console.log('¡Login exitoso!', response);
          localStorage.setItem("userData", JSON.stringify(response));
          this.router.navigate(['tabledogs']); // Redirige aquí
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error en la suscripción:', error);
      }
    });
}

}