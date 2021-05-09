import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInModalComponent } from './form-in-modal.component';

describe('FormInModalComponent', () => {
  let component: FormInModalComponent;
  let fixture: ComponentFixture<FormInModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
