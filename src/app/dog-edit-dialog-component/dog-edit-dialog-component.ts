import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-dog-edit-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  template: `
    <h2 mat-dialog-title>Datos del perro:</h2>
    <form [formGroup]="form" (ngSubmit)="onSave()">
      <mat-dialog-content class="dialog-content">
        
        <div *ngIf="data.image?.url" class="image-preview">
          <img [src]="data.image.url" alt="{{data.name}}" class="preview-image">
        </div>
        
        <!-- Campos del formulario para todas las propiedades -->
        <mat-form-field appearance="fill">
          <mat-label>Nombre</mat-label>
          <input matInput formControlName="name">
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Peso (kg)</mat-label>
          <input matInput formControlName="weightMetric" type="text">
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Esperanza de vida</mat-label>
          <input matInput formControlName="life_span">
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Criado para</mat-label>
          <input matInput formControlName="bred_for">
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Grupo de raza</mat-label>
          <input matInput formControlName="breed_group">
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Temperamento</mat-label>
          <input matInput formControlName="temperament">
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>URL de la imagen</mat-label>
          <input matInput formControlName="imageUrl">
        </mat-form-field>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button mat-button type="button" mat-dialog-close>Cancelar</button>
        <button mat-button color="primary" type="submit">Guardar</button>
      </mat-dialog-actions>
    </form>
  `,
  styles: [`
    .preview-image {
      max-width: 100%;
      max-height: 200px;
      margin-bottom: 15px;
    }
    .dialog-content {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  `]
})
export class DogEditDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DogEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      name: [data.name],
      weightMetric: [data.weight?.metric || ''],
      life_span: [data.life_span],
      bred_for: [data.bred_for || ''],
      breed_group: [data.breed_group || ''],
      temperament: [data.temperament || ''],
      imageUrl: [data.image?.url || '']
    });
  }

  onSave() {
    const updatedDog = {
      ...this.data,
      name: this.form.value.name,
      weight: {
        ...this.data.weight,
        metric: this.form.value.weightMetric
      },
      life_span: this.form.value.life_span,
      bred_for: this.form.value.bred_for,
      breed_group: this.form.value.breed_group,
      temperament: this.form.value.temperament,
      image: {
        ...this.data.image,
        url: this.form.value.imageUrl || 'assets/default-dog.png'
      }
    };
    this.dialogRef.close(updatedDog);
  }
}