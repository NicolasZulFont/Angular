import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLugaresComponent } from './edit-lugares.component';

describe('EditLugaresComponent', () => {
  let component: EditLugaresComponent;
  let fixture: ComponentFixture<EditLugaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLugaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
