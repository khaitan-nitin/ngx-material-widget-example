import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStickyHeaderComponent } from './list-sticky-header.component';

describe('ListStickyHeaderComponent', () => {
  let component: ListStickyHeaderComponent;
  let fixture: ComponentFixture<ListStickyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStickyHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStickyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
