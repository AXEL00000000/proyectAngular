import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';  // ← nueva importación
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserDialogComponent } from '../user-dialog.component/user-dialog.component'; // Ajusta ruta si es distinta

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  image: string;
}

@Component({
  selector: 'app-info-user',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './info-user.html',
  styleUrls: ['./info-user.css']
})
export class InfoUser implements OnInit {
  currentUser: User | null = null;
  isMenuOpen = false;

  // Inyectamos PLATFORM_ID para saber si estamos en browser o servidor
  constructor(
    private router: Router,
    private dialog: MatDialog,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Sólo cargamos datos de localStorage en el cliente
    if (isPlatformBrowser(this.platformId)) {
      this.loadUserData();
    }
  }

  private loadUserData(): void {
    const userData = localStorage.getItem('userData');
    if (userData) {
      this.currentUser = JSON.parse(userData);
    }
  }

  navigateToProfile(): void {
    if (this.currentUser) {
      this.dialog.open(UserDialogComponent, {
        data: this.currentUser,
        width: '600px'
      });
    } else {
      console.error('No hay usuario actual para mostrar');
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('userData');
    }
    this.router.navigate(['/login']);
  }
}
