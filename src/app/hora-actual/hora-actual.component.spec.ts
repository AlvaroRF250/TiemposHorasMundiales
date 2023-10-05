import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraActualComponent } from './hora-actual.component';

describe('HoraActualComponent', () => {
  let component: HoraActualComponent;
  let fixture: ComponentFixture<HoraActualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoraActualComponent]
    });
    fixture = TestBed.createComponent(HoraActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
