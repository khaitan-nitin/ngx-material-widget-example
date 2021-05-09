import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomRowTextColorComponent } from './list-custom-row-text-color.component';

describe('ListCustomRowTextColorComponent', () => {
  let component: ListCustomRowTextColorComponent;
  let fixture: ComponentFixture<ListCustomRowTextColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCustomRowTextColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomRowTextColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
