import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRowHoverComponent } from './list-row-hover.component';

describe('ListRowHoverComponent', () => {
  let component: ListRowHoverComponent;
  let fixture: ComponentFixture<ListRowHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRowHoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRowHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
