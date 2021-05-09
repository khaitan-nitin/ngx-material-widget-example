import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListColumnWidthComponent } from './list-column-width.component';

describe('ListColumnWidthComponent', () => {
  let component: ListColumnWidthComponent;
  let fixture: ComponentFixture<ListColumnWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListColumnWidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListColumnWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
