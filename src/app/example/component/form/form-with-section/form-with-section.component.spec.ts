import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithSectionComponent } from './form-with-section.component';

describe('FormWithSectionComponent', () => {
  let component: FormWithSectionComponent;
  let fixture: ComponentFixture<FormWithSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWithSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
