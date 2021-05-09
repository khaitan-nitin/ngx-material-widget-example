import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDisplayInColumnComponent } from './form-display-in-column.component';

describe('FormDisplayInColumnComponent', () => {
  let component: FormDisplayInColumnComponent;
  let fixture: ComponentFixture<FormDisplayInColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDisplayInColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDisplayInColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
