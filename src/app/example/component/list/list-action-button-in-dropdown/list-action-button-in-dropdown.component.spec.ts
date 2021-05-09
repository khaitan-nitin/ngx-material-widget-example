import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActionButtonInDropdownComponent } from './list-action-button-in-dropdown.component';

describe('ListActionButtonInDropdownComponent', () => {
  let component: ListActionButtonInDropdownComponent;
  let fixture: ComponentFixture<ListActionButtonInDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActionButtonInDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActionButtonInDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
