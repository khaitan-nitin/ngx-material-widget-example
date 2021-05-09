import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRowSelectableComponent } from './list-row-selectable.component';

describe('ListRowSelectableComponent', () => {
  let component: ListRowSelectableComponent;
  let fixture: ComponentFixture<ListRowSelectableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRowSelectableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRowSelectableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
