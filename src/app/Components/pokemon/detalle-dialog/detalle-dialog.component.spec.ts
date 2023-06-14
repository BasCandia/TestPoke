import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDialogComponent } from './detalle-dialog.component';

describe('DetalleDialogComponent', () => {
  let component: DetalleDialogComponent;
  let fixture: ComponentFixture<DetalleDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleDialogComponent]
    });
    fixture = TestBed.createComponent(DetalleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
