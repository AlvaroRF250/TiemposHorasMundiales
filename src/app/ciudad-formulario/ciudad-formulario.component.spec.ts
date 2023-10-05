import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadFormularioComponent } from './ciudad-formulario.component';

describe('CiudadFormularioComponent', () => {
  let component: CiudadFormularioComponent;
  let fixture: ComponentFixture<CiudadFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CiudadFormularioComponent]
    });
    fixture = TestBed.createComponent(CiudadFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
