import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithNestedListComponent } from './list-with-nested-list.component';

describe('ListWithNestedListComponent', () => {
  let component: ListWithNestedListComponent;
  let fixture: ComponentFixture<ListWithNestedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWithNestedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWithNestedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
