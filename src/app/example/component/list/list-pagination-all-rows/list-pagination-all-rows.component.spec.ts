import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaginationAllRowsComponent } from './list-pagination-all-rows.component';

describe('ListPaginationAllRowsComponent', () => {
  let component: ListPaginationAllRowsComponent;
  let fixture: ComponentFixture<ListPaginationAllRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPaginationAllRowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaginationAllRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
