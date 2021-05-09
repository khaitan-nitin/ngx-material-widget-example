import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithBadgeComponent } from './button-with-badge.component';

describe('ButtonWithBadgeComponent', () => {
  let component: ButtonWithBadgeComponent;
  let fixture: ComponentFixture<ButtonWithBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWithBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWithBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
