import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogDetailDialogComponent } from './dog-detail-dialog-component';

describe('DogDetailDialogComponent', () => {
  let component: DogDetailDialogComponent;
  let fixture: ComponentFixture<DogDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogDetailDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
