import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDomAdditionComponent } from './form-dom-addition.component';

describe('FormDomAdditionComponent', () => {
  let component: FormDomAdditionComponent;
  let fixture: ComponentFixture<FormDomAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDomAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDomAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
