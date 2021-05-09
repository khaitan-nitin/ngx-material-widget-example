import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddMoreInFieldComponent } from './form-add-more-in-field.component';

describe('FormAddMoreInFieldComponent', () => {
  let component: FormAddMoreInFieldComponent;
  let fixture: ComponentFixture<FormAddMoreInFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddMoreInFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddMoreInFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
