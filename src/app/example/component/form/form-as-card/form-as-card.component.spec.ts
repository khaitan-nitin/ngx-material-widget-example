import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAsCardComponent } from './form-as-card.component';

describe('FormAsCardComponent', () => {
  let component: FormAsCardComponent;
  let fixture: ComponentFixture<FormAsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
