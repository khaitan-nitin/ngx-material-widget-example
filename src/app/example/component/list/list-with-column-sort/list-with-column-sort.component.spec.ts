import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithColumnSortComponent } from './list-with-column-sort.component';

describe('ListWithColumnSortComponent', () => {
  let component: ListWithColumnSortComponent;
  let fixture: ComponentFixture<ListWithColumnSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWithColumnSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWithColumnSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
