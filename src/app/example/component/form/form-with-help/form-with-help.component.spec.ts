import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithHelpComponent } from './form-with-help.component';

describe('FormWithHelpComponent', () => {
  let component: FormWithHelpComponent;
  let fixture: ComponentFixture<FormWithHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWithHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
