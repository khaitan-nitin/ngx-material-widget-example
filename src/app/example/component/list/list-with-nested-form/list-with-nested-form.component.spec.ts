import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithNestedFormComponent } from './list-with-nested-form.component';

describe('ListWithNestedFormComponent', () => {
  let component: ListWithNestedFormComponent;
  let fixture: ComponentFixture<ListWithNestedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWithNestedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWithNestedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
