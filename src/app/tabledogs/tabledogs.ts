import { Component, OnInit, AfterViewInit, ViewChild, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DogDetailDialogComponent } from '../dog-detail-dialog-component/dog-detail-dialog-component';
import { DogEditDialogComponent } from '../dog-edit-dialog-component/dog-edit-dialog-component';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { InfoUser } from '../info-user/info-user';

interface Dog {
  id: string;
  name: string;
  weight: { metric: string; imperial: string; };
  life_span: string;
  bred_for: string;
  breed_group: string;
  temperament: string;
  image: {
    id: string;
    width: number;
    height: number;
    url: string
  };
}

@Component({
  selector: 'app-tabledogs',
  imports: [
    InfoUser,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  templateUrl: './tabledogs.html',
  styleUrls: ['./tabledogs.css']
})
export class Tabledogs implements AfterViewInit, OnInit {
  http = inject(HttpClient);
  dialog = inject(MatDialog);
  dataSource = new MatTableDataSource<Dog>([]);

  displayedColumns: string[] = [
    'position',
    'image',
    'name',
    'weight',
    'life_span',
    'bred_for',
    'breed_group',
    'temperament',
    'actions'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.getDogs();
    this.dataSource.filterPredicate = (data: Dog, filter: string) => {
      const dataStr = [
        data.id,
        data.name,
        data.weight.metric,
        data.life_span,
        data.bred_for,
        data.breed_group,
        data.temperament
      ].join(' ').toLowerCase();
      return dataStr.includes(filter);
    };
  }

  getDogs() {
    this.http.get<Dog[]>('https://api.thedogapi.com/v1/breeds?q=akita&api_key=live_1JljfttFPQlUYNgOCeLQL5SNVrGcTblBzlULXOBYYIIASOo5FJvajmFDra1g5Uwr')
      .subscribe((res: Dog[]) => {
        this.dataSource.data = res;
      });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  viewMore(dog: Dog) {
    this.dialog.open(DogDetailDialogComponent, {
      width: '400px',
      data: dog
    });
  }

  modify(dog: Dog): void {
    const dialogRef = this.dialog.open(DogEditDialogComponent, {
      data: { ...dog } // Clonar el objeto para evitar mutación directa
    });

    dialogRef.afterClosed().subscribe(updatedDog => {
      if (updatedDog) {
        const index = this.dataSource.data.findIndex(d => d.id === updatedDog.id);

        if (index !== -1) {
          const newData = [...this.dataSource.data];
          newData[index] = updatedDog;
          this.dataSource.data = newData;
        }
      }
    });
  }

  delete(dog: Dog) {
    const confirmDelete = confirm(`¿Estás seguro de eliminar a "${dog.name}"?`);
    if (confirmDelete) {
      this.dataSource.data = this.dataSource.data.filter(d => d.id !== dog.id);
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addDog() {
    const dialogRef = this.dialog.open(DogEditDialogComponent, {
      data: {
        id: '', name: '', weight: { metric: '', imperial: '' },
        life_span: '', bred_for: '', breed_group: '',
        temperament: '', image: { id: '', width: 0, height: 0, url: '' }
      }
    });

    dialogRef.afterClosed().subscribe((newDog: Dog) => {
      if (newDog) {
        this.dataSource.data = [newDog, ...this.dataSource.data];
      }
    });
  }



}