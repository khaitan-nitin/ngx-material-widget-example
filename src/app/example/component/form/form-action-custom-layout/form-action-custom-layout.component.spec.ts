import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActionCustomLayoutComponent } from './form-action-custom-layout.component';

describe('FormActionCustomLayoutComponent', () => {
  let component: FormActionCustomLayoutComponent;
  let fixture: ComponentFixture<FormActionCustomLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormActionCustomLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActionCustomLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
