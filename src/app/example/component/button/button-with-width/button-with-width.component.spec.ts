import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithWidthComponent } from './button-with-width.component';

describe('ButtonWithWidthComponent', () => {
  let component: ButtonWithWidthComponent;
  let fixture: ComponentFixture<ButtonWithWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWithWidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWithWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
