import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogEditDialogComponent } from './dog-edit-dialog-component';

describe('DogEditDialogComponent', () => {
  let component: DogEditDialogComponent;
  let fixture: ComponentFixture<DogEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogEditDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
