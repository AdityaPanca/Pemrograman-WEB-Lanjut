import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AditFormRegisterComponent } from './adit-form-register.component';

describe('AditFormRegisterComponent', () => {
  let component: AditFormRegisterComponent;
  let fixture: ComponentFixture<AditFormRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AditFormRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AditFormRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
