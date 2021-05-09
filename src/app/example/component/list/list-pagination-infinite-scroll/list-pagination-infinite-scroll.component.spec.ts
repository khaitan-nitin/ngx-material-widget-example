import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaginationInfiniteScrollComponent } from './list-pagination-infinite-scroll.component';

describe('ListPaginationInfiniteScrollComponent', () => {
  let component: ListPaginationInfiniteScrollComponent;
  let fixture: ComponentFixture<ListPaginationInfiniteScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPaginationInfiniteScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaginationInfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
