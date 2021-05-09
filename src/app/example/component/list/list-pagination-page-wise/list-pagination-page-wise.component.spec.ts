import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaginationPageWiseComponent } from './list-pagination-page-wise.component';

describe('ListPaginationPageWiseComponent', () => {
  let component: ListPaginationPageWiseComponent;
  let fixture: ComponentFixture<ListPaginationPageWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPaginationPageWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaginationPageWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
