import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabledogs } from './tabledogs';

describe('Tabledogs', () => {
  let component: Tabledogs;
  let fixture: ComponentFixture<Tabledogs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tabledogs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tabledogs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
