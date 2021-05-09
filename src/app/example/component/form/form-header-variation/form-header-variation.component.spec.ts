import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHeaderVariationComponent } from './form-header-variation.component';

describe('FormHeaderVariationComponent', () => {
  let component: FormHeaderVariationComponent;
  let fixture: ComponentFixture<FormHeaderVariationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHeaderVariationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHeaderVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
