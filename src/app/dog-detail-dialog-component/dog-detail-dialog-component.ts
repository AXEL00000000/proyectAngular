import { CommonModule } from '@angular/common';
import { Component, Inject }      from '@angular/core';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-dog-detail-dialog',
  imports: [
    MatDialogModule,
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  template: 
  `
    <h2 mat-dialog-title>Detalles de {{ data.name }}</h2>
    <mat-dialog-content>
      <p><strong>Nombre:</strong> {{ data.name }}</p>
      <p><strong>Peso:</strong> {{ data.weight.metric }} kg ({{ data.weight.imperial }} lbs)</p>
      <p><strong>Esperanza de vida:</strong> {{ data.life_span }}</p>
      <p><strong>Criado para:</strong> {{ data.bred_for }}</p>
      <p><strong>Grupo de raza:</strong> {{ data.breed_group }}</p>
      <p><strong>Temperamento:</strong> {{ data.temperament }}</p>  
      <div *ngIf="data.image?.url" class="image-container">
        <img 
          [src]="data.image.url" 
          alt="{{data.name}}"
          class="detail-image"
          onerror="this.src='https://material.angular.dev/assets/img/examples/shiba2.jpg'">
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cerrar</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .detail-image {
      max-width: 100%;
      max-height: 300px;
      border-radius: 8px;
    }
    .image-container {
      text-align: center;
      margin-top: 15px;
    }
  `]
})
export class DogDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DogDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
