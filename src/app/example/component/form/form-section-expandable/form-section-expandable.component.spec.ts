import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSectionExpandableComponent } from './form-section-expandable.component';

describe('FormSectionExpandableComponent', () => {
  let component: FormSectionExpandableComponent;
  let fixture: ComponentFixture<FormSectionExpandableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSectionExpandableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSectionExpandableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
