import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithoutHeaderComponent } from './list-without-header.component';

describe('ListWithoutHeaderComponent', () => {
  let component: ListWithoutHeaderComponent;
  let fixture: ComponentFixture<ListWithoutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWithoutHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWithoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
